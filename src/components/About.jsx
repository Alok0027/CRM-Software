import React from 'react';

const About = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white font-sans mt-16 sm:mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center">
        <div className="md:order-2">
          <p className="text-lg text-gray-600 leading-relaxed">
            At Zestful, we're all about infusing energy and vibrancy into your digital presence. Our passion lies in helping businesses stand out, thrive, and succeed in the ever-evolving online world. We've crafted Zestful to be your partner in innovation, offering dynamic design and feature-rich solutions that truly capture the essence of our name. Join us in the pursuit of a zestful online journey!
          </p>
        </div>
        <div className="md:order-1">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-800">Discover the Essence of Zestful</h2>
        </div>
      </div>
    </section>
  );
};

export default About;
