import { useProperties } from "../PropertyContext";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { properties ,deleteProperty } = useProperties();
  //const [editProperty, setEditProperty] = useState(null);
 // const [updatedProperty, setUpdatedProperty] = useState({});

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">📊 Owner Dashboard</h2>

      {/* Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-blue-100 p-4 rounded-lg text-center">
          <h3 className="text-lg font-semibold">🏡 Total Listings</h3>
          <p className="text-2xl font-bold">{properties.length}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg text-center">
          <h3 className="text-lg font-semibold">✔ Active Listings</h3>
          <p className="text-2xl font-bold">
            {properties.filter((p) => p.status === "active").length}
          </p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg text-center">
          <h3 className="text-lg font-semibold">⏳ Pending Approval</h3>
          <p className="text-2xl font-bold">
            {properties.filter((p) => p.status === "pending").length}
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex space-x-4 mb-6">
        <Link
          to="/add-property"
          className="bg-blue-400 text-white px-4 py-2 rounded"
        >
          ➕ Add New Property
        </Link>
        <Link
          to="/my-listings"
          className="bg-gray-600 text-white px-4 py-2 rounded"
        >
          📋 Manage Listings
        </Link>
      </div>

      {/* Recent Activity */}
      <h3 className="text-xl font-bold mb-3">🔄 Recent Activity</h3>
      <ul className="bg-white p-4 rounded-lg shadow-lg mb-6">
        {properties.slice(0, 3).map((property) => (
          <li key={property.id} className="border-b py-2">
            {property.name} ({property.status})
          </li>
        ))}
      </ul>

      {/* Manage Listings Directly */}
      <h3 className="text-xl font-bold mb-3">🏠 Your Properties</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white p-4 shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold">{property.name}</h3>
            <div className="mt-4 flex space-x-3">  
              <button
                className="bg-red-600 text-white px-3 py-1 rounded"
                onClick={() => deleteProperty(property.id)}
              >
                🗑 Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
