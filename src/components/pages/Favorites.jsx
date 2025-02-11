import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProperties } from "../PropertyContext"; // Adjust according to your context file

export default function Favorites() {
  const { properties } = useProperties(); // Fetch real properties
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  // Filter properties based on favorites list
  const favoriteProperties = properties.filter((property) =>
    favorites.includes(property.id)
  );

  const toggleFavorite = (propertyId) => {
    let updatedFavorites;
    if (favorites.includes(propertyId)) {
      updatedFavorites = favorites.filter((id) => id !== propertyId);
    } else {
      updatedFavorites = [...favorites, propertyId];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800">Your Favorites</h2>
      <ul className="mt-4">
        {favoriteProperties.length > 0 ? (
          favoriteProperties.map((property) => (
            <li key={property.id} className="mb-4 p-4 border rounded shadow-md flex justify-between items-center">
              <div>
                <h4 className="font-bold text-gray-800">{property.name}</h4>
                <p className="text-gray-600">{property.location}</p>
                <p className="text-gray-600">${property.price}</p>
                <p className="text-gray-600">{property.type}</p>
              </div>
              <button
                onClick={() => toggleFavorite(property.id)}
                className="text-2xl cursor-pointer"
              >
                {favorites.includes(property.id) ? "❤️" : "🤍"}
              </button>
            </li>
          ))
        ) : (
          <p>No favorite properties added yet.</p>
        )}
      </ul>
      <div className="mt-6 text-center">
        <Link to="/" className="text-blue-600 hover:underline">
          Back to Search
        </Link>
      </div>
    </div>
  );
}
