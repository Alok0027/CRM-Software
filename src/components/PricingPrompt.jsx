import React from 'react';

const PricingPrompt = ({ title, subtitle, buttonText, buttonLink = '#', backgroundStyle }) => {
  return (
    <div style={backgroundStyle}>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-700">
          {subtitle}
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <a
            href={buttonLink}
            className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingPrompt;
