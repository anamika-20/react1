import React from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 to-pink-600">
      {/* Dashboard Card */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Title*/}
        <h1 className="text-3xl font-bold mb-2 text-center text-gray-800">
          Employee Management
        </h1>
        <h3 className="text-3xl font-bold mb-2 text-center text-gray-800">
          using
        </h3>
        <h3 className="text-3xl font-bold mb-6 text-center text-gray-800">
          React & Tailwind
        </h3>
        {/* Button Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Add Employee Button */}
          <Link to="/add">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 w-full">
              Add Employee
            </button>
          </Link>
          {/* Employee List Button */}
          <Link to="/list">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 w-full">
              Employee List
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
