import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Painpoints = ({ painPointsData, title }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!containerRef.current) return;
      const sections = gsap.utils.toArray(".pain-point-section", containerRef.current);

      sections.forEach((section) => {
        const image = section.querySelector(".pain-point-image");
        const text = section.querySelector(".pain-point-text");
        const titleElement = section.querySelector(".pain-point-title");

        const tl = gsap.timeline({ paused: true });

        tl.to(image, { x: "-25%", ease: "power3.inOut", duration: 0.6 })
          .to(titleElement, { opacity: 0, y: -20, ease: "power3.inOut", duration: 0.4 }, "<0.1")
          .fromTo(text, { opacity: 0, x: 50 }, { opacity: 1, x: 0, ease: "power3.out", duration: 0.6 }, "<0.2");

        section.addEventListener("mouseenter", () => tl.play());
        section.addEventListener("mouseleave", () => tl.reverse());

        gsap.from(section, {
          opacity: 0,
          y: 100,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, 100); // Delay to ensure DOM is ready

    return () => clearTimeout(timeout);
  }, [painPointsData]); // Rerun effect if data changes

  return (
    <div className="bg-white py-20" ref={containerRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-medium text-center text-gray-800 mb-12">{title}</h2>
        <div className="space-y-16">
          {painPointsData.map((point, index) => (
            <div key={index} className="pain-point-section flex items-center overflow-hidden bg-gray-50 rounded-lg shadow-md">
              <div className="relative w-1/2 h-80">
                <img src={point.img} alt={point.title} className="pain-point-image absolute top-0 left-0 w-full h-full object-cover" />
                <div className="pain-point-title absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-white text-3xl font-medium text-center px-4">{point.title}</h3>
                </div>
                <div className="pain-point-text absolute inset-0 bg-orange-600/90 flex items-center justify-center p-8 opacity-0">
                  <p className="text-white text-lg text-center">{point.text}</p>
                </div>
              </div>
              <div className="w-1/2 p-12">
                <h3 className="text-2xl font-medium text-gray-800 mb-4">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Painpoints;