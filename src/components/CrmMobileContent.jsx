import React from 'react';
import { BarChart2, CheckSquare, Users, MessageSquare } from 'lucide-react';

const CrmMobileContent = () => {
  return (
    <div className="h-full w-full bg-gray-100 text-gray-800 flex flex-col font-sans overflow-hidden">
      {/* Header */}
      <header className="bg-white shadow-sm p-3 flex justify-between items-center flex-shrink-0 z-10">
        <h1 className="text-lg font-medium">Dashboard</h1>
        <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-3 overflow-y-auto" style={{ height: 'calc(100% - 100px)' }} >
        <div className="bg-white p-3 rounded-lg shadow mb-3">
          <h2 className="font-medium mb-2">Recent Activity</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center"><Users className="w-4 h-4 mr-2 text-green-500" /> New contact added: Alex D.</li>
            <li className="flex items-center"><CheckSquare className="w-4 h-4 mr-2 text-orange-500" /> Task completed: Follow up with Jane S.</li>
            <li className="flex items-center"><MessageSquare className="w-4 h-4 mr-2 text-orange-500" /> Note added to Project X.</li>
            <li className="flex items-center"><Users className="w-4 h-4 mr-2 text-green-500" /> New contact added: Sam L.</li>
            <li className="flex items-center"><CheckSquare className="w-4 h-4 mr-2 text-orange-500" /> Task completed: Send invoice #123.</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow">
          <h2 className="font-medium mb-2">Upcoming Tasks</h2>
          <ul className="space-y-2 text-sm">
            <li>Call Michael B. at 2 PM</li>
            <li>Prepare Q3 report</li>
            <li>Team meeting at 11 AM</li>
            <li>Review marketing campaign</li>
            <li>Onboarding call with New Client</li>
          </ul>
        </div>
      </main>

      {/* Navigation Bar */}
      <footer className="bg-white shadow-t p-2 flex justify-around items-center flex-shrink-0 border-t">
        <div className="flex flex-col items-center text-orange-600">
          <BarChart2 size={20} />
          <span className="text-xs">Dashboard</span>
        </div>
        <div className="flex flex-col items-center text-gray-500">
          <Users size={20} />
          <span className="text-xs">Contacts</span>
        </div>
        <div className="flex flex-col items-center text-gray-500">
          <CheckSquare size={20} />
          <span className="text-xs">Tasks</span>
        </div>
      </footer>
    </div>
  );
};

export default CrmMobileContent;
