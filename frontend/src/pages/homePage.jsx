import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      {/* Header */}
      <header className="w-full bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Welcome to My Website</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-grow text-center p-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Your journey starts here
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Discover amazing content and explore new ideas with us.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 mb-4">
          Get Started
        </button>
        <Link to="/login" className="text-blue-600 underline">
          Login
        </Link>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-200 text-center py-4 mt-10">
        <p className="text-gray-600">© 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
