// src/components/Hero.jsx
import React from "react";
import { FaUser, FaUsers } from "react-icons/fa"; // Importing icons

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto flex flex-col items-center py-16">
        <h1 className="mb-4 text-4xl font-bold">Control Your Reputation</h1>
        <p className="mb-6 text-lg">
          America's Largest Online Reputation Management Company
        </p>
        <p className="mb-8 text-lg">Which One Are You?</p>
        <div className="flex space-x-6">
          {/* Individual Card */}
          <div className="flex flex-col items-center space-y-4 rounded-lg border border-green-500 bg-white px-8 py-6 text-gray-800 shadow-lg hover:shadow-2xl">
            <FaUser className="mb-2 text-5xl text-green-500" />{" "}
            {/* Using react-icon */}
            <span className="text-2xl font-bold">Individual</span>
          </div>

          {/* Business Card */}
          <div className="flex flex-col items-center space-y-4 rounded-lg bg-white px-8 py-6 text-gray-800 shadow-lg hover:shadow-2xl">
            <FaUsers className="mb-2 text-5xl text-green-500" />{" "}
            {/* Using react-icon */}
            <span className="text-2xl font-bold">Business</span>
          </div>
        </div>
        <button className="mt-8 rounded-lg bg-green-600 px-6 py-3 text-white">
          Next
        </button>
      </div>
    </section>
  );
};

export default Hero;
