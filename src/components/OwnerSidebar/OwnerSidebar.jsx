import { Link } from "react-router-dom";

export default function OwnerSidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-6">🏠Property Manager</h2>
      <ul className="space-y-4">
        <li>
          <Link
            to="/dashboard"
            className="block px-4 py-2 rounded hover:bg-gray-700"
          >
            📊 Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/add"
            className="block px-4 py-2 rounded hover:bg-gray-700"
          >
            ➕ Add Property
          </Link>
        </li>
        <li>
          <Link
            to="/my-listings"
            className="block px-4 py-2 rounded hover:bg-gray-700"
          >
            📋 My Listings
          </Link>
        </li>
        <li>
          <Link
            to="/availability-settings"
            className="block px-4 py-2 rounded hover:bg-gray-700"
          >
            ✅ Availability
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            className="block px-4 py-2 rounded hover:bg-gray-700"
          >
            👤 Profile
          </Link>
        </li>
        <li>
          <Link
            to="/logout"
            className="block px-4 py-2 rounded hover:bg-red-700"
          >
            🚪 Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}
