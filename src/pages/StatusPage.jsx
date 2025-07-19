import React from 'react';
import { FiCheckCircle, FiAlertTriangle, FiXCircle } from 'react-icons/fi';

const StatusPage = () => {
  const services = [
    { name: 'API Services', status: 'operational', uptime: '99.9%' },
    { name: 'Web Application', status: 'operational', uptime: '99.8%' },
    { name: 'Database', status: 'operational', uptime: '99.9%' },
    { name: 'Email Services', status: 'degraded', uptime: '98.5%' },
    { name: 'File Storage', status: 'operational', uptime: '99.7%' },
    { name: 'Authentication', status: 'operational', uptime: '99.9%' }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'operational':
        return <FiCheckCircle className="text-green-500" />;
      case 'degraded':
        return <FiAlertTriangle className="text-yellow-500" />;
      case 'outage':
        return <FiXCircle className="text-red-500" />;
      default:
        return <FiCheckCircle className="text-green-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'operational':
        return 'text-green-600 bg-green-100';
      case 'degraded':
        return 'text-yellow-600 bg-yellow-100';
      case 'outage':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-green-600 bg-green-100';
    }
  };

  return (
    <div className="bg-white font-sans">
      <header className="bg-orange-400 text-white py-20 px-10 mt-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-medium mb-4">System Status</h1>
          <p className="text-lg">
            Real-time status and uptime information for all our services and systems.
          </p>
        </div>
      </header>

      <main className="py-16 px-10">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <div className="flex items-center">
                <FiCheckCircle className="text-green-500 text-2xl mr-3" />
                <div>
                  <h2 className="text-xl font-normal text-green-800">All Systems Operational</h2>
                  <p className="text-green-600">All services are running normally</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-medium text-gray-800 mb-6">Service Status</h2>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {getStatusIcon(service.status)}
                      <div className="ml-3">
                        <h3 className="text-lg font-normal text-gray-800">{service.name}</h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(service.status)}`}>
                          {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">30-day uptime</p>
                      <p className="text-lg font-normal text-gray-800">{service.uptime}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-6">Recent Incidents</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start">
                  <FiAlertTriangle className="text-yellow-500 text-xl mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-normal text-gray-800 mb-2">Email Service Degradation</h3>
                    <p className="text-gray-600 mb-2">
                      Some users may experience delays in email delivery. We are working to resolve this issue.
                    </p>
                    <p className="text-sm text-gray-500">January 15, 2024 - 2:30 PM UTC</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start">
                  <FiCheckCircle className="text-green-500 text-xl mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-normal text-gray-800 mb-2">Scheduled Maintenance Completed</h3>
                    <p className="text-gray-600 mb-2">
                      Database maintenance has been completed successfully. All services are now operational.
                    </p>
                    <p className="text-sm text-gray-500">January 12, 2024 - 11:00 PM UTC</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default StatusPage;
