import React, { useState } from 'react';
import { ChevronsRight } from 'lucide-react';

const docContent = {
  introduction: {
    title: 'Introduction to the Platform',
    content: (
      <>
        <p className="text-lg text-gray-600">Welcome! This guide provides a complete overview of our CRM platform, designed to help you get up and running as quickly as possible.</p>
        <h2 className="text-2xl font-medium text-gray-800 mt-8 mb-4">What is CoreCRM?</h2>
        <p>CoreCRM is a powerful, yet easy-to-use, Customer Relationship Management platform that helps businesses of all sizes manage their customer interactions, sales pipelines, and marketing efforts. Our goal is to provide you with the tools you need to grow, without the complexity that slows you down.</p>
        <h2 className="text-2xl font-medium text-gray-800 mt-8 mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><span className="font-medium">Contact Management:</span> Keep a detailed record of all your customers, leads, and partners.</li>
          <li><span className="font-medium">Sales Pipeline:</span> Visualize and manage your sales process from lead to close.</li>
          <li><span className="font-medium">Marketing Automation:</span> Create, send, and track targeted email campaigns.</li>
          <li><span className="font-medium">Reporting & Analytics:</span> Gain insights into your business performance with customizable dashboards.</li>
        </ul>
      </>
    ),
  },
  'account-setup': {
    title: 'Account Setup',
    content: (
      <>
        <p>Setting up your account is the first step to unlocking the power of CoreCRM. Follow these steps to get started:</p>
        <ol className="list-decimal list-inside space-y-3 mt-4">
          <li><span className="font-medium">Complete Your Profile:</span> Navigate to 'Settings' &gt; 'Profile' and fill in your personal and company details.</li>
          <li><span className="font-medium">Set Your Preferences:</span> Configure your notification settings, time zone, and default currency.</li>
          <li><span className="font-medium">Invite Your Team:</span> Go to 'Settings' &gt; 'Users' and invite your team members to collaborate.</li>
        </ol>
      </>
    ),
  },
  'first-campaign': {
    title: 'Creating Your First Campaign',
    content: <p>Learn how to create and launch your first marketing campaign, from drafting the email to analyzing the results.</p>,
  },
  'contacts-leads': {
    title: 'Contacts & Leads',
    content: <p>Understand the difference between contacts and leads and how to manage them effectively in the system.</p>,
  },
  'understanding-deals': {
    title: 'Understanding Deals',
    content: <p>A deep dive into the deals pipeline, stages, and how to track your sales opportunities from start to finish.</p>,
  },
  'using-dashboard': {
    title: 'Using the Dashboard',
    content: <p>Get familiar with your dashboard, the central hub for all your key metrics and activities.</p>,
  },
  'automation-rules': {
    title: 'Automation Rules',
    content: <p>Explore how to set up automation rules to handle repetitive tasks and streamline your workflows.</p>,
  },
  'api-reference': {
    title: 'API Reference',
    content: <p>For developers: access our comprehensive API documentation to build custom integrations.</p>,
  },
  'integrations': {
    title: 'Integrations',
    content: <p>Connect CoreCRM with your favorite third-party apps to create a seamless workflow.</p>,
  },
};

const SidebarLink = ({ text, topic, isActive, onClick }) => (
  <a 
    href="#"
    onClick={(e) => {
      e.preventDefault();
      onClick(topic);
    }}
    className={`block py-2 px-4 rounded-md transition-colors duration-200 ${isActive ? 'bg-orange-100 text-orange-700 font-medium' : 'hover:bg-gray-100 text-gray-600'}`}>
    {text}
  </a>
);

const Documentation = () => {
  const [activeTopic, setActiveTopic] = useState('introduction');
  const activeContent = docContent[activeTopic];

  return (
    <div className="bg-white font-sans">
      <div className="container mx-auto px-6 py-16">
        <div className="lg:flex">

          <aside className="lg:w-1/4 lg:pr-8 mb-12 lg:mb-0">
            <div className="sticky top-24">
              <h2 className="text-2xl font-medium text-gray-900 mb-6">Documentation</h2>
              <nav className="space-y-2">
                <h3 className="px-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Getting Started</h3>
                <SidebarLink text="Introduction" topic="introduction" isActive={activeTopic === 'introduction'} onClick={setActiveTopic} />
                <SidebarLink text="Account Setup" topic="account-setup" isActive={activeTopic === 'account-setup'} onClick={setActiveTopic} />
                <SidebarLink text="First Campaign" topic="first-campaign" isActive={activeTopic === 'first-campaign'} onClick={setActiveTopic} />
                
                <h3 className="px-4 pt-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Core Concepts</h3>
                <SidebarLink text="Contacts & Leads" topic="contacts-leads" isActive={activeTopic === 'contacts-leads'} onClick={setActiveTopic} />
                <SidebarLink text="Understanding Deals" topic="understanding-deals" isActive={activeTopic === 'understanding-deals'} onClick={setActiveTopic} />
                <SidebarLink text="Using the Dashboard" topic="using-dashboard" isActive={activeTopic === 'using-dashboard'} onClick={setActiveTopic} />

                <h3 className="px-4 pt-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Advanced</h3>
                <SidebarLink text="Automation Rules" topic="automation-rules" isActive={activeTopic === 'automation-rules'} onClick={setActiveTopic} />
                <SidebarLink text="API Reference" topic="api-reference" isActive={activeTopic === 'api-reference'} onClick={setActiveTopic} />
                <SidebarLink text="Integrations" topic="integrations" isActive={activeTopic === 'integrations'} onClick={setActiveTopic} />
              </nav>
            </div>
          </aside>


          <main className="lg:w-3/4 lg:pl-8">
            <article className="prose lg:prose-xl max-w-none">
              <div className="border-b pb-4 mb-8">
                <h1 className="text-4xl font-medium text-gray-900">{activeContent.title}</h1>
              </div>
              {activeContent.content}
              <div className="mt-12 p-6 bg-orange-50 rounded-lg">
                <h3 className="text-xl font-medium text-orange-800 flex items-center">
                  <ChevronsRight className="w-6 h-6 mr-2" />
                  Next Steps
                </h3>
                <p className="mt-2 text-gray-700">Explore another topic from the sidebar to continue learning.</p>
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
