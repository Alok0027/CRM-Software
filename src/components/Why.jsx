import React from 'react';
import why1 from '../assets/why1.png';
import why2 from '../assets/why2.png';

const benefits = [
  {
    title: 'Visually Striking Design:',
    description: 'Zestful empowers you to create visually stunning websites that leave a lasting impression on your visitors.'
  },
  {
    title: 'User-Friendly Interface:',
    description: 'Enjoy an intuitive and user-friendly interface that simplifies website management, making it accessible for all skill levels.'
  },
  {
    title: 'Continuous Innovation:',
    description: 'Zestful is committed to ongoing updates and enhancements, ensuring your website remains at the forefront of design and technology trends.'
  }
];

const CheckmarkIcon = () => (
  <div className="bg-orange-500 rounded-md p-1 mr-4 flex-shrink-0 mt-1">
    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
  </div>
);

const Why = () => {
  return (
    <section className="py-24 px-10 bg-white font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-24">
        {/* Left Column - Images */}
        <div className="relative pr-10">
          <img src={why1} alt="Complex Table" className="relative z-10 rounded-lg shadow-2xl w-full" />
          <img src={why2} alt="Zestful Dashboard Menu" className="absolute top-28 -right-16 z-20 w-7/12 rounded-lg shadow-2xl h-10/12" />
        </div>

        {/* Right Column - Text Content */}
        <div>
          <h2 className="text-5xl font-medium text-gray-800 mb-6">Why Choose Zestful?</h2>
          <p className="text-gray-600 mb-10">
            Zestful is your passport to an enriched online journey. Our SaaS Webflow Template offers a range of benefits to help you thrive in the digital realm. Here are some compelling reasons why Zestful is the ideal choice for your web presence:
          </p>
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckmarkIcon />
                <div>
                  <p className="text-gray-800 leading-relaxed">
                    <span className="font-medium">{benefit.title}</span> {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;