import React from 'react';
import seo from '../assets/seo.svg';
import growth from '../assets/growth.svg';
import analysis from '../assets/analysis.svg';
import security from '../assets/security.svg';
import features1 from '../assets/features1.png';
import features2 from '../assets/features2.png';

const featuresData = [
  { icon: security, title: 'Security' },
  { icon: growth, title: 'Growth' },
  { icon: seo, title: 'SEO' },
  { icon: analysis, title: 'Analysis' },
];

const Features = () => {
  return (
    <section className="bg-orange-500 text-white py-20 px-10 font-sans w-screen h-screen mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl font-medium leading-tight mb-6">Exceptional Features, Seamless Performance</h2>
          <p className="mb-10">
            ClientNest takes web design to the next level with a robust set of exceptional features designed to enhance your online presence. From stunning customization options to powerful performance improvements, we've crafted ClientNest to empower your digital journey. Explore our feature-rich software and unlock the potential of your online presence.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {featuresData.map((feature, index) => (
              <div key={index} className="bg-amber-600 rounded-xl p-6 flex items-center space-x-6">
                <div className="bg-white p-4 rounded-lg">
                  <img src={feature.icon} alt={feature.title} className="h-12 w-12" />
                </div>
                <h3 className="font-semibold text-2xl text-white">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img src={features1} alt="Dashboard Main" className="relative z-10 rounded-lg shadow-2xl" />
          <img src={features2} alt="Dashboard Tables" className="absolute top-[40%] left-[30%] z-20 w-4/5 rounded-lg shadow-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Features;

