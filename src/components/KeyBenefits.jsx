import React from 'react';

const KeyBenefits = ({ title, subtitle, description, benefits, backgroundStyle }) => {
  return (
    <div className="relative py-24 sm:py-32" style={backgroundStyle}>
       
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-orange-600">{title}</h2>
          <p className="mt-2 text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
            {subtitle}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500">
                    {benefit.icon}
                  </div>
                  {benefit.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{benefit.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default KeyBenefits;
