import React from 'react';
import why1 from '../assets/why1.png';
import why2 from '../assets/newwhy2.jpg';

const CheckIcon = () => (
  <div className="bg-orange-100 rounded-md p-1 mr-4">
    <svg
      className="w-5 h-5 text-orange-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M5 13l4 4L19 7"
      />
    </svg>
  </div>
);

const Why = () => {
  const reasons = [
    {
      title: 'Visually Striking Design:',
      description: 'ClientNest empowers you to create stunning CRM records that leave a lasting impression on your customers.',
    },
    {
      title: 'User-Friendly Interface:',
      description: 'Enjoy an intuitive and user-friendly interface that simplifies CRM management, making it accessible for all skill levels.',
    },
    {
      title: 'Continuous Innovation:',
      description: 'ClientNest is committed to ongoing updates and enhancements, ensuring your software remains at the forefront of design and technology trends.',
    },
  ];

  return (
    <section className="py-20 px-10 bg-white font-sans mt-10 mb-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
        <div className="relative h-[400px]">
          <img src={why1} alt="Check Table" className="absolute top-0 left-0 w-full h-auto rounded-lg shadow-lg" />
          <img src={why2} alt="Zestful Sidebar" className=" h-80 absolute top-96 left-[90%] w-1/3 rounded-lg shadow-lg transform -translate-y-1/2 -translate-x-1/2" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose ClientNest?</h2>
          <p className="text-gray-600 mb-8">
            ClientNest is your passport to an enriched online journey. Our SaaS offers a range of benefits to help you thrive in the digital realm. Here are some compelling reasons why ClientNest is the ideal choice for your web application:
          </p>
          <ul className="space-y-6">
            {reasons.map((reason, index) => (
              <li key={index} className="flex items-start">
                <CheckIcon />
                <p className="text-gray-600">
                  <span className="font-bold text-gray-800">{reason.title}</span> {reason.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Why;
