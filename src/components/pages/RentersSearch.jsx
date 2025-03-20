import { useState, useEffect } from "react";
import { useProperties } from "../PropertyContext";

export default function RentersSearch() {
  const { properties } = useProperties(); // Access properties from context
  console.log("Properties from context:", properties);

  const [filteredProperties, setFilteredProperties] = useState([]);
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [area, setArea] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [propertyType, setPropertyType] = useState("");
  const [availability, setAvailability] = useState("all");

  // Function to filter properties when search criteria change
  useEffect(() => {
    const filtered = properties.filter((property) => {
      const matchesQuery =
        (!country || property.country.toLowerCase().includes(country.toLowerCase())) &&
        (!state || property.state.toLowerCase().includes(state.toLowerCase())) &&
        (!district || property.district.toLowerCase().includes(district.toLowerCase())) &&
        (!area || property.area.toLowerCase().includes(area.toLowerCase()));

      const matchesPrice =
        (!priceRange.min || Number(property.price) >= Number(priceRange.min)) &&
        (!priceRange.max || Number(property.price) <= Number(priceRange.max));

      const matchesType = !propertyType || property.type === propertyType;

      const matchesAvailability =
        availability === "all" ||
        (availability === "available" && property.availability === "Available") ||
        (availability === "not-available" && property.availability === "Unavailable");

      return matchesQuery && matchesPrice && matchesType && matchesAvailability;
    });

    setFilteredProperties(filtered);
  }, [country, state, district, area, priceRange, propertyType, availability, properties]); // ✅ Added `properties` dependency

  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Search Properties</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="District"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Min Price"
          value={priceRange.min}
          onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={priceRange.max}
          onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
          className="p-2 border rounded"
        />
        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Types</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Condo">Condo</option>
        </select>
        <select
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="all">All</option>
          <option value="available">Available</option>
          <option value="not-available">Not Available</option>
        </select>
      </div>

      <h3 className="text-lg font-semibold mb-2">Results:</h3>
      {filteredProperties.length === 0 ? (
        <p>No properties found.</p>
      ) : (
        <ul>
          {filteredProperties.map((property) => (
            <li key={property.id} className="p-2 border rounded mb-2">
              <strong>{property.name}</strong> - {property.country}, {property.state}, {property.district}, {property.area} - ${property.price} ({property.type}) - {property.availability}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
