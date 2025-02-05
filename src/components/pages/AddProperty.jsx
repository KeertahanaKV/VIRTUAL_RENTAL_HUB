import { useState } from "react";

export default function AddProperty() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    price: "",
    location: "",
    description: "",
    photos: "",
    contact: "",
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
    if (!formData.type) newErrors.type = "Property type is required";
    if (!formData.price || isNaN(formData.price))
      newErrors.price = "Valid price is required";
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.description)
      newErrors.description = "Description is required";
    if (!formData.contact) newErrors.contact = "Contact info is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Property added successfully!");
      setFormData({
        name: "",
        type: "",
        price: "",
        location: "",
        description: "",
        photos: "",
        contact: "",
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
        <div className="mb-4">
          <label className="block font-semibold">Property Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>

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
          <label className="block font-semibold">Price</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.price && <p className="text-red-500">{errors.price}</p>}
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.location && <p className="text-red-500">{errors.location}</p>}
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

        <div className="mb-4">
          <label className="block font-semibold">Photos (URL)</label>
          <input
            type="text"
            name="photos"
            value={formData.photos}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Contact Info</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.contact && <p className="text-red-500">{errors.contact}</p>}
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
