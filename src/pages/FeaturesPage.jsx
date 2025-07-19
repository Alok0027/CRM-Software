import React from 'react';
import { FiBarChart2, FiCpu, FiLock, FiSearch, FiSliders, FiTwitter } from 'react-icons/fi';
import features1 from '../assets/features1.png';
import features2 from '../assets/features2.png';

const FeaturesPage = () => {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="bg-orange-500 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-medium mb-4">Features</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
        </div>
      </section>

      {/* Elevate your Digital Business Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="max-w-lg">
            <h2 className="text-5xl font-medium text-gray-800 mb-6">Elevate your Digital Business</h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <div className="flex gap-4">
              <button className="bg-orange-500 text-white font-normal py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors">Sign Up</button>
              <button className="bg-gray-800 text-white font-normal py-3 px-8 rounded-lg hover:bg-gray-900 transition-colors">Login</button>
            </div>
          </div>
          <div className="relative">
                    <img src={features1} alt="Dashboard Main" className="relative z-10 rounded-lg shadow-2xl" />
                    <img src={features2} alt="Dashboard Tables" className="absolute top-[40%] left-[30%] z-20 w-4/5 rounded-lg shadow-2xl" />
                  </div>
        </div>
      </section>

      {/* Two-column Feature Highlight Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <FiSearch className="text-orange-500 text-4xl mb-4" />
            <h3 className="text-3xl font-medium text-gray-800 mb-4">Comprehensive Data Analysis</h3>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            </p>
            <img src={features1} alt="Analytics Dashboard" className="rounded-lg" />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <FiSliders className="text-orange-500 text-4xl mb-4" />
            <h3 className="text-3xl font-medium text-gray-800 mb-4">Extensive SEO Optimization Features</h3>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            </p>
            <img src={features2} alt="SEO Dashboard" className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-medium text-gray-800 mb-4">Core Features of Zestful</h2>
          <p className="max-w-3xl mx-auto text-gray-600 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard icon={<FiSearch />} title="Comprehensive Data Analysis" />
            <FeatureCard icon={<FiBarChart2 />} title="Next Gen Growth Features" />
            <FeatureCard icon={<FiSliders />} title="SEO Optimization" />
            <FeatureCard icon={<FiCpu />} title="UI Customization" />
            <FeatureCard icon={<FiTwitter />} title="Social Media Integration" />
            <FeatureCard icon={<FiLock />} title="Privacy & Security" />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg text-left">
    <div className="text-orange-500 text-4xl mb-4">{icon}</div>
    <h3 className="text-2xl font-medium text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
    </p>
  </div>
);

export default FeaturesPage;
