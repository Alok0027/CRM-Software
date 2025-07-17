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
import heroimg from '../assets/newheroimg.jpg';

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

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
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
    <div className="text-center py-16 px-5 bg-white font-sans mt-16">
      <div className="relative h-64 mb-10">
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-7xl font-black leading-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
          <span className="text-neutral-700">Unleash the Power of Your</span><br /><span className="text-neutral-700">Business with</span> <span className="text-orange-500">Zestful</span><span className="text-neutral-700">!</span>
        </h1>
      </div>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg font-light text-gray-600 mb-8 max-w-2xl mx-auto">
          Your gateway to a vibrant online presence. Our SaaS Webflow Template infuses your website with citrusy energy, ensuring you stand out and captivate your audience. Elevate your digital presence with Zestful today!
        </p>
      </div>
      <div className="mt-16">
        <div className="w-full overflow-hidden logo-carousel">
          <div className="flex animate-scroll">
            {[...logos, ...logos].map((logo, index) => (
              <img key={index} src={logo.src} alt={logo.alt} className="h-8 mx-16 flex-shrink-0 filter grayscale opacity-60" />
            ))}
          </div>
        </div>
        <div className="mt-12 flex justify-center">
           <img src={heroimg} alt="Dashboard preview" className="w-11/12 rounded-lg shadow-xl" style={imageStyle} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
