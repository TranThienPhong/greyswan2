import React from 'react';
import { motion } from 'framer-motion';

/**
 * ERA TEMPLATE - Copy this file to create custom content for each era
 * 
 * CUSTOMIZATION GUIDE:
 * 
 * 1. GRID LAYOUT: Adjust md:grid-cols-2, gap-12, items-start to change layout
 * 2. CONNECTOR LINES: Modify width, position using style={{ ... }}
 *    - Left: style={{ right: 'calc(50% + 3px)', width: 'calc(50% - 48px - 3px)' }}
 *    - Right: style={{ left: 'calc(50% + 3px)', width: 'calc(50% - 48px - 3px)' }}
 * 3. DOTS: Change size (w-6 h-6), border thickness (border-4), position (top-6)
 * 4. IMAGES: Adjust max-w-[200px], border colors, grayscale effects
 * 5. SPACING: Change mb-20 between milestones, gap-6 within columns
 */

const EraTemplate = ({ openLightbox }) => {
  return (
    <div className="relative z-20 py-12 px-4 md:px-12">

      {/* MILESTONE TEMPLATE - Left Side */}
      <div className="timeline-event relative mb-20">
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-start relative">

          {/* LEFT COLUMN */}
          <div className="flex items-start justify-end gap-6">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3 justify-end"
            >
              <div className="cursor-pointer group" onClick={() => openLightbox(['/path/to/image.jpg'], 0, 'left')}>
                <img
                  src="/path/to/image.jpg"
                  alt="Year"
                  className="w-full max-w-[200px] h-auto border-2 border-white/60 hover:border-white transition-all duration-300 group-hover:scale-105 object-cover grayscale hover:grayscale-0"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-right max-w-xs"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-sans">YEAR</h3>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-3">
                Milestone description text goes here.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Empty for left-side milestone */}
          <div></div>

          {/* CONNECTOR LINE - Customize width and position */}
          <div className="absolute right-1/2 top-1/2 h-[2px] bg-white/60 transform -translate-y-1/2 pointer-events-none"
            style={{ right: 'calc(50% + 3px)', width: 'calc(50% - 48px - 3px)' }} />

          {/* CENTER DOT - Customize size, border, position */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-[#0a0a0a] z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

      {/* MILESTONE TEMPLATE - Right Side */}
      <div className="timeline-event relative mb-20">
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-start relative">

          {/* LEFT COLUMN - Empty for right-side milestone */}
          <div></div>

          {/* RIGHT COLUMN */}
          <div className="flex items-start justify-start gap-6">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left max-w-xs"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#ba924c] mb-2 font-sans">YEAR</h3>
              <p className="text-base md:text-lg leading-relaxed mb-3" style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                Milestone description text goes here.
              </p>
            </motion.div>

            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <div className="cursor-pointer group" onClick={() => openLightbox(['/path/to/image.jpg'], 0, 'right')}>
                <img
                  src="/path/to/image.jpg"
                  alt="Year"
                  className="w-full max-w-[200px] h-auto border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* CONNECTOR LINE - Customize width and position */}
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform -translate-y-1/2 pointer-events-none"
            style={{ left: 'calc(50% + 3px)', width: 'calc(50% - 48px - 3px)' }} />

          {/* CENTER DOT - Customize size, border, position */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-[#0a0a0a] z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

      {/* MILESTONE TEMPLATE - Both Sides (Same Year) */}
      <div className="timeline-event relative mb-20">
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-start relative">

          {/* LEFT COLUMN */}
          <div className="flex items-start justify-end gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3 justify-end"
            >
              <div className="cursor-pointer group" onClick={() => openLightbox(['/path/to/image.jpg'], 0, 'left')}>
                <img
                  src="/path/to/image.jpg"
                  alt="Year"
                  className="w-full max-w-[200px] h-auto border-2 border-white/60 hover:border-white transition-all duration-300 group-hover:scale-105 object-cover grayscale hover:grayscale-0"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-right max-w-xs"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-sans">YEAR</h3>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-3">
                Left side milestone description.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex items-start justify-start gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left max-w-xs"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#ba924c] mb-2 font-sans">YEAR</h3>
              <p className="text-base md:text-lg leading-relaxed mb-3" style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                Right side milestone description.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <div className="cursor-pointer group" onClick={() => openLightbox(['/path/to/image.jpg'], 0, 'right')}>
                <img
                  src="/path/to/image.jpg"
                  alt="Year"
                  className="w-full max-w-[200px] h-auto border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* CONNECTOR LINES - Both sides */}
          <div className="absolute right-1/2 top-1/2 h-[2px] bg-white/60 transform -translate-y-1/2 pointer-events-none"
            style={{ right: 'calc(50% + 3px)', width: 'calc(50% - 48px - 3px)' }} />
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform -translate-y-1/2 pointer-events-none"
            style={{ left: 'calc(50% + 3px)', width: 'calc(50% - 48px - 3px)' }} />

          {/* CENTER DOT */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-[#0a0a0a] z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

    </div>
  );
};

export default EraTemplate;
