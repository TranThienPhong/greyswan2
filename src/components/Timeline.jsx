import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lightbox from './Lightbox';
import Era1Content from './eraContent/Era1Content';
import Era2Content from './eraContent/Era2Content';
import Era3Content from './eraContent/Era3Content';
import Era4Content from './eraContent/Era4Content';
import Era5Content from './eraContent/Era5Content';
import Era6Content from './eraContent/Era6Content';

gsap.registerPlugin(ScrollTrigger);

const Timeline = ({ data }) => {
  const timelineRef = useRef(null);
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0,
    side: 'left'
  });

  useEffect(() => {
    // GSAP ScrollTrigger animations
    const elements = timelineRef.current.querySelectorAll('.timeline-event');

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [data]);

  const openLightbox = (images, index = 0, side = 'left') => {
    setLightbox({
      isOpen: true,
      images,
      currentIndex: index,
      side
    });
  };

  const closeLightbox = () => {
    setLightbox({
      isOpen: false,
      images: [],
      currentIndex: 0,
      side: 'left'
    });
  };

  const navigateLightbox = (direction) => {
    setLightbox(prev => {
      const newIndex = direction === 'next'
        ? (prev.currentIndex + 1) % prev.images.length
        : (prev.currentIndex - 1 + prev.images.length) % prev.images.length;
      return { ...prev, currentIndex: newIndex };
    });
  };

  return (
    <div ref={timelineRef} className="relative">
      {/* Timeline Events by Era */}
      {data.map((era, eraIndex) => (
        <div key={era.era}>
          {/* Era Title - Outside and between border frames */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative w-full py-8 sm:py-10 md:py-12 my-8 sm:my-10 md:my-12 z-40"
          >
            {/* Full-width horizontal lines - extending to both edges */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex items-center">
              {/* Left line - white, extends from left edge to center */}
              <div className="flex-1 h-[2px] bg-white/40" />
              {/* Right line - gold, extends from center to right edge */}
              <div className="flex-1 h-[2px] bg-[#ba924c]/50" />
            </div>

            {/* Era title - centered with background */}
            <div className="relative z-50 flex justify-center">
              <div className="bg-[#0a0a0a] px-6 sm:px-8 md:px-10 py-2 sm:py-3">
                <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-medium text-center whitespace-nowrap font-serif">
                  <span className="text-[#ba924c] font-semibold">ERA {era.era}:</span>{' '}
                  <span className="italic text-white font-normal">{era.title}</span>{' '}
                  <span className="text-white text-[1.8rem] font-sans font-normal">({era.years})</span>
                </h2>
              </div>
            </div>
          </motion.div>

          {/* Era Content Frame */}
          <div className="relative mb-16">
            {/* Top border - Half white/half gold gradient */}
            <div className="absolute top-0 left-0 right-0 h-[6px]"
              style={{ background: 'linear-gradient(to right, white 50%, #ba924c 50%)' }} />

            {/* Bottom border - Half white/half gold gradient - not shown for last era */}
            {eraIndex !== data.length - 1 && (
              <div className="absolute bottom-0 left-0 right-0 h-[6px]"
                style={{ background: 'linear-gradient(to right, white 50%, #ba924c 50%)' }} />
            )}

            {/* Central Vertical Line - Half white/half gold - within this era only */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[6px] transform -translate-x-1/2 z-10"
              style={{ background: 'linear-gradient(to right, white 50%, #ba924c 50%)' }} />

            {/* Arrow at bottom of last era - scaled to match 6px timeline width */}
            {eraIndex === data.length - 1 && (
              <div className="absolute left-1/2 -bottom-3 transform -translate-x-[0.5rem] z-20" style={{ width: '6px' }}>
                <svg width="16" height="12" viewBox="0 0 6 12" preserveAspectRatio="none" style={{ display: 'block' }}>
                  <defs>
                    <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="50%" stopColor="white" />
                      <stop offset="50%" stopColor="#ba924c" />
                    </linearGradient>
                  </defs>
                  <polygon points="3,12 0,0 6,0" fill="url(#arrowGradient)" />
                </svg>
              </div>
            )}

            {/* Custom Era Content - Render specific component based on era number */}
            {era.era === 'I' && <Era1Content openLightbox={openLightbox} />}
            {era.era === 'II' && <Era2Content openLightbox={openLightbox} />}
            {era.era === 'III' && <Era3Content openLightbox={openLightbox} />}
            {era.era === 'IV' && <Era4Content openLightbox={openLightbox} />}
            {era.era === 'V' && <Era5Content openLightbox={openLightbox} />}
            {era.era === 'VI' && <Era6Content openLightbox={openLightbox} />}
          </div>
        </div>
      ))}

      {lightbox.isOpen && (
        <Lightbox
          images={lightbox.images}
          currentIndex={lightbox.currentIndex}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
          side={lightbox.side}
        />
      )}
    </div>
  );
};

export default Timeline;
