import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import potentialimg2 from '../assets/potentialimg2.jpg';

function Discover() {
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      anime({
        targets: imageRef.current,
        translateX: ['-100%', '0%'],
        opacity: [0, 1],
        duration: 1500,
        easing: 'easeOutExpo',
        delay: 500,
      });
    }
  }, []);

  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h2 className="text-3xl font-medium text-gray-900 sm:text-4xl lg:text-5xl">
              Discover the Essence of ClientNest
            </h2>
            <p className="max-w-2xl text-lg text-gray-500 mt-8">
              At ClientNest, we're all about infusing energy and vibrancy into your digital presence.
              Our passion lies in helping businesses stand out, thrive, and succeed in the ever-evolving
              online world. We've crafted ClientNest to be your partner in innovation, offering dynamic
              design and feature-rich solutions that truly capture the essence of our name.
            </p>
          </div>

          <div className="flex items-center justify-center mt-10 lg:mt-0">
            <img 
              ref={imageRef} 
              src={potentialimg2} 
              alt="A team collaborating on a project" 
              className="rounded-lg shadow-2xl w-full max-w-md lg:max-w-lg opacity-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
