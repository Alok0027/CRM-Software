import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import zestful from '../assets/zestful.svg';
import { FiChevronDown, FiArrowRight, FiArrowLeft, FiBarChart2, FiCode, FiTool, FiUsers, FiBookOpen, FiBriefcase, FiLifeBuoy, FiTrendingUp, FiSend } from 'react-icons/fi';

const navContent = {
  solutions: {
    title: 'Solutions',
    links: [
      { name: 'For Small Business', description: 'Get started with our essential tools.', icon: <FiUsers />, path: '/solutions/small-business' },
      { name: 'For Mid-Market', description: 'Scale your operations with advanced features.', icon: <FiBriefcase />, path: '/solutions/mid-market' },
      { name: 'For Enterprise', description: 'Custom solutions for large organizations.', icon: <FiTool />, path: '/solutions/enterprise' },
    ],
  },

  support: {
    title: 'Support',
    links: [
      { name: 'Help Center', description: 'Find answers and get help.', icon: <FiLifeBuoy />, path: '/support/help' },
      { name: 'Documentation', description: 'Read our comprehensive guides.', icon: <FiBookOpen />, path: '/support/docs' },
      { name: 'Contact Us', description: 'Get in touch with our team.', icon: <FiBriefcase />, path: '/support/contact' },
    ],
  },
};

const AnimatedNavItem = ({ children, onMouseEnter, onMouseLeave }) => {
  const [isHovered, setHovered] = useState(false);

  const handleLocalMouseEnter = () => {
    setHovered(true);
    if (onMouseEnter) onMouseEnter();
  };

  const handleLocalMouseLeave = () => {
    setHovered(false);
    if (onMouseLeave) onMouseLeave();
  };

  return (
    <div
      className="relative px-3 py-2 cursor-pointer overflow-hidden"
      onMouseEnter={handleLocalMouseEnter}
      onMouseLeave={handleLocalMouseLeave}
    >
      <div className="relative flex items-center justify-center" style={{ minWidth: '100px' }}>
        <motion.span
          className="absolute left-0"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <FiArrowRight className="text-gray-600" style={{ transform: 'rotate(-45deg)' }} />
        </motion.span>
        <motion.span
          className="text-gray-600 hover:text-gray-900 transition-colors z-10"
          animate={{ x: isHovered ? 10 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {children}
        </motion.span>
        <motion.span
          className="absolute right-0"
          initial={{ opacity: 1, x: 0 }}
          animate={{ opacity: isHovered ? 0 : 1, x: isHovered ? 10 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <FiArrowRight className="text-gray-600" style={{ transform: 'rotate(-45deg)' }} />
        </motion.span>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm" onMouseLeave={handleMouseLeave}>
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src={zestful} alt="Zestful Logo" className="h-8 w-auto" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-4">
          {Object.keys(navContent).map((key) => (
            <div key={key} className="relative">
              <AnimatedNavItem onMouseEnter={() => handleMouseEnter(key)}>
                <span className="flex items-center">
                  {navContent[key].title}
                </span>
              </AnimatedNavItem>
              <AnimatePresence>
                {activeMenu === key && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-1/2 -translate-x-1/2 z-10 mt-4 w-[450px] bg-white/95 backdrop-blur-md shadow-lg rounded-xl border border-gray-200 overflow-hidden"
                  >
                    <div className="p-6 grid grid-cols-1 gap-6">
                      {navContent[key].links.map((link) => (
                        <Link to={link.path} key={link.name} className="flex items-start space-x-4 group p-2 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="p-2 bg-gray-100 rounded-md group-hover:bg-orange-100 transition-colors">
                            {React.cloneElement(link.icon, { className: 'h-6 w-6 text-gray-600 group-hover:text-orange-500 transition-colors' })}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">{link.name}</h3>
                            <p className="text-sm text-gray-500">{link.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <AnimatedNavItem>
            <Link to="/pricing">Pricing</Link>
          </AnimatedNavItem>
          <AnimatedNavItem>
            <Link to="/blog">Blog</Link>
          </AnimatedNavItem>
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/login">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="group text-gray-800 font-medium px-4 py-1.5 rounded-xl border-4 border-double border-gray-300 transition-transform duration-300 hover:scale-105"
            >
              <span className="block transition-transform duration-300 group-hover:scale-95">Log in</span>
            </motion.button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;