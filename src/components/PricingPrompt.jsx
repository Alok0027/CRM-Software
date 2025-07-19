import React from 'react';

const PricingPrompt = ({ title, subtitle, buttonText, buttonLink = '#', backgroundStyle }) => {
  return (
    <div style={backgroundStyle}>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-700">
          {subtitle}
        </p>
        <div className="mt-10 flex items-center">
          <a
            href={buttonLink}
            className="w-full sm:w-auto flex-shrink-0 rounded-md bg-orange-500 px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 text-center transition-colors"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingPrompt;
