import React from 'react';
import { FiPlus, FiTool, FiAlertCircle } from 'react-icons/fi';

const Changelog = () => {
  const releases = [
    {
      version: 'v2.1.0',
      date: 'January 15, 2024',
      changes: [
        { type: 'feature', text: 'Added Data Management section with integration capabilities' },
        { type: 'feature', text: 'New Automation workflows with email sequences' },
        { type: 'improvement', text: 'Enhanced dashboard analytics with orange theme' },
        { type: 'fix', text: 'Fixed sidebar navigation highlighting issues' }
      ]
    },
    {
      version: 'v2.0.5',
      date: 'January 10, 2024',
      changes: [
        { type: 'improvement', text: 'Improved topbar dynamic title display' },
        { type: 'fix', text: 'Fixed contact import validation' },
        { type: 'fix', text: 'Resolved deal pipeline sorting issues' }
      ]
    },
    {
      version: 'v2.0.0',
      date: 'December 20, 2023',
      changes: [
        { type: 'feature', text: 'Complete UI redesign with modern interface' },
        { type: 'feature', text: 'New floating navbar design' },
        { type: 'feature', text: 'Advanced contact and lead management' },
        { type: 'improvement', text: 'Performance optimizations across all pages' }
      ]
    }
  ];

  const getChangeIcon = (type) => {
    switch (type) {
      case 'feature':
        return <FiPlus className="text-green-500" />;
      case 'improvement':
        return <FiTool className="text-blue-500" />;
      case 'fix':
        return <FiAlertCircle className="text-orange-500" />;
      default:
        return <FiPlus className="text-green-500" />;
    }
  };

  const getChangeLabel = (type) => {
    switch (type) {
      case 'feature':
        return 'New';
      case 'improvement':
        return 'Improved';
      case 'fix':
        return 'Fixed';
      default:
        return 'New';
    }
  };

  return (
    <div className="bg-white font-sans">
      <header className="bg-orange-400 text-white py-20 px-10 mt-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-medium mb-4">Changelog</h1>
          <p className="text-lg">
            Stay up to date with the latest features, improvements, and bug fixes 
            in our CRM platform.
          </p>
        </div>
      </header>

      <main className="py-16 px-10">
        <div className="max-w-4xl mx-auto">
          {releases.map((release, index) => (
            <section key={index} className="mb-12">
              <div className="flex items-center mb-6">
                <h2 className="text-3xl font-medium text-gray-800 mr-4">{release.version}</h2>
                <span className="text-gray-500">{release.date}</span>
              </div>
              
              <div className="space-y-3">
                {release.changes.map((change, changeIndex) => (
                  <div key={changeIndex} className="flex items-start">
                    <div className="flex items-center mr-3 mt-1">
                      {getChangeIcon(change.type)}
                    </div>
                    <div className="flex-1">
                      <span className={`inline-block px-2 py-1 rounded text-xs font-medium mr-3 ${
                        change.type === 'feature' ? 'bg-green-100 text-green-700' :
                        change.type === 'improvement' ? 'bg-blue-100 text-blue-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {getChangeLabel(change.type)}
                      </span>
                      <span className="text-gray-700">{change.text}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {index < releases.length - 1 && <hr className="mt-8 border-gray-200" />}
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Changelog;
