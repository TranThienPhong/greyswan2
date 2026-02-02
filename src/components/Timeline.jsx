import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lightbox from './Lightbox';

gsap.registerPlugin(ScrollTrigger);

const Timeline = ({ data }) => {
  const timelineRef = useRef(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxSide, setLightboxSide] = useState('left');

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
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxSide(side);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImages([]);
    setLightboxIndex(0);
  };

  // Helper function to extract year from string like "1987-97" -> 1987
  const getStartYear = (yearStr) => {
    const match = yearStr.match(/(\d{4})/);
    return match ? parseInt(match[1]) : 0;
  };

  return (
    <>
      <div ref={timelineRef} className="relative">
        {/* Timeline Events by Era */}
        {data.map((era, eraIndex) => (
          <React.Fragment key={era.era}>
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
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 z-20">
                  <svg width="6" height="12" viewBox="0 0 6 12" preserveAspectRatio="none">
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

              {/* Events */}
              <div className="relative z-20 space-y-16 md:space-y-20 py-12 px-4 md:px-12">
                {(() => {
                  // Sort all events by year, handling grouped events
                  const sortedEvents = [...era.events].sort((a, b) => {
                    const yearA = a.isGrouped ? getStartYear(a.items[0].year) : getStartYear(a.year);
                    const yearB = b.isGrouped ? getStartYear(b.items[0].year) : getStartYear(b.year);
                    return yearA - yearB;
                  });

                  // Group events by starting year - events with same year appear on same row
                  const groupedEvents = [];
                  const processedIndices = new Set();

                  sortedEvents.forEach((event, index) => {
                    if (processedIndices.has(index)) return;

                    // Handle grouped events (like book trilogy)
                    if (event.isGrouped) {
                      groupedEvents.push({
                        leftEvent: event.side === 'left' ? event : null,
                        rightEvent: event.side === 'right' ? event : null,
                        isGrouped: true
                      });
                      processedIndices.add(index);
                      return;
                    }

                    const eventYear = getStartYear(event.year);
                    const isLeft = event.side === 'left';

                    // Find matching event with same year on opposite side
                    let matchingEvent = null;
                    let matchingIndex = -1;

                    for (let i = index + 1; i < sortedEvents.length; i++) {
                      if (processedIndices.has(i)) continue;
                      if (sortedEvents[i].isGrouped) continue; // Skip grouped events
                      const otherYear = getStartYear(sortedEvents[i].year);
                      if (otherYear === eventYear && sortedEvents[i].side !== event.side) {
                        matchingEvent = sortedEvents[i];
                        matchingIndex = i;
                        break;
                      }
                      if (otherYear > eventYear) break; // No match found
                    }

                    if (matchingEvent) {
                      processedIndices.add(matchingIndex);
                      groupedEvents.push({
                        leftEvent: isLeft ? event : matchingEvent,
                        rightEvent: isLeft ? matchingEvent : event,
                      });
                    } else {
                      groupedEvents.push({
                        leftEvent: isLeft ? event : null,
                        rightEvent: isLeft ? null : event,
                      });
                    }

                    processedIndices.add(index);
                  });

                  return groupedEvents.map((group, eventIndex) => {
                    const leftEvent = group.leftEvent;
                    const rightEvent = group.rightEvent;

                    // Handle grouped events (book trilogy pattern)
                    if (group.isGrouped) {
                      const groupedEvent = rightEvent || leftEvent;
                      const isRight = groupedEvent.side === 'right';

                      return (
                        <div
                          key={`${era.era}-${eventIndex}-grouped`}
                          className="timeline-event relative"
                        >
                          {/* Desktop Layout for Grouped Events */}
                          <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
                            {/* LEFT COLUMN */}
                            <div className="flex items-center justify-end">
                              {!isRight && <div>Grouped left events not implemented yet</div>}
                            </div>

                            {/* RIGHT COLUMN - Grouped Book Trilogy */}
                            <div className="flex items-center justify-start gap-6">
                              {isRight && (
                                <>
                                  {/* Text Stack on LEFT */}
                                  <div className="flex flex-col gap-8 max-w-xs">
                                    {groupedEvent.items.map((item, idx) => (
                                      <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                                        className="text-left relative"
                                      >
                                        <h3 className="text-xl md:text-2xl font-bold text-muted-gold mb-1 font-sans">
                                          {item.year}
                                        </h3>
                                        <p className="text-sm md:text-base leading-relaxed"
                                          style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                                          {item.title}
                                        </p>

                                        {/* Connector Line extending to right */}
                                        <div className="absolute left-full top-1/2 w-6 h-[2px] bg-muted-gold/60 transform -translate-y-1/2" />
                                      </motion.div>
                                    ))}
                                  </div>

                                  {/* Shared Images on RIGHT */}
                                  {groupedEvent.sharedImages && groupedEvent.sharedImages.length > 0 && (
                                    <motion.div
                                      initial={{ opacity: 0, x: 30 }}
                                      whileInView={{ opacity: 1, x: 0 }}
                                      viewport={{ once: true }}
                                      transition={{ duration: 0.6, delay: 0.3 }}
                                      className="flex flex-wrap gap-3 justify-start flex-1"
                                    >
                                      {groupedEvent.sharedImages.map((img, imgIndex) => (
                                        <div
                                          key={imgIndex}
                                          className="cursor-pointer group"
                                          onClick={() => openLightbox(groupedEvent.sharedImages, imgIndex, 'right')}
                                        >
                                          <img
                                            src={img}
                                            alt={`Books - ${imgIndex + 1}`}
                                            className="w-full max-w-[200px] h-auto border-2 border-muted-gold/60 
                                                 hover:border-muted-gold transition-all duration-300 
                                                 group-hover:scale-105 object-cover"
                                          />
                                        </div>
                                      ))}
                                    </motion.div>
                                  )}
                                </>
                              )}
                            </div>

                            {/* Center Dot */}
                            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 border-rich-black z-10"
                              style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
                          </div>

                          {/* Mobile Layout for Grouped Events */}
                          <div className="md:hidden space-y-6">
                            {groupedEvent.items.map((item, idx) => (
                              <div key={idx} className="text-center">
                                <h3 className="text-xl font-bold mb-1 font-sans text-muted-gold">
                                  {item.year}
                                </h3>
                                <p className="text-sm leading-relaxed"
                                  style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                                  {item.title}
                                </p>
                              </div>
                            ))}

                            {groupedEvent.sharedImages && groupedEvent.sharedImages.length > 0 && (
                              <div className="flex flex-wrap gap-3 justify-center mt-4">
                                {groupedEvent.sharedImages.map((img, imgIndex) => (
                                  <div
                                    key={imgIndex}
                                    className="cursor-pointer"
                                    onClick={() => openLightbox(groupedEvent.sharedImages, imgIndex, 'right')}
                                  >
                                    <img
                                      src={img}
                                      alt={`Books - ${imgIndex + 1}`}
                                      className="w-full max-w-[200px] h-auto border-2 border-muted-gold/60 hover:border-muted-gold
                                           transition-all duration-300 object-cover"
                                    />
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    }

                    // Regular event rendering
                    return (
                      <div
                        key={`${era.era}-${eventIndex}`}
                        className="timeline-event relative"
                      >
                        {/* Desktop Layout */}
                        <div className="hidden md:grid md:grid-cols-2 gap-12 items-start">
                          {/* LEFT COLUMN - Economy & Policy */}
                          <div className="flex items-start justify-end gap-6">
                            {leftEvent && (
                              <>
                                {/* Images on LEFT */}
                                {leftEvent.images && leftEvent.images.length > 0 && (
                                  <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="flex flex-wrap gap-3 justify-end flex-1"
                                  >
                                    {leftEvent.images.map((img, imgIndex) => (
                                      <div
                                        key={imgIndex}
                                        className="cursor-pointer group"
                                        onClick={() => openLightbox(leftEvent.images, imgIndex, 'left')}
                                      >
                                        <img
                                          src={img}
                                          alt={`${leftEvent.year} - ${imgIndex + 1}`}
                                          className="w-full max-w-[200px] h-auto border-2 border-white/60 
                                               hover:border-white transition-all duration-300 
                                               group-hover:scale-105 object-cover grayscale hover:grayscale-0"
                                        />
                                      </div>
                                    ))}
                                  </motion.div>
                                )}

                                {/* Text on RIGHT */}
                                <motion.div
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.6 }}
                                  className="text-right max-w-xs relative"
                                >
                                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-sans">
                                    {leftEvent.year}
                                  </h3>
                                  <p className="text-base md:text-lg text-white/60 leading-relaxed mb-3">
                                    {leftEvent.title}
                                  </p>

                                  {/* Connector Line BELOW text, extending from center dot to left images */}
                                  <div className="absolute left-0 top-full mt-2 right-0 h-[2px] bg-white/60" />
                                </motion.div>
                              </>
                            )}
                          </div>

                          {/* RIGHT COLUMN - Newsletters & Industry */}
                          <div className="flex items-start justify-start gap-6">
                            {rightEvent && (
                              <>
                                {/* Text on LEFT */}
                                <motion.div
                                  initial={{ opacity: 0, x: 20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.6 }}
                                  className="text-left max-w-xs relative"
                                >
                                  <h3 className="text-2xl md:text-3xl font-bold text-[#ba924c] mb-2 font-sans">
                                    {rightEvent.year}
                                  </h3>
                                  <p className="text-base md:text-lg leading-relaxed mb-3"
                                    style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                                    {rightEvent.title}
                                  </p>

                                  {/* Connector Line BELOW text, extending from center dot to right images */}
                                  <div className="absolute left-0 top-full mt-2 right-0 h-[2px] bg-[#ba924c]/60" />
                                </motion.div>

                                {/* Images on RIGHT */}
                                {rightEvent.images && rightEvent.images.length > 0 && (
                                  <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="flex flex-wrap gap-3 justify-start flex-1"
                                  >
                                    {rightEvent.images.map((img, imgIndex) => (
                                      <div
                                        key={imgIndex}
                                        className="cursor-pointer group"
                                        onClick={() => openLightbox(rightEvent.images, imgIndex, 'right')}
                                      >
                                        <img
                                          src={img}
                                          alt={`${rightEvent.year} - ${imgIndex + 1}`}
                                          className="w-full max-w-[200px] h-auto border-2 border-muted-gold/60 
                                               hover:border-muted-gold transition-all duration-300 
                                               group-hover:scale-105 object-cover"
                                        />
                                      </div>
                                    ))}
                                  </motion.div>
                                )}
                              </>
                            )}
                          </div>

                          {/* Center Dot on Timeline - Half white/half gold */}
                          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-rich-black z-10"
                            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
                        </div>

                        {/* Mobile Layout - Show everything stacked */}
                        <div className="md:hidden space-y-4">
                          {/* Left Event */}
                          {leftEvent && (
                            <div className="text-center">
                              <h3 className="text-2xl font-bold mb-2 font-sans text-white">
                                {leftEvent.year}
                              </h3>
                              <p className="text-base leading-relaxed text-white/60">
                                {leftEvent.title}
                              </p>

                              {leftEvent.images && leftEvent.images.length > 0 && (
                                <div className="flex flex-wrap gap-3 justify-center mt-3">
                                  {leftEvent.images.map((img, imgIndex) => (
                                    <div
                                      key={imgIndex}
                                      className="cursor-pointer"
                                      onClick={() => openLightbox(leftEvent.images, imgIndex, 'left')}
                                    >
                                      <img
                                        src={img}
                                        alt={`${leftEvent.year} - ${imgIndex + 1}`}
                                        className="w-full max-w-[200px] h-auto border-2 border-white/60 hover:border-white
                                             transition-all duration-300 object-cover grayscale hover:grayscale-0"
                                      />
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}

                          {/* Right Event */}
                          {rightEvent && (
                            <div className="text-center">
                              <h3 className="text-2xl font-bold mb-2 font-sans text-muted-gold">
                                {rightEvent.year}
                              </h3>
                              <p className="text-base leading-relaxed"
                                style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                                {rightEvent.title}
                              </p>

                              {rightEvent.images && rightEvent.images.length > 0 && (
                                <div className="flex flex-wrap gap-3 justify-center mt-3">
                                  {rightEvent.images.map((img, imgIndex) => (
                                    <div
                                      key={imgIndex}
                                      className="cursor-pointer"
                                      onClick={() => openLightbox(rightEvent.images, imgIndex, 'right')}
                                    >
                                      <img
                                        src={img}
                                        alt={`${rightEvent.year} - ${imgIndex + 1}`}
                                        className="w-full max-w-[200px] h-auto border-2 border-muted-gold/60 hover:border-muted-gold
                                             transition-all duration-300 object-cover"
                                      />
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}

                          {/* Center Dot for Mobile - Half white/half gold */}
                          <div className="flex justify-center">
                            <div className="w-3 h-3 rounded-full border-2 border-rich-black"
                              style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
                          </div>
                        </div>
                      </div>
                    );
                  });
                })()}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        images={lightboxImages}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        initialIndex={lightboxIndex}
        side={lightboxSide}
      />
    </>
  );
};

export default Timeline;
