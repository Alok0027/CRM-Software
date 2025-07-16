import React from 'react';
import { FaYoutube, FaGithub, FaPaypal, FaTwitter } from 'react-icons/fa';
import { SiWebflow } from 'react-icons/si';

const integrations = [
  {
    name: 'Webflow',
    icon: <SiWebflow className="text-3xl text-white" />,
    bgColor: 'bg-blue-500',
    description: 'Create seamless and visually stunning websites with Webflow’s powerful design and development platform.',
  },
  {
    name: 'Youtube',
    icon: <FaYoutube className="text-3xl text-white" />,
    bgColor: 'bg-red-500',
    description: 'Harness the power of video content with YouTube’s extensive platform for creators and viewers alike.',
  },
  {
    name: 'GitHub',
    icon: <FaGithub className="text-3xl text-white" />,
    bgColor: 'bg-gray-800',
    description: 'Collaborate with developers worldwide on GitHub, the leading platform for version control and open-source development.',
  },
  {
    name: 'Paypal',
    icon: <FaPaypal className="text-3xl text-white" />,
    bgColor: 'bg-blue-800',
    description: 'Facilitate secure online transactions with PayPal, the trusted payment gateway for businesses and customers worldwide.',
  },
  {
    name: 'Twitter',
    icon: <FaTwitter className="text-3xl text-white" />,
    bgColor: 'bg-blue-400',
    description: 'Stay connected and engage with your audience through Twitter’s fast-paced social media platform.',
  },
];

const IntegrationsPage = () => {
  return (
    <div className="bg-gray-50 font-sans">
      <header className="bg-orange-400 text-white py-20 px-10 mt-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-medium mb-4">Integrations</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
            elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
            commodo diam libero vitae erat.
          </p>
        </div>
      </header>

      <main className="py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
                <div className={`w-16 h-16 rounded-md flex items-center justify-center ${integration.bgColor} mb-6`}>
                  {integration.icon}
                </div>
                <h2 className="text-2xl font-medium text-gray-800 mb-2 text-center">{integration.name}</h2>
                <p className="text-gray-600 text-center">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default IntegrationsPage;
