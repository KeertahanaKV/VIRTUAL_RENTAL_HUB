import { Link } from "react-router-dom";

export default function OwnerSidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-4">🏠 Owner Panel</h2>
      <ul>
        <li className="mb-2">
          <Link to="/add-property" className="hover:underline">➕ Add Property</Link>
        </li>
        <li className="mb-2">
          <Link to="/my-listings" className="hover:underline">📋 My Listings</Link>
        </li>
        <li>
          <Link to="/availability-settings" className="hover:underline">✅ Availability</Link>
        </li>
      </ul>
    </div>
  );
}
