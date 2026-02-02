import React from 'react';
import { motion } from 'framer-motion';

/**
 * ERA I Custom Content
 * Customize grid layout, connector lines, dots, and image positioning for each milestone
 */
const Era1Content = ({ openLightbox }) => {
  return (
    <div className="relative z-20 py-12 px-4 md:px-12">
      {/* Milestone 1: 1776 - Right side */}
      <div className="timeline-event relative mb-20">
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-start relative">
          {/* LEFT COLUMN - Empty */}
          <div></div>

          {/* RIGHT COLUMN */}
          <div className="flex items-start justify-start gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left max-w-sm"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#ba924c] font-sans">1776</h3>
              <p className="text-base md:text-lg leading-relaxed mb-3" style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                Paine's Common Sense ignites a mass pamphleteering movement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era1/1776.jpg'], 0, 'right')}>
                <img
                  src="/era1/1776.jpg"
                  alt="1776"
                  className="absolute w-full max-w-[250px] h-[275px] translate-x-[5.2rem] border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 z-50 object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Custom Connector Line - Adjust width, position as needed */}
          <div className="absolute left-1/2 top-[6.6rem] h-[2px] bg-[#ba924c]/60 transform -translate-y-1/2 pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(35% - 48px - 3px)' }} />

          {/* Custom Center Dot - Adjust size, position as needed */}
          <div className="absolute left-1/2 top-24 transform -translate-x-1/2 w-5 h-5 rounded-full border-1 border-[#0a0a0a] z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

      {/* Milestone 2: 1792 - Left side */}
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
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era1/1792-buttonwood-mural.png'], 0, 'left')}>
                <img
                  src="/era1/1792-buttonwood-mural.png"
                  alt="1792"
                  className="absolute w-full max-w-[300px] -top-[6rem] h-auto border-2 border-white/60 hover:border-white -translate-x-[20rem] transition-all duration-300 group-hover:scale-105 object-cover grayscale hover:grayscale-0 z-50"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-right max-w-xs"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white font-sans">1792</h3>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-3">
                Buttonwood Agreement; proto-NYSE
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Empty */}
          <div></div>

          {/* Custom Connector Line for Left */}
          <div className="absolute right-1/2 top-[4.8rem] h-[2px] bg-white/60 transform -translate-y-1/2 pointer-events-none z-0"
            style={{ right: 'calc(50% + 3px)', width: 'calc(35% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-[4.2rem] transform -translate-x-1/2 w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

      {/* Milestone 3: 1907 - Both sides (same year) */}
      <div className="timeline-event relative mb-20">
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-start relative">
          {/* LEFT COLUMN */}
          <div className="flex items-start justify-end gap-6 pt-[10.5rem]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3 justify-end"
            >
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era1/1907-left.jpg'], 0, 'left')}>
                <img
                  src="/era1/1907-left.jpg"
                  alt="1907"
                  className="absolute w-full -translate-y-[8rem] -translate-x-[17rem] max-w-[250px] h-[250px] border-2 border-white/60 hover:border-white transition-all duration-300 group-hover:scale-105 scale-110 object-fill grayscale hover:grayscale-0 z-50"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-right max-w-[22rem]"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white font-sans">1907</h3>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-3">
                Panic of 1907 exposes banking fragility; reforms gather steam.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex items-start justify-start gap-6 pt-[12rem]">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left max-w-md"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#ba924c] font-sans">1907</h3>
              <p className="text-base md:text-lg leading-relaxed mb-3" style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                Wyckoff launches The Magazine of Wall Street.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era1/1907_-right_Wyckoff.jpeg', '/era1/1907_right_WallMagazine.jpg'], 0, 'right')}>
                <img
                  src="/era1/1907_-right_Wyckoff.jpeg"
                  alt="1907-1"
                  className="absolute w-full max-w-[200px] -translate-y-[8.8rem] translate-x-[4rem] h-auto border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era1/1907_-right_Wyckoff.jpeg', '/era1/1907_right_WallMagazine.jpg'], 1, 'right')}>
                <img
                  src="/era1/1907_right_WallMagazine.jpg"
                  alt="1907-2"
                  className="absolute w-full max-w-[200px] -translate-y-[8.8rem] translate-x-[14rem] h-[15.6rem] border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
            </motion.div>
          </div>

          {/* Custom Connector Lines - Both sides */}
          <div className="absolute right-1/2 top-1/2 h-[2px] bg-white/60 transform translate-y-[9.2rem] pointer-events-none z-0"
            style={{ right: 'calc(50% + 3px)', width: 'calc(35% - 48px - 3px)' }} />
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform translate-y-[9.2rem] pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(35% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-[0rem] translate-y-[17rem] transform -translate-x-1/2 w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>
    </div>
  );
};

export default Era1Content;
