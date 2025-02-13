import { useProperties } from "../PropertyContext";
import { useState } from "react";

export default function MyListings() {
  const { properties, updateProperty, deleteProperty } = useProperties();
  const [editPropertyId, setEditPropertyId] = useState(null);
  const [updatedProperty, setUpdatedProperty] = useState(null);

  const handleEdit = (property) => {
    setEditPropertyId(property.id);
    setUpdatedProperty({ ...property });
  };

  const handleChange = (e) => {
    setUpdatedProperty({
      ...updatedProperty,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    updateProperty(updatedProperty.id, updatedProperty);
    setEditPropertyId(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">📋 My Listings</h2>
      
      {properties.length === 0 ? (
        <p className="text-gray-600">No properties listed yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="bg-white p-4 shadow-lg rounded-lg">
              {editPropertyId === property.id ? (
                <>
                  <input
                    type="text"
                    name="name"
                    className="w-full p-2 border rounded"
                    value={updatedProperty?.name || ""}
                    onChange={handleChange}
                    placeholder="Property Name"
                  />
                  <input
                    type="text"
                    name="type"
                    className="w-full p-2 border rounded mt-2"
                    value={updatedProperty?.type || ""}
                    onChange={handleChange}
                    placeholder="Type"
                  />
                  <input
                    type="number"
                    name="price"
                    className="w-full p-2 border rounded mt-2"
                    value={updatedProperty?.price || ""}
                    onChange={handleChange}
                    placeholder="Price"
                  />
                  <textarea
                    name="description"
                    className="w-full p-2 border rounded mt-2"
                    value={updatedProperty?.description || ""}
                    onChange={handleChange}
                    placeholder="Description"
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
                  <p className="text-gray-700">{property.description}</p>
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
      )}
    </div>
  );
}
