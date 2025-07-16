import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FiHome,
  FiUsers,
  FiBriefcase,
  FiPhone,
  FiCalendar,
  FiBarChart2,
  FiSettings,
  FiLogOut,
  FiExternalLink
} from 'react-icons/fi';
import zestfulLogo from '../assets/zestful.svg';

const navItems = [
  { name: 'Dashboard', icon: <FiHome />, path: '/dashboard' },
  { name: 'Contacts', icon: <FiPhone />, path: '/dashboard/contacts' },
  { name: 'Tasks', icon: <FiCalendar />, path: '/dashboard/tasks' },
  { name: 'Settings', icon: <FiSettings />, path: '/dashboard/settings' },
  { name: 'Sample', icon: <FiExternalLink />, path: 'http://localhost:5174/', external: true }
];

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <aside 
        className={`h-screen bg-white border-r border-gray-200 text-gray-800 sticky top-0 shadow-md flex flex-col transition-all duration-300 ${isExpanded ? 'w-64' : 'w-20'}`}
        onMouseLeave={handleMouseLeave}
    >
            <div className={`p-4 pb-2 mt-5 flex items-center ${isExpanded ? 'justify-between' : 'justify-center'}`}>
        {isExpanded && (
          <img src={zestfulLogo} alt="Zestful Logo" className="h-8 cursor-pointer" onClick={() => navigate('/dashboard')} />
        )}
        {isExpanded && (
            <button onClick={() => setIsExpanded(false)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                <X size={20} />
            </button>
        )}
      </div>

      {!isExpanded && (
        <div className="flex justify-center py-4">
            <button onClick={() => setIsExpanded(true)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                <Menu size={20}/>
            </button>
        </div>
      )}
      
      <nav className="flex flex-col gap-2 px-2 py-6 flex-grow">
        {navItems.map((item) => {
          const commonClasses = "flex items-center gap-3 px-3 py-2 rounded-md font-medium transition-all duration-300";
          const activeClasses = "bg-orange-500 text-white shadow";
          const inactiveClasses = "text-gray-500 hover:text-gray-900 hover:bg-gray-100";
          const isLinkActive = location.pathname === item.path;

          const linkContent = (
            <>
              <span className="text-xl flex-shrink-0">{item.icon}</span>
              {isExpanded && <span className="whitespace-nowrap">{item.name}</span>}
            </>
          );

          if (item.external) {
            return (
              <a
                key={item.name}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`${commonClasses} ${inactiveClasses} ${!isExpanded ? 'justify-center' : ''}`}
              >
                {linkContent}
              </a>
            );
          }
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`${commonClasses} ${isLinkActive ? activeClasses : inactiveClasses} ${!isExpanded ? 'justify-center' : ''}`}
            >
              {linkContent}
            </Link>
          );
        })}
      </nav>

      <div className="px-2 py-6 border-t border-gray-200">
        <Link to="/" className={`flex items-center gap-3 text-red-400 hover:text-red-500 transition-all duration-300 w-full px-3 py-2 rounded-md hover:bg-red-500/10 ${!isExpanded ? 'justify-center' : ''}`}>
          <FiLogOut className="text-xl flex-shrink-0" />
          {isExpanded && <span className="whitespace-nowrap">Logout</span>}
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;