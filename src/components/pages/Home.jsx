export default function Home() {
  return (
    <div className="grid md:grid-cols-2 gap-6  p-15  mt-10">
      {/* Home Owners Section */}
      <div className="bg-gray-300 p-10 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Home Owners
        </h2>
        <p className="text-gray-600 text-center font-semibold mt-2">
          List your property and find renters easily.
        </p>
        <div className="flex justify-center mt-4">
          <button className="mt-4 px-4 py-2  bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-300">
            Add Property
          </button>
        </div>
      </div>

      {/* Renters Section */}
      <div className="bg-gray-300 p-10 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Renters
        </h2>
        <p className="text-gray-600 text-center font-semibold mt-2">
          Search for the perfect rental property.
        </p>
        <div className="flex justify-center mt-4">
          <button className="mt-4 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-300">
            Search Properties
          </button>
        </div>
      </div>
    </div>
  );
}
