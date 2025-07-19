

import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiSearch, FiBell, FiMenu } from "react-icons/fi";
import { BsFillSunFill } from "react-icons/bs";

const pageTitles = {
  "/dashboard": { breadcrumb: "Pages / Dashboard", title: "Main Dashboard" },
  "/dashboard/profile": { breadcrumb: "Pages / Profile", title: "User Profile" },
  "/dashboard/opportunity": { breadcrumb: "Pages / Deals", title: "Deals" },
  "/dashboard/kanban": { breadcrumb: "Pages / Kanban", title: "Kanban Board" },
  "/dashboard/marketplace": { breadcrumb: "Pages / Marketplace", title: "Marketplace" },
  "/dashboard/marketing": { breadcrumb: "Pages / Marketing", title: "Marketing" },
  "/dashboard/tables": { breadcrumb: "Pages / Tables", title: "Tables" },
  "/dashboard/tasks": { breadcrumb: "Pages / Tasks", title: "Tasks" },
  "/dashboard/settings": { breadcrumb: "Pages / Settings", title: "Settings" },
  "/dashboard/analytics": { breadcrumb: "Pages / Analytics", title: "Analytics" },
  "/contacts": { breadcrumb: "Pages / Contacts", title: "Contacts" },
  "/leads": { breadcrumb: "Pages / Leads", title: "Leads" },
  "/market": { breadcrumb: "Pages / Market", title: "Market" },
  "/opportunity": { breadcrumb: "Pages / Deals", title: "Deals" },
  "/task": { breadcrumb: "Pages / Tasks", title: "Tasks" },
  "/automation": { breadcrumb: "Pages / Automation", title: "Automation" },
  "/data-integration": { breadcrumb: "Data Management / Data Integration", title: "Data Integration" },
  "/data-model": { breadcrumb: "Data Management / Data Model", title: "Data Model" },
  "/data-enrichment": { breadcrumb: "Data Management / Data Enrichment", title: "Data Enrichment" },
  "/data-sets": { breadcrumb: "Data Management / Data Sets", title: "Data Sets" },
  "/audit-logs": { breadcrumb: "Data Management / Audit Logs", title: "Audit Logs" },
};

const Topbar = ({ setIsExpanded }) => {
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

  // Get current path and match to title/breadcrumb
  const { breadcrumb, title } = pageTitles[location.pathname] || { breadcrumb: "Pages", title: "Dashboard" };
  const location = useLocation();

  return (
    <div className="w-full px-4 sm:px-6 py-4 bg-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div>
        <p className="text-sm text-gray-500">{breadcrumb}</p>
        <h1 className="text-2xl md:text-3xl font-medium text-gray-800">{title}</h1>
      </div>
      
      <div className="w-full md:w-auto flex items-center justify-between">
        {/* Search and icons for larger screens */}
        <div className="hidden md:flex items-center gap-4 bg-white rounded-full shadow-sm px-4 py-2">
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
          </div>
        </div>

        {/* Mobile header with menu toggle */}
        <div className="flex md:hidden items-center gap-4 ml-auto">
            <FiBell className="text-xl text-gray-600 hover:text-orange-500 cursor-pointer" />
            <BsFillSunFill className="text-xl text-gray-600 hover:text-orange-500 cursor-pointer" />
        </div>

        <div className="w-px h-6 bg-gray-200 mx-2 hidden md:block"></div>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsExpanded(true)} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 md:hidden">
            <FiMenu size={20}/>
          </button>
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