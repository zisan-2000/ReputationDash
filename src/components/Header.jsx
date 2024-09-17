// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="text-2xl font-bold text-gray-800">
          <span className="text-black">ORM</span>
          <span className="text-green-600">DASH</span>
        </div>
        <nav className="space-x-6">
          <a href="#" className="text-gray-700">
            THE PROCESS
          </a>
          <a href="#" className="text-gray-700">
            BUSINESS
          </a>
          <a href="#" className="text-gray-700">
            INDIVIDUAL
          </a>
          <a href="#" className="text-gray-700">
            WHO WE SERVE
          </a>
          <a href="#" className="text-gray-700">
            ABOUT US
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="tel:01793-874189" className="text-gray-700">
            01793-874189
          </a>
          <button className="rounded bg-green-600 px-4 py-2 text-white">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
