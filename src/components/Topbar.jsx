

import React from "react";
import { FiSearch, FiBell } from "react-icons/fi";
import { BsFillSunFill } from "react-icons/bs";

const Topbar = () => {
  return (
    <div className="w-full px-6 py-4 bg-gray-50 shadow-sm flex items-center justify-between">
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
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Topbar;