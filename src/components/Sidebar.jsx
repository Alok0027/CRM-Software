import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FiHome,
  FiUsers,
  FiUserPlus,
  FiPieChart,
  FiTrendingUp,
  FiLogIn,
  FiZap,
  FiDatabase,
  FiChevronDown,
  FiChevronRight,
  FiBarChart2,
  FiHelpCircle
} from 'react-icons/fi';
import zestfulLogo from '../assets/clientnestlogo.jpeg';

const navItems = [
  { name: 'Dashboard', icon: <FiHome />, path: '/dashboard' },
  { name: 'Analytics', icon: <FiBarChart2 />, path: '/dashboard/analytics' },
  { name: 'Contacts', icon: <FiUsers />, path: '/contacts' },
  { name: 'Leads', icon: <FiUserPlus />, path: '/leads' },
  { name: 'Market', icon: <FiPieChart />, path: '/market' },
  { name: 'Tasks', icon: <FiTrendingUp />, path: '/task' },
  { name: 'Deals', icon: <FiTrendingUp />, path: '/opportunity' },
  { name: 'Automation', icon: <FiZap />, path: '/automation' },
  { 
    name: 'Data Management', 
    icon: <FiDatabase />, 
    path: '/data-management',
    subItems: [
      { name: 'Data Integration', path: '/data-integration' },
      { name: 'Data Model', path: '/data-model' },
      { name: 'Data Enrichment', path: '/data-enrichment' },
      { name: 'Data Sets', path: '/data-sets' }
    ]
  },
  { name: 'Sign Out', icon: <FiLogIn />, path: '/' },
];

const Sidebar = ({ isExpanded, setIsExpanded }) => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState({});

  const navigate = useNavigate();

  const toggleExpanded = (itemName) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };



  return (
    <aside 
        className={`h-screen bg-white border-r border-gray-200 text-gray-800 fixed top-0 left-0 z-50 flex flex-col transition-transform duration-300 ease-in-out ${isExpanded ? 'w-64 translate-x-0' : 'w-64 -translate-x-full md:w-20 md:translate-x-0'}`}
    >
      <div className="p-4 pb-2 flex items-center justify-between">
        <div className={`flex items-center gap-2 ${isExpanded ? 'md:ml-0' : 'md:ml-1'}`}>
            <img src={zestfulLogo} alt="Zestful Logo" className={`h-8 cursor-pointer transition-all duration-300 ${isExpanded ? 'w-auto' : 'w-0 md:w-auto'}`} onClick={() => navigate('/dashboard')} />
        </div>
        <button onClick={() => setIsExpanded(false)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 md:hidden">
            <X size={20} />
        </button>
      </div>
      
      <nav className="flex flex-col gap-2 px-4 py-6 flex-grow">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={index} className="mb-2">
              {item.subItems ? (
                <div>
                  <button
                    onClick={() => toggleExpanded(item.name)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors duration-200 ${
                      location.pathname.startsWith('/data-')
                        ? 'bg-orange-100 text-orange-600'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="mr-3 text-lg">{item.icon}</span>
                      <span className={`font-medium overflow-hidden transition-all duration-200 ${isExpanded ? 'w-full ml-0' : 'w-0 -ml-4'}`}>{item.name}</span>
                    </div>
                    <div className={`overflow-hidden transition-all duration-200 ${isExpanded ? 'w-full' : 'w-0'}`}>
                      {expandedItems[item.name] ? <FiChevronDown /> : <FiChevronRight />}
                    </div>
                  </button>
                  {expandedItems[item.name] && isExpanded && (
                    <ul className="ml-8 mt-2 space-y-1">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subItem.path}
                            className={`block px-4 py-2 rounded-lg transition-colors duration-200 text-sm ${
                              location.pathname === subItem.path
                                ? 'bg-orange-100 text-orange-600 border-r-4 border-orange-600'
                                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
                    (item.path === '/dashboard' ? location.pathname === item.path : location.pathname.startsWith(item.path))
                      ? 'bg-orange-100 text-orange-600 border-r-4 border-orange-600'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                  }`}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  <span className={`font-medium overflow-hidden transition-all duration-200 ${isExpanded ? 'w-full ml-0' : 'w-0 -ml-4'}`}>{item.name}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className={`overflow-hidden transition-all duration-200 ${isExpanded ? 'w-full' : 'w-0'}`}>
        <div className="px-6 py-4">
          <div className="bg-gradient-to-br from-orange-400 to-red-500 text-white rounded-2xl p-6 text-center relative overflow-hidden">
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/20 rounded-full"></div>
            <div className="relative z-10">
              <FiHelpCircle className="mx-auto text-3xl mb-3"/>
              <h3 className="font-medium text-lg">Upgrade to PRO</h3>
              <p className="text-xs mt-1 mb-4">Get access to all features! Connect with Venus World!</p>
              <button className="bg-white text-orange-500 font-medium py-2 px-4 rounded-lg w-full hover:bg-gray-100 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;