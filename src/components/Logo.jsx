import React, { useEffect, useState } from 'react';
import acmecorp from '../assets/acmecorp.svg';
import epicurious from '../assets/epicurious.svg';
import globalbank from '../assets/globalbank.svg';
import lightbox from '../assets/lightbox.svg';
import logoipsum from '../assets/logoipsum.svg';
import logoipsumcom from '../assets/logoipsumcom.svg';
import crmlogo1 from '../assets/crmlogo1.png';
import crmlogo2 from '../assets/crmlogo2.png';
import crmlogo6 from '../assets/crmlogo6.png';

const logos = [
  { src: acmecorp, alt: "acmecorp" },
  { src: epicurious, alt: "epicurious" },
  { src: globalbank, alt: "globalbank" },
  { src: lightbox, alt: "lightbox" },
  { src: logoipsum, alt: "logoipsum" },
  { src: logoipsumcom, alt: "logoipsumcom" },
  { src: crmlogo1, alt: "crmlogo1" },
  { src: crmlogo2, alt: "crmlogo2" },
  { src: crmlogo6, alt: "crmlogo6" },
];

const Logo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 6) % logos.length);
        setFade(true);
      }, 700);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const visibleLogos = logos.slice(currentIndex, currentIndex + 6);

  return (
    <div className="flex flex-col items-center text-center mt-16 sm:mt-20">
      <p className="text-gray-500 text-sm tracking-widest uppercase mb-2">
        Trusted by teams at
      </p>

      <div
        className={`grid grid-cols-2 sm:grid-cols-3 gap-x-8 sm:gap-x-12 gap-y-10 py-10 transition-opacity duration-700 ease-in-out ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {visibleLogos.map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            className="h-10 sm:h-12 w-auto object-contain mx-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default Logo;