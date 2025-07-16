

import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiBell } from "react-icons/fi";
import { BsFillSunFill } from "react-icons/bs";

const Topbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full px-6 py-4 bg-gray-100 flex items-center justify-between">
      <div className="text-xl font-medium text-gray-800">Main Dashboard</div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <FiBell className="text-xl text-gray-600" />
        <BsFillSunFill className="text-xl text-gray-600" />
        <div className="relative" ref={dropdownRef}>
          <img
            src="https://randomuser.me/api/portraits/women/8.jpg"
            alt="avatar"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <a
                href="#"
                onClick={handleNavigate}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </a>
              <a
                href="#"
                onClick={handleNavigate}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Forgot Password
              </a>
              <a
                href="#"
                onClick={handleNavigate}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Change User
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;