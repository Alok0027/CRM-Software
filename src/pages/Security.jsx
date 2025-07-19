import React from 'react';
import { FiShield, FiLock, FiEye, FiServer } from 'react-icons/fi';

const Security = () => {
  const securityFeatures = [
    {
      icon: <FiShield className="text-3xl text-orange-500" />,
      title: 'Data Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard AES-256 encryption.'
    },
    {
      icon: <FiLock className="text-3xl text-orange-500" />,
      title: 'Access Control',
      description: 'Role-based access control ensures users only see data they are authorized to access.'
    },
    {
      icon: <FiEye className="text-3xl text-orange-500" />,
      title: 'Audit Logging',
      description: 'Comprehensive audit trails track all user activities and data changes.'
    },
    {
      icon: <FiServer className="text-3xl text-orange-500" />,
      title: 'Secure Infrastructure',
      description: 'Hosted on secure cloud infrastructure with 99.9% uptime guarantee.'
    }
  ];

  return (
    <div className="bg-white font-sans">
      <header className="bg-orange-400 text-white py-20 px-10 mt-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-medium mb-4">Security</h1>
          <p className="text-lg">
            Your data security is our top priority. Learn about our comprehensive 
            security measures and compliance standards.
          </p>
        </div>
      </header>

      <main className="py-16 px-10">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-6">Security Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-normal mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-6">Compliance</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                We maintain compliance with industry standards and regulations to ensure 
                your data is handled with the highest level of security and privacy.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="text-center p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-lg font-normal mb-2">GDPR</h3>
                  <p className="text-sm text-gray-600">General Data Protection Regulation compliant</p>
                </div>
                <div className="text-center p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-lg font-normal mb-2">SOC 2</h3>
                  <p className="text-sm text-gray-600">Type II compliance certified</p>
                </div>
                <div className="text-center p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-lg font-normal mb-2">ISO 27001</h3>
                  <p className="text-sm text-gray-600">Information security management</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-6">Data Protection</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                We implement multiple layers of security to protect your sensitive business data:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>End-to-end encryption for all data transmission</li>
                <li>Regular security audits and penetration testing</li>
                <li>Multi-factor authentication for all user accounts</li>
                <li>Automated backup and disaster recovery procedures</li>
                <li>24/7 security monitoring and incident response</li>
                <li>Regular security training for all team members</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-6">Report Security Issues</h2>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                If you discover a security vulnerability, please report it to our security team immediately.
              </p>
              <a href="mailto:security@yourcrm.com" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
                Report Security Issue
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Security;
