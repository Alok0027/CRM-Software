import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import zestful from '../assets/clientnestlogo.jpeg';

const Footer = () => {
  const websiteLinks = {
    'Home': '/',
    'Features': '/features',
    'Pricing': '/pricing',
    'About Us': '/about-us',
    'Blog': '/blog',
    'Integrations': '/integrations',
    'Help Center': '/help-center',
  };
  const utilityLinks = {
    'Sign Up': '/signup',
    'Sign In': '/login',
    'Forgot Password': '/forgot-password',
    'Reset Password': '/reset-password',
    'Confirm E-Mail': '/confirm-email',
    'Terms & Conditions': '/terms-and-conditions',
    'Privacy Policy': '/privacy-policy',
  };
  const resourceLinks = {
    'Documentation': '/documentation',
    'API Reference': '/api-reference',
    'Status Page': '/status',
    'Changelog': '/changelog',
    'Security': '/security',
    'System Status': '/system-status'
  };

  return (
    <footer className="bg-white text-gray-800 font-sans pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12">
          <div className="md:col-span-1 lg:col-span-2">
            <h3 className="font-medium text-xl mb-4">Join the Newsletter:</h3>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md">
              <input type="email" placeholder="E-Mail Address" className="flex-grow px-3 py-3 border border-gray-300 rounded-lg sm:rounded-none sm:rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
              <button className="mt-2 sm:mt-0 px-6 py-3 bg-orange-500 text-white font-medium rounded-lg sm:rounded-none sm:rounded-r-lg hover:bg-orange-600 transition duration-300">Join Now</button>
            </div>
          </div>

          <div className="md:col-span-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium text-xl mb-4">Website</h3>
              <ul>
                {Object.entries(websiteLinks).map(([name, path]) => (
                  <li key={name} className="mb-2">
                    <Link to={path} className="text-gray-600 hover:text-orange-500">{name}</Link>
                  </li>
                ))}
                <li className="mb-2">
                  <Link to="/support/contact" className="text-gray-600 hover:text-orange-500">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-xl mb-4">Utility Pages</h3>
              <ul>
                {Object.entries(utilityLinks).map(([name, path]) => (
                  <li key={name} className="mb-2">
                    <Link to={path} className="text-gray-600 hover:text-orange-500">{name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-xl mb-4">Resources</h3>
              <ul>
                {Object.entries(resourceLinks).map(([name, path]) => (
                  <li key={name} className="mb-2">
                    <Link to={path} className="text-gray-600 hover:text-orange-500">{name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <div className="flex items-center mb-4 sm:mb-0">
            <img src={zestful} alt="Zestful Logo" className="h-8 mr-2" />
          </div>
          
          <p className="text-gray-500 text-sm mb-4 sm:mb-0 order-2 sm:order-1">Designed & Built by <a href="#" className="text-orange-500 font-medium">Alok</a> Powered by <a href="#" className="text-orange-500 font-medium">Nexolve</a></p>
          <div className="flex space-x-3 order-1 sm:order-2 mb-4 sm:mb-0">
            <a href="#" className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition"><FaTwitter /></a>
            <a href="#" className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition"><FaFacebookF /></a>
            <a href="#" className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition"><FaInstagram /></a>
            <a href="#" className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;