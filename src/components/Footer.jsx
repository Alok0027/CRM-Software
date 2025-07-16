import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import zestful from '../assets/zestful.svg';

const Footer = () => {
  const websiteLinks = ['Home', 'Features', 'Pricing', 'About Us', 'Blog', 'Integrations', 'Career', 'Contact', 'Help Center'];
  const utilityLinks = ['Sign Up', 'Sign In', 'Forgot Password', 'Reset Password', 'Confirm E-Mail', 'Terms & Conditions', 'Privacy Policy'];
  const adminLinks = ['Style Guide', 'Licenses', 'Changelog', 'Navbars', 'Footers', 'CTA Sections', 'Notification Banners'];

  return (
    <footer className="bg-white text-gray-800 font-sans pt-24 pb-12 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="font-medium text-xl mb-4">Join the Newsletter:</h3>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            </p>
            <div className="flex">
              <input type="email" placeholder="E-Mail Address" className="w-full px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
              <button className="bg-orange-500 text-white font-medium px-6 py-3 rounded-r-lg hover:bg-orange-600 transition duration-300">Join Now</button>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium text-xl mb-4">Website</h3>
              <ul>
                {websiteLinks.map(link => <li key={link} className="mb-2"><a href="#" className="text-gray-600 hover:text-orange-500">{link}</a></li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-xl mb-4">Utility Pages</h3>
              <ul>
                {utilityLinks.map(link => <li key={link} className="mb-2"><a href="#" className="text-gray-600 hover:text-orange-500">{link}</a></li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-xl mb-4">Admin Pages</h3>
              <ul>
                {adminLinks.map(link => <li key={link} className="mb-2"><a href="#" className="text-gray-600 hover:text-orange-500">{link}</a></li>)}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <img src={zestful} alt="Zestful Logo" className="h-8 mr-2" />
          </div>
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">Designed & Built by <a href="#" className="text-orange-500 font-medium">Flowversity</a> Powered by <a href="#" className="text-orange-500 font-medium">Webflow</a></p>
          <div className="flex space-x-3">
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