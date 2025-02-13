import { useState } from "react";
import { useProperties } from "../PropertyContext";

export default function AddProperty() {
  const { addProperty } = useProperties();
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    price: "",
    country: "",
    state: "",
    district: "",
    area: "",
    description: "",
    photos: "",
    contact: "",
    availability: "", // New availability field
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate and submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name) newErrors.name = "Property name is required";
    if (!formData.country) newErrors.country = "Country name is required";
    if (!formData.state) newErrors.state = "State name is required";
    if (!formData.district) newErrors.district = "District name is required";
    if (!formData.area) newErrors.area = "Area name is required";
    if (!formData.price || isNaN(formData.price))
      newErrors.price = "Valid price is required";
    if (!formData.description)
      newErrors.description = "Description is required";
    if (!formData.contact) newErrors.contact = "Contact info is required";
    if (!formData.availability)
      newErrors.availability = "Please select availability"; // New validation

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const newProperty = {
        ...formData,
        id: Date.now().toString(),
      };
      addProperty(newProperty);
      alert("Property added successfully!");
      setFormData({
        name: "",
        type: "",
        price: "",
        country: "",
        state: "",
        district: "",
        area: "",
        description: "",
        photos: "",
        contact: "",
        availability: "", // Reset availability
      });
      setErrors({});
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-gray-100 shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Add Property
      </h2>

      <form onSubmit={handleSubmit} className="mt-6">
        {[
          { label: "Property Name", name: "name" },
          { label: "Country", name: "country" },
          { label: "State", name: "state" },
          { label: "District", name: "district" },
          { label: "Area", name: "area" },
          { label: "Price", name: "price" },
          { label: "Photos (URL)", name: "photos" },
          { label: "Contact Info", name: "contact" },
        ].map((field) => (
          <div className="mb-4" key={field.name}>
            <label className="block font-semibold">{field.label}</label>
            <input
              type="text"
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors[field.name] && (
              <p className="text-red-500">{errors[field.name]}</p>
            )}
          </div>
        ))}

        <div className="mb-4">
          <label className="block font-semibold">Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Type</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Condo">Condo</option>
          </select>
          {errors.type && <p className="text-red-500">{errors.type}</p>}
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          ></textarea>
          {errors.description && (
            <p className="text-red-500">{errors.description}</p>
          )}
        </div>

        {/* New Availability Dropdown */}
        <div className="mb-4">
          <label className="block font-semibold">Availability</label>
          <select
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Availability</option>
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>
          {errors.availability && (
            <p className="text-red-500">{errors.availability}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded mt-4 hover:bg-green-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
