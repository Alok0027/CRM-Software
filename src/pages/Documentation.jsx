import React from 'react';

const Documentation = () => {
  return (
    <div className="bg-white font-sans">
      <header className="bg-orange-400 text-white py-20 px-10 mt-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-medium mb-4">Documentation</h1>
          <p className="text-lg">
            Complete guide to using our CRM platform effectively. Learn about features, 
            integrations, and best practices to maximize your productivity.
          </p>
        </div>
      </header>

      <main className="py-16 px-10">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-6">Getting Started</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Welcome to our comprehensive CRM documentation. This guide will help you get up and running 
                quickly with all the features and capabilities of our platform.
              </p>
              <p>
                Our CRM system is designed to streamline your sales process, manage customer relationships, 
                and provide powerful analytics to drive your business growth.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-6">Core Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Contact Management</h3>
                <p className="text-gray-600">
                  Organize and manage all your customer information in one centralized location.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Lead Tracking</h3>
                <p className="text-gray-600">
                  Track leads through your sales pipeline and convert them into customers.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Deal Management</h3>
                <p className="text-gray-600">
                  Manage opportunities and deals with comprehensive tracking and reporting.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Automation</h3>
                <p className="text-gray-600">
                  Automate repetitive tasks and workflows to increase efficiency.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-6">Data Management</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Our advanced data management features help you integrate, enrich, and organize your data 
                for maximum insights and efficiency.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Data Integration with popular platforms</li>
                <li>Data Model customization and schema management</li>
                <li>Data Enrichment from multiple sources</li>
                <li>Custom Data Sets and reporting</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Documentation;
