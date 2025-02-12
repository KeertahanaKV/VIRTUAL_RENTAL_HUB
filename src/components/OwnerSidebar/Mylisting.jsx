import { useProperties } from "../PropertyContext";
import { useState } from "react";

export default function MyListings() {
  const { properties, updateProperty, deleteProperty } = useProperties();
  const [editProperty, setEditProperty] = useState(null);
  const [updatedProperty, setUpdatedProperty] = useState({});

  const handleEdit = (property) => {
    setEditProperty(property);
    setUpdatedProperty({ ...property }); // Copy all fields
  };

  const handleChange = (e) => {
    setUpdatedProperty({
      ...updatedProperty,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    updateProperty(updatedProperty.id, updatedProperty);
    setEditProperty(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">📋 My Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white p-4 shadow-lg rounded-lg">
            {editProperty?.id === property.id ? (
              <>
                <input
                  type="text"
                  name="name"
                  className="w-full p-2 border rounded"
                  value={updatedProperty.name}
                  onChange={handleChange}
                  placeholder="Property Name"
                />
                <input
                  type="text"
                  name="type"
                  className="w-full p-2 border rounded mt-2"
                  value={updatedProperty.type}
                  onChange={handleChange}
                  placeholder="Type"
                />
                <input
                  type="number"
                  name="price"
                  className="w-full p-2 border rounded mt-2"
                  value={updatedProperty.price}
                  onChange={handleChange}
                  placeholder="Price"
                />
                <input
                  type="text"
                  name="country"
                  className="w-full p-2 border rounded mt-2"
                  value={updatedProperty.country}
                  onChange={handleChange}
                  placeholder="Country"
                />
                <input
                  type="text"
                  name="state"
                  className="w-full p-2 border rounded mt-2"
                  value={updatedProperty.state}
                  onChange={handleChange}
                  placeholder="State"
                />
                <input
                  type="text"
                  name="district"
                  className="w-full p-2 border rounded mt-2"
                  value={updatedProperty.district}
                  onChange={handleChange}
                  placeholder="District"
                />
                <input
                  type="text"
                  name="area"
                  className="w-full p-2 border rounded mt-2"
                  value={updatedProperty.area}
                  onChange={handleChange}
                  placeholder="Area"
                />
                <textarea
                  name="description"
                  className="w-full p-2 border rounded mt-2"
                  value={updatedProperty.description}
                  onChange={handleChange}
                  placeholder="Description"
                />
                <input
                  type="text"
                  name="photos"
                  className="w-full p-2 border rounded mt-2"
                  value={updatedProperty.photos}
                  onChange={handleChange}
                  placeholder="Photos URL"
                />
                <input
                  type="text"
                  name="contact"
                  className="w-full p-2 border rounded mt-2"
                  value={updatedProperty.contact}
                  onChange={handleChange}
                  placeholder="Contact Info"
                />
                <button
                  className="mt-2 bg-green-600 text-white px-4 py-2 rounded"
                  onClick={handleUpdate}
                >
                  ✅ Save
                </button>
              </>
            ) : (
              <>
                <h3 className="text-lg font-semibold">{property.name}</h3>
                <p className="text-gray-600">{property.type}</p>
                <p className="text-gray-700">${property.price}</p>
                <p className="text-gray-600">{property.country}, {property.state}, {property.district}, {property.area}</p>
                <p className="text-gray-700">{property.description}</p>
                <p className="text-gray-500">📷 {property.photos}</p>
                <p className="text-gray-700">📞 {property.contact}</p>
                <div className="mt-4 flex space-x-3">
                  <button
                    className="bg-blue-600 text-white px-3 py-1 rounded"
                    onClick={() => handleEdit(property)}
                  >
                    ✏ Edit
                  </button>
                  <button
                    className="bg-red-600 text-white px-3 py-1 rounded"
                    onClick={() => deleteProperty(property.id)}
                  >
                    🗑 Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
