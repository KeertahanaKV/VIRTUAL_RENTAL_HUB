import React from "react";

export default function About() {
  return (
    <div className="mx-auto p-8 bg-gray-100 shadow-md rounded-lg mt-10">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg bg-opacity-90">
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-blue-300 to-indigo-400 mb-8 animate-glow">
          About Virtual Rental Hub
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to Virtual Rental Hub! We provide a seamless way for
          homeowners to list their properties and for renters to find their
          ideal home. Our platform connects people with available rental homes,
          offering easy navigation, clear listings, and the ability to filter
          based on specific needs.
        </p>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-blue-300 to-indigo-400 mb-4 animate-glow">
            Mission
          </h2>
          <p className="text-lg text-gray-600">
            Our mission is to simplify the rental process, making it easier for
            homeowners to list properties and renters to find their perfect
            match.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-blue-300 to-indigo-400 mb-4 animate-glow">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Homeowners can easily add their properties to our platform with
            detailed descriptions, photos, and availability. Renters can search
            for homes by location, price, and availability, ensuring they find
            the best property for their needs.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-blue-300 to-indigo-400 mb-4 animate-glow">
            Features
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
            <li>Easy-to-use property management tools for homeowners</li>
            <li>User-friendly interface with clear listings</li>
            <li>Secure contact forms for renters to reach out directly</li>
            <li>
              Seamless property listing and management for homeowners to
              effortlessly add, update, and track their properties
            </li>
            <li>
              Intuitive search functionality with advanced filters, making it
              easy for renters to find the perfect property based on their
              preferences
            </li>
            <li>
              Real-time availability updates, allowing renters to quickly
              identify available properties with up-to-date status
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-blue-300 to-indigo-400 mb-4 animate-glow">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600">
            For any questions or support, feel free to reach out to us at{" "}
            <a
              href="mailto:support@virtualrentalhub.com"
              className="text-blue-600 hover:text-blue-800 transition duration-300 transform hover:scale-110"
            >
              support@virtualrentalhub.com
            </a>
            .
          </p>
        </div>

        <div className="text-center mt-8">
          <a
            href="/home"
            className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300 transform hover:scale-110"
          >
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
}
