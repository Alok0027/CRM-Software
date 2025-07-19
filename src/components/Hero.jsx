import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
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
  const heroRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

    tl.from('.hero-title', { opacity: 0, y: -40, delay: 0.2 })
      .from('.hero-subtitle', { opacity: 0, y: 30 }, '-=0.7')
      .from('.logo-carousel', { opacity: 0, y: 30 }, '-=0.7')
      .from('.hero-image', { opacity: 0, scale: 0.95, y: 40 }, '-=0.7');

  }, { scope: heroRef });

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

  const rotation = Math.max(0, 15 - scrollPosition / 25);
  const perspective = 1000;
  const imageStyle = {
    transform: `perspective(${perspective}px) rotateX(${rotation}deg)`,
    transition: 'transform 0.2s ease-out',
  };
  return (
    <div ref={heroRef} className="text-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white font-sans mt-16 sm:mt-4">
      <div className="relative min-h-[180px] sm:min-h-[220px] lg:min-h-[250px] mb-6 sm:mb-8">
        <h1 className="hero-title absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight sm:leading-tight px-2 sm:px-4" style={{ fontFamily: "'Inter', sans-serif, fontWeight: 1000" }}>
          <span className="text-neutral-700">Unleash the Power of Your</span><br className="hidden sm:block" /><span className="sm:hidden"> </span><span className="text-neutral-700">Business with</span> <span className="text-orange-500">ClientNest</span><span className="text-neutral-700">!</span>
        </h1>
      </div>
      <div className="max-w-4xl mx-auto text-center px-4">
        <p className="hero-subtitle text-base lg:text-lg font-light text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
          Your gateway to a vibrant online presence. Our SaaS software infuses your website with citrusy energy, ensuring you stand out and captivate your audience. Elevate your digital presence with ClientNest today!
        </p>
      </div>
      <div className="mt-8 sm:mt-12">
        <div className="w-full logo-carousel overflow-hidden">
          <div className="flex animate-scroll">
            {[...logos, ...logos].map((logo, index) => (
              <img key={index} src={logo.src} alt={logo.alt} className="h-6 sm:h-8 mx-6 sm:mx-10 lg:mx-12 flex-shrink-0 filter grayscale opacity-60" />
            ))}
          </div>
        </div>
        <div className="mt-8 sm:mt-12 flex justify-center px-4">
           <img src={heroimg} alt="Dashboard preview" className="hero-image w-full sm:w-11/12 lg:w-9/12 max-w-4xl rounded-lg shadow-xl" style={imageStyle} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
