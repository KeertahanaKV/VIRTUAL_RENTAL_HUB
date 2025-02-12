import { Link } from "react-router-dom";

export default function RenterSidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-4">🏡 Renter Panel</h2>
      <ul>
        <li className="mb-2">
          <Link to="/renters-search" className="hover:underline">🔍 Search Rentals</Link>
        </li>
        <li>
          <Link to="/favorites" className="hover:underline">❤️ My Favorites</Link>
        </li>
      </ul>
    </div>
  );
}
