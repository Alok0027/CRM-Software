import React from 'react';
import { FiActivity, FiCpu, FiDatabase, FiWifi } from 'react-icons/fi';

const SystemStatus = () => {
  const metrics = [
    { name: 'CPU Usage', value: '23%', status: 'good', icon: <FiCpu /> },
    { name: 'Memory Usage', value: '67%', status: 'good', icon: <FiActivity /> },
    { name: 'Database Load', value: '12%', status: 'good', icon: <FiDatabase /> },
    { name: 'Network Latency', value: '45ms', status: 'good', icon: <FiWifi /> }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'good':
        return 'text-green-600 bg-green-100';
      case 'warning':
        return 'text-yellow-600 bg-yellow-100';
      case 'critical':
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
            Real-time system performance metrics and health monitoring for our CRM platform.
          </p>
        </div>
      </header>

      <main className="py-16 px-10">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-6">System Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl text-orange-500">{metric.icon}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(metric.status)}`}>
                      {metric.status.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{metric.name}</h3>
                  <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-6">Performance Overview</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Response Time</h3>
                  <p className="text-3xl font-bold text-green-600">120ms</p>
                  <p className="text-sm text-gray-600">Average response time</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Uptime</h3>
                  <p className="text-3xl font-bold text-green-600">99.9%</p>
                  <p className="text-sm text-gray-600">Last 30 days</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Active Users</h3>
                  <p className="text-3xl font-bold text-blue-600">1,247</p>
                  <p className="text-sm text-gray-600">Currently online</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-6">Recent Activity</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">System backup completed successfully</span>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Database optimization completed</span>
                  <span className="text-sm text-gray-500">6 hours ago</span>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Security scan completed - No issues found</span>
                  <span className="text-sm text-gray-500">12 hours ago</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default SystemStatus;
