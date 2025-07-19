import React, { useEffect, useRef } from 'react';
import * as anime from 'animejs';

function Discover() {
  const pathRef = useRef(null);

  useEffect(() => {
    const paths = [
      "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm64 160c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm128.5 177.5c-29.6-25.3-75.4-25.3-105 0-7 6-17.6 5.2-23.6-1.9-6-7-5.2-17.6 1.9-23.6 39.8-34.1 102.6-34.1 142.4 0 7 6 7.9 16.6 1.9 23.6-6.1 7.1-16.7 7.9-23.6 1.9z", // frown
      "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM175 180c-9.2 0-16.6-7.4-16.6-16.6 0-9.2 7.4-16.6 16.6-16.6s16.6 7.4 16.6 16.6c0 9.2-7.4 16.6-16.6 16.6zm162 0c-9.2 0-16.6-7.4-16.6-16.6 0-9.2 7.4-16.6 16.6-16.6s16.6 7.4 16.6 16.6c0 9.2-7.4 16.6-16.6 16.6zm-81 121.2c-24.4 0-46.4-15.6-54.4-38.4-1.8-5.2 1-10.9 6.2-12.7s10.9 1 12.7 6.2c4.8 13.6 17.7 22.9 32.5 22.9s27.7-9.3 32.5-22.9c1.8-5.2 7.5-8 12.7-6.2s8 7.5 6.2 12.7c-8 22.8-30 38.4-54.4 38.4z", // bulb (lightbulb shape)
      "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-50 316c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v8zm50-12c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v8zm50 12c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v8zm-100-100l50-50 50 50-50 50-50-50z", // growth (arrow up)
      "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm104 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-208 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm208.4 113.1c-9.5 55.2-55.2 95.9-112.4 95.9s-102.9-40.7-112.4-95.9c-1.5-8.7 5.3-16.9 14.2-16.9h196.3c8.9 0 15.7 8.2 14.3 16.9z" // smile
    ];
    
    const colors = ["#FF5C5C", "#FFD93D", "#4CAF50", "#33CCFF"];
    
    let index = 0;
    
    const morph = () => {
      const nextIndex = (index + 1) % paths.length;
      
      anime({
        targets: pathRef.current,
        d: paths[nextIndex],
        fill: colors[nextIndex],
        duration: 1500,
        easing: "easeInOutQuad",
        complete: () => {
          index = nextIndex;
          setTimeout(morph, 800);
        }
      });
    };
    
    // Start the animation after a short delay
    const timer = setTimeout(morph, 1000);
    
    return () => clearTimeout(timer);
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
            <svg className="w-64 h-64 sm:w-72 sm:h-72 lg:w-[300px] lg:h-[300px]" viewBox="0 0 512 512">
              <path
                ref={pathRef}
                fill="#FF5C5C"
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm64 160c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm128.5 177.5c-29.6-25.3-75.4-25.3-105 0-7 6-17.6 5.2-23.6-1.9-6-7-5.2-17.6 1.9-23.6 39.8-34.1 102.6-34.1 142.4 0 7 6 7.9 16.6 1.9 23.6-6.1 7.1-16.7 7.9-23.6 1.9z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
