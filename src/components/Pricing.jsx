import React, { useState } from 'react';
import { FaCheck, FaChartBar, FaPalette, FaLock, FaHeadset } from 'react-icons/fa';

const pricingPlans = {
  monthly: [
    {
      name: 'Basic',
      description: 'Our Basic Plan is perfect for those looking to establish an online presence with essential features and customization options.',
      price: '$29',
      features: ['Responsive Design', 'SEO Optimization tools', '24/7 Customer Support', 'User-Friendly Dashboard'],
      popular: false,
    },
    {
      name: 'Advanced',
      description: 'Upgrade to our Advanced Plan for enhanced capabilities and more features to grow your online presence.',
      price: '$39',
      features: ['Advanced Customization', 'E-Commerce Integrations', 'In-Depth Data Analysis', 'Enhanced Security & Privacy'],
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'Our Enterprise Plan is the ultimate choice for large businesses and enterprises seeking a comprehensive, high-performance online solution.',
      price: '$59',
      features: ['Complete Customization', 'Advanced Integrations', 'Top-Tier SEO Optimization', 'Dedicated Account Managment'],
      popular: false,
    },
  ],
  yearly: [
    {
      name: 'Basic',
      description: 'Our Basic Plan is perfect for those looking to establish an online presence with essential features and customization options.',
      price: '$290',
      features: ['Responsive Design', 'SEO Optimization tools', '24/7 Customer Support', 'User-Friendly Dashboard'],
      popular: false,
    },
    {
      name: 'Advanced',
      description: 'Upgrade to our Advanced Plan for enhanced capabilities and more features to grow your online presence.',
      price: '$390',
      features: ['Advanced Customization', 'E-Commerce Integrations', 'In-Depth Data Analysis', 'Enhanced Security & Privacy'],
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'Our Enterprise Plan is the ultimate choice for large businesses and enterprises seeking a comprehensive, high-performance online solution.',
      price: '$590',
      features: ['Complete Customization', 'Advanced Integrations', 'Top-Tier SEO Optimization', 'Dedicated Account Managment'],
      popular: false,
    },
  ],
};

const featureComparison = [
  {
    category: 'Analytics',
    icon: FaChartBar,
    features: [
      { name: 'Real Time Data Insights', included: [true, true, true] },
      { name: 'Advanced Statistics', included: [true, true, true] },
      { name: 'Advanced Analytics', included: [false, true, true] },
    ],
  },
  {
    category: 'Customization',
    icon: FaPalette,
    features: [
      { name: 'Dashboard Themes', included: [true, true, true] },
      { name: 'Widgets', included: [false, true, true] },
    ],
  },
  {
    category: 'Security',
    icon: FaLock,
    features: [
      { name: 'Encryption', included: [true, true, true] },
      { name: 'Backup & Recovery', included: [true, true, true] },
      { name: 'Security Audits', included: [false, true, true] },
    ],
  },
  {
    category: 'Support',
    icon: FaHeadset,
    features: [
      { name: '24/7 E-Mail Support', included: [true, true, true] },
      { name: 'On-Demand Phone Calls', included: [false, false, true] },
      { name: 'Personal Support Assistant', included: [false, false, true] },
    ],
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <section className="py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-5xl font-medium text-gray-800 mb-4">Flexible Pricing Plans</h2>
          <p className="text-gray-600 text-lg">
            Explore our range of pricing plans designed to meet your unique needs. We offer flexible options to ensure you can access the features that matter most to your business without breaking the bank. Find the perfect plan that fits your budget and goals.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg flex items-center">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md font-medium text-sm transition-colors ${billingCycle === 'monthly' ? 'bg-orange-500 text-white' : 'text-gray-600'}`}>
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-md font-medium text-sm transition-colors ${billingCycle === 'yearly' ? 'bg-orange-500 text-white' : 'text-gray-600'}`}>
              Yearly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {pricingPlans[billingCycle].map((plan, index) => (
            <div key={index} className={`bg-gray-50 rounded-lg p-8 shadow-sm transition-all duration-300 ${plan.popular ? 'border-2 border-orange-500 shadow-xl' : 'border-2 border-transparent'}`}>
              {plan.popular && (
                <div className="text-right -mt-12 mb-4">
                  <span className="bg-orange-500 text-white text-xs font-medium px-4 py-1 rounded-full">Most Popular</span>
                </div>
              )}
              <h3 className="text-2xl font-medium text-gray-800 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-5xl font-medium text-gray-800">{plan.price}</span>
                <span className="text-gray-500">{billingCycle === 'monthly' ? '/mo' : '/yr'}</span>
              </div>
              <button className="w-full bg-orange-500 text-white font-medium py-3 rounded-lg hover:bg-orange-600 transition-colors">
                Get Started
              </button>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <FaCheck className="text-orange-500 mr-3" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <h3 className="text-4xl font-medium text-gray-800 text-center mb-12">Feature Comparison</h3>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid grid-cols-4 gap-4 bg-gray-50 p-6 font-medium text-lg text-gray-800">
              <div className="text-left">Features</div>
              <div className="text-center">Basic</div>
              <div className="text-center">Advanced</div>
              <div className="text-center">Enterprise</div>
            </div>

            {featureComparison.map((categoryItem, catIndex) => (
              <div key={catIndex} className="divide-y divide-gray-200">
                <div className="grid grid-cols-4 gap-4 items-center p-6 bg-gray-100">
                  <div className="flex items-center col-span-1">
                    <categoryItem.icon className="text-orange-500 mr-4 text-2xl" />
                    <h4 className="font-medium text-gray-800 text-lg">{categoryItem.category}</h4>
                  </div>
                  <div className="col-span-3"></div>
                </div>
                {categoryItem.features.map((feature, featIndex) => (
                  <div key={featIndex} className="grid grid-cols-4 gap-4 items-center p-6 text-center">
                    <div className="text-left text-gray-600">{feature.name}</div>
                    {feature.included.map((isIncluded, planIndex) => (
                      <div key={planIndex} className="flex justify-center">
                        {isIncluded ? (
                          <FaCheck className="text-orange-500 text-2xl" />
                        ) : (
                          <span className="text-gray-400 font-medium text-2xl">-</span>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;