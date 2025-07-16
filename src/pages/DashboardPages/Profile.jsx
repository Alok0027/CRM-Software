import React, { useState } from 'react';
import { FiCamera, FiEdit2, FiMail, FiPhone, FiMapPin, FiSave, FiBell, FiShield, FiUser } from 'react-icons/fi';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const UserInfo = () => (
    <div className="bg-gray-100 p-6 rounded-2xl">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-800">User Information</h3>
        <button className="text-gray-500 hover:text-orange-500"><FiEdit2 /></button>
      </div>
      <div className="mt-4 space-y-3">
        <div className="flex items-center text-gray-600">
          <FiMail className="mr-3" />
          <span>alok@example.com</span>
        </div>
        <div className="flex items-center text-gray-600">
          <FiPhone className="mr-3" />
          <span>(91) 9999999999</span>
        </div>
        <div className="flex items-center text-gray-600">
          <FiMapPin className="mr-3" />
          <span>Jaipur, India</span>
        </div>
      </div>
    </div>
  );

  const ProfileSettings = () => (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Profile Settings</h3>
        <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input type="text" defaultValue="Alok" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input type="text" defaultValue="Mishra" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500" />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" defaultValue="alok@example.com" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Your Bio</label>
                <textarea rows="3" defaultValue="I am a passionate UI/UX designer with a love for creating intuitive and beautiful user experiences." className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"></textarea>
            </div>
            <div className="text-right">
                <button type="submit" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                    <FiSave className="mr-2"/>
                    Save Changes
                </button>
            </div>
        </form>
    </div>
  );

  const TabButton = ({ id, label, icon }) => (
    <button 
        onClick={() => setActiveTab(id)}
        className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === id ? 'bg-orange-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'}`}>
        {icon}
        <span className="ml-2">{label}</span>
    </button>
  )

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Profile Header */}
      <div className="relative h-48 bg-cover bg-center rounded-2xl" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=2070&auto=format&fit=crop)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl"></div>
        <div className="absolute bottom-0 left-6 transform translate-y-1/2">
          <div className="relative">
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Profile" className="w-32 h-32 rounded-full border-4 border-white shadow-lg" />
            <button className="absolute bottom-1 right-1 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
              <FiCamera className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* User Name and Title */}
      <div className="mt-20 ml-6">
        <h2 className="text-3xl font-bold text-gray-800">Esther Howard</h2>
        <p className="text-gray-500">UI/UX Designer</p>
      </div>

      {/* Main Content Grid */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-8">
          <UserInfo />
        </div>
        <div className="lg:col-span-2">
            <div className="bg-white p-2 rounded-2xl shadow-lg mb-6">
                <div className="flex space-x-2">
                    <TabButton id="profile" label="Profile" icon={<FiUser />} />
                    <TabButton id="password" label="Password" icon={<FiShield />} />
                    <TabButton id="notifications" label="Notifications" icon={<FiBell />} />
                </div>
            </div>
            {activeTab === 'profile' && <ProfileSettings />}
            {/* Add components for other tabs here */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
