import React, { useState, useEffect } from 'react';
import './animations.css';
import crmlogo1 from '../assets/crmlogo1.png';
import crmlogo2 from '../assets/crmlogo2.png';
import crmlogo3 from '../assets/crmlogo3.png';
import crmlogo4 from '../assets/crmlogo4.png';
import crmlogo5 from '../assets/crmlogo5.png';
import crmlogo6 from '../assets/crmlogo6.png';
import epicurious from '../assets/epicurious.svg';
import globalbank from '../assets/globalbank.svg';
import heroimg from '../assets/heroimg.png';

const logos = [
  { src: crmlogo1, alt: 'CRM Logo 1' },
  { src: crmlogo2, alt: 'CRM Logo 2' },
  { src: crmlogo3, alt: 'CRM Logo 3' },
  { src: crmlogo4, alt: 'CRM Logo 4' },
  { src: crmlogo5, alt: 'CRM Logo 5' },
  { src: crmlogo6, alt: 'CRM Logo 6' },
  { src: epicurious, alt: 'Epicurious Logo' },
  { src: globalbank, alt: 'Global Bank Logo' },
];

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const rotation = Math.max(0, 22.5 - scrollPosition / 20);
  const perspective = 1000;
  const imageStyle = {
    transform: `perspective(${perspective}px) rotateX(${rotation}deg)`,
    transition: 'transform 0.2s ease-out',
  };
  return (
    <div className="text-center py-20 px-5 bg-white font-sans">
      <div className="max-w-4xl mx-auto mb-6">
        <h1 className="text-6xl font-medium mb-5 leading-tight text-gray-800">
          Unleash the Power of Your Business with <span className="text-orange-500">Zestful!</span>
        </h1>
        <p className="text-lg font-light text-gray-600 mb-8 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </div>
      <div className="mt-16">
        <div className="w-full overflow-hidden">
          <div className="flex animate-scroll">
            {[...logos, ...logos].map((logo, index) => (
              <img key={index} src={logo.src} alt={logo.alt} className="h-8 mx-16 flex-shrink-0 grayscale opacity-60" />
            ))}
          </div>
        </div>
        <div className="mt-16 flex justify-center">
           <img src={heroimg} alt="Dashboard preview" className="w-screen h-screen rounded-lg shadow-2xl" style={imageStyle} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
