

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

  const handleNavigate = (path) => {
    setDropdownOpen(false);
    navigate(path);
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
      <div>
        <p className="text-sm text-gray-500">Pages / Dashboard</p>
        <h1 className="text-3xl font-medium text-gray-800">Main Dashboard</h1>
      </div>
      
      <div className="flex items-center gap-4 bg-white rounded-full shadow-sm px-4 py-2">
        <div className="relative">
          <FiSearch className="absolute left-1 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="pl-8 bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
        
        <div className="w-px h-6 bg-gray-200 mx-2"></div>

        <div className="flex items-center gap-4">
          <FiBell className="text-xl text-gray-600 hover:text-orange-500 cursor-pointer" />
          <BsFillSunFill className="text-xl text-gray-600 hover:text-orange-500 cursor-pointer" />
          
          <div className="relative" ref={dropdownRef}>
            <img
              src="https://randomuser.me/api/portraits/women/8.jpg"
              alt="avatar"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={toggleDropdown}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <button onClick={() => handleNavigate('/dashboard/profile')} className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</button>
                <button onClick={() => handleNavigate('/login')} className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;