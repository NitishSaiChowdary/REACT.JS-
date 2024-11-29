"use client"
import { useState, useEffect } from "react";

const Navbar = () => {
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second
    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  const formatDateTime = (date) => {
    return date.toLocaleString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <a href="#" className="text-white hover:text-gray-300">
            Dashboard
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Settings
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Analytics
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Data
          </a>
        </div>

        {/* Date and Time */}
        <div className="text-white">
          {formatDateTime(currentDateTime)}
        </div>

        <div className="relative">
          <button
            onClick={() => setProfileDropdown(!profileDropdown)}
            className="text-white focus:outline-none"
          >
            Profile
          </button>

          {/* Dropdown Menu */}
          {profileDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Login
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Sign Out
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
