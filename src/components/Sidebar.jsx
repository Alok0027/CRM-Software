import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FiHome,
  FiUser,
  FiLogIn,
  FiGrid,
  FiTrello,
  FiShoppingCart,
  FiHelpCircle
} from 'react-icons/fi';
import zestfulLogo from '../assets/zestful.svg';

const navItems = [
  { name: 'Dashboard', icon: <FiHome />, path: '/dashboard' },
  { name: 'Analytics', icon: <FiGrid />, path: '/dashboard/analytics', bgColor: 'bg-gray-100' },
  { name: 'Kanban', icon: <FiTrello />, path: '/dashboard/kanban' },
  { name: 'Profile', icon: <FiUser />, path: '/dashboard/profile', bgColor: 'bg-gray-100' },
  { name: 'Sign In', icon: <FiLogIn />, path: '/login' },
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
      
      <nav className="flex flex-col gap-2 px-4 py-6 flex-grow">
        {navItems.map((item) => {
          const commonClasses = `flex items-center gap-4 px-4 py-2.5 rounded-lg font-normal transition-all duration-300 ${item.bgColor || ''}`;
          const activeClasses = "bg-orange-500 text-white shadow-lg";
          const inactiveClasses = `text-gray-500 hover:text-gray-900 hover:bg-gray-100 ${item.bgColor ? 'hover:bg-gray-100' : ''}`;
          const isLinkActive = location.pathname === item.path;

          const linkContent = (
            <>
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              {isExpanded && <span className="whitespace-nowrap">{item.name}</span>}
            </>
          );

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

      {isExpanded && (
        <div className="px-6 py-4">
          <div className="bg-gradient-to-br from-orange-400 to-red-500 text-white rounded-2xl p-6 text-center relative overflow-hidden">
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/20 rounded-full"></div>
            <div className="relative z-10">
              <FiHelpCircle className="mx-auto text-3xl mb-3"/>
              <h3 className="font-bold text-lg">Upgrade to PRO</h3>
              <p className="text-xs mt-1 mb-4">Get access to all features! Connect with Venus World!</p>
              <button className="bg-white text-orange-500 font-bold py-2 px-4 rounded-lg w-full hover:bg-gray-100 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;