import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProperties } from "../PropertyContext";

export default function RentersSearch() {
  const { properties } = useProperties();
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [propertyType, setPropertyType] = useState("");
  const [availability, setAvailability] = useState("all");
  const [favorites, setFavorites] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState(properties);

  // New state for location filters
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [area, setArea] = useState("");

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  //  UseEffect to filter properties dynamically
  useEffect(() => {
    const filtered = properties.filter((property) => {
      const matchesQuery =
        (!country || property.country.toLowerCase().includes(country.toLowerCase())) &&
        (!state || property.state.toLowerCase().includes(state.toLowerCase())) &&
        (!district || property.district.toLowerCase().includes(district.toLowerCase())) &&
        (!area || property.area.toLowerCase().includes(area.toLowerCase()));

      const matchesPrice =
        (!priceRange.min || property.price >= priceRange.min) &&
        (!priceRange.max || property.price <= priceRange.max);

      const matchesType = !propertyType || property.type === propertyType;

      const matchesAvailability =
        availability === "all" ||
        (availability === "available" && property.available) ||
        (availability === "not-available" && !property.available);

      return matchesQuery && matchesPrice && matchesType && matchesAvailability;
    });

    setFilteredProperties(filtered);
  }, [country, state, district, area, priceRange, propertyType, availability, properties]); // Dependencies ensure it updates on changes

  const toggleFavorite = (propertyId) => {
    const idString = propertyId.toString(); 
  
    let updatedFavorites;
    if (favorites.includes(idString)) {
      updatedFavorites = favorites.filter((id) => id !== idString);
    } else {
      updatedFavorites = [...favorites, idString];
    }
  
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };
  

  // Handle form input changes
  const handleInputChange = (setter) => (e) => setter(e.target.value);
  const handlePriceChange = (e) =>
    setPriceRange({ ...priceRange, [e.target.name]: Number(e.target.value) });

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Search Properties
      </h2>

      {/* Location Filters */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold">Country</label>
          <input
            type="text"
            value={country}
            onChange={handleInputChange(setCountry)}
            placeholder="Enter country"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">State</label>
          <input
            type="text"
            value={state}
            onChange={handleInputChange(setState)}
            placeholder="Enter state"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">District</label>
          <input
            type="text"
            value={district}
            onChange={handleInputChange(setDistrict)}
            placeholder="Enter district"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Area</label>
          <input
            type="text"
            value={area}
            onChange={handleInputChange(setArea)}
            placeholder="Enter area"
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      {/* Price Filters */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold">Min Price</label>
          <input
            type="number"
            name="min"
            value={priceRange.min}
            onChange={handlePriceChange}
            placeholder="0"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Max Price</label>
          <input
            type="number"
            name="max"
            value={priceRange.max}
            onChange={handlePriceChange}
            placeholder="100000"
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      {/* Property Type Filter */}
      <div className="mt-4">
        <label className="block font-semibold">Property Type</label>
        <select
          value={propertyType}
          onChange={handleInputChange(setPropertyType)}
          className="w-full p-2 border rounded"
        >
          <option value="">All Types</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Condo">Condo</option>
        </select>
      </div>

      {/* Availability Filter */}
      <div className="mt-4">
        <label className="block font-semibold">Availability</label>
        <select
          value={availability}
          onChange={handleInputChange(setAvailability)}
          className="w-full p-2 border rounded"
        >
          <option value="all">All</option>
          <option value="available">Available</option>
          <option value="not-available">Not Available</option>
        </select>
      </div>

      {/* Display Results */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Results:</h3>
        <ul className="mt-4">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <li key={property.id} className="mb-4 p-4 border rounded shadow-md">
                <div>
                  <h4 className="font-bold text-gray-800">{property.name}</h4>
                  <p className="text-gray-600">{property.location}</p>
                  <p className="text-gray-600">${property.price}</p>
                  <p className="text-gray-600">{property.type}</p>
                  <p className={property.available ? "text-green-500" : "text-red-500"}>
                    {property.available ? "Available" : "Not Available"}
                  </p>
                </div>
                <button onClick={() => toggleFavorite(property.id)} className="text-xl">
                  {favorites.includes(property.id) ? "❤️" : "♡"}
                </button>
              </li>
            ))
          ) : (
            <p>No properties found.</p>
          )}
        </ul>
      </div>
      <div className="mt-6 text-center">
        <Link to="/favorites" className="text-blue-600 hover:underline">
          View Favorite Properties
        </Link>
      </div>
    </div>
  );
}
