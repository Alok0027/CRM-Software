import React from 'react';
import youtube from '../assets/youtube.png';
import github from '../assets/github.png';
import paypal from '../assets/paypal.png';
import webflow from '../assets/webflow.png';
import './animations.css';

const integrations = [
  {
    logo: youtube,
    name: 'Youtube',
    description: 'Harness the power of video content with YouTube\'s extensive platform for creators and viewers alike.'
  },
  {
    logo: github,
    name: 'GitHub',
    description: 'Collaborate with developers worldwide on GitHub, the leading platform for version control and open-source development.'
  },
  {
    logo: paypal,
    name: 'Paypal',
    description: 'Facilitate secure online transactions with PayPal, the trusted payment gateway for businesses and customers worldwide.'
  },
  {
    logo: webflow,
    name: 'Webflow',
    description: 'Create seamless and visually stunning websites with Webflow\'s powerful design and development platform.'
  }
];

const Integration = () => {
  return (
    <section className="py-20 px-10 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-16">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-medium text-gray-800 mb-4">Seamless Integrations</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            </p>
          </div>
          <button className="bg-orange-500 text-white font-medium py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300 whitespace-nowrap">
            All Integrations
          </button>
        </div>

        <div className="mt-16 w-full overflow-hidden">
          <div className="flex animate-scroll">
            {[...integrations, ...integrations].map((integration, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300 mx-4 flex-shrink-0 w-80">
                <img src={integration.logo} alt={`${integration.name} logo`} className="h-12 w-12 mb-6" />
                <h3 className="text-2xl font-medium text-gray-800 mb-3">{integration.name}</h3>
                <p className="text-gray-600">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
