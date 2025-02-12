import { useProperties } from "../PropertyContext";

export default function AvailabilitySettings() {
  const { properties, updateProperty } = useProperties();

  const toggleAvailability = (id, currentStatus) => {
    updateProperty(id, { available: !currentStatus });
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">✅ Availability Settings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white p-4 shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold">{property.name}</h3>
            <p className="text-gray-600">{property.type}</p>
            <p className={`text-lg font-bold ${property.available ? "text-green-600" : "text-red-600"}`}>
              {property.available ? "Available" : "Unavailable"}
            </p>
            <button
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => toggleAvailability(property.id, property.available)}
            >
              {property.available ? "❌ Mark Unavailable" : "✅ Mark Available"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
