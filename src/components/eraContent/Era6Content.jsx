import React from 'react';
import { motion } from 'framer-motion';

/**
 * ERA VI Custom Content - The Grey Swan Age (2020-Present)
 */
const Era6Content = ({ openLightbox }) => {
  return (
    <div className="relative z-20 py-12 px-4 md:px-12">
      {/* Milestone 1: 2020 - Both sides */}
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
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era6/2020.jpg'], 0, 'left')}>
                <img
                  src="/era6/2020.jpg"
                  alt="2020"
                  className="absolute w-full max-w-[235px] -translate-x-[38.6rem] h-auto border-2 border-white/60 hover:border-white transition-all duration-300 group-hover:scale-105 object-cover grayscale hover:grayscale-0 z-50"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-right max-w-xs mt-8"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white font-sans">2020</h3>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-3">
                Covid Pandemic shock
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex items-start justify-start gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left max-w-xs mt-8"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#ba924c] font-sans">2020-2024</h3>
              <p className="text-base md:text-lg leading-relaxed mb-3" style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                The Wiggin Sessions
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era6/2020-2024.jfif'], 0, 'right')}>
                <img
                  src="/era6/2020-2024.jfif"
                  alt="2020-2024"
                  className="absolute w-full max-w-[225px] h-auto translate-x-[18rem] translate-y-[2rem] border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
            </motion.div>
          </div>

          {/* Custom Connector Lines - Both sides */}
          <div className="absolute right-1/2 top-1/2 h-[2px] bg-white/60 transform translate-y-[3.4rem] pointer-events-none z-0"
            style={{ right: 'calc(50% + 3px)', width: 'calc(40% - 48px - 3px)' }} />
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform translate-y-[3.4rem] pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(35% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform translate-y-[4.6rem] -translate-x-1/2 w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

      {/* Milestone 2: 2022 - Left side */}
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
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era6/2022.webp'], 0, 'left')}>
                <img
                  src="/era6/2022.webp"
                  alt="2022"
                  className="absolute w-full max-w-[300px] h-[150px] border-2 border-white/60 -translate-x-[29.5rem] -translate-y-[1rem] hover:border-white transition-all duration-300 group-hover:scale-105 object-fill grayscale hover:grayscale-0 z-50"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-right max-w-sm mt-6"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white font-sans">2022</h3>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-3">
                Inflation peaks near 9.1% (40-year high)
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Empty */}
          <div></div>

          {/* Custom Connector Line */}
          <div className="absolute right-1/2 top-1/2 h-[2px] bg-white/60 transform translate-y-[2.9rem] pointer-events-none z-0"
            style={{ right: 'calc(50% + 3px)', width: 'calc(35% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 translate-y-[3.8rem] w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

      {/* Milestone 3: 2025 - Both sides */}
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
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era6/2025_left.jpg'], 0, 'left')}>
                <img
                  src="/era6/2025_left.jpg"
                  alt="2025 left"
                  className="absolute w-full max-w-[275px] h-[300px] -translate-x-[16rem] border-2 border-white/60 hover:border-white transition-all duration-300 group-hover:scale-105 object-fill grayscale hover:grayscale-0 z-50"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-right max-w-xl mt-16"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white font-sans">2025</h3>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-3">
                AI data-center buildout/ bubble historic highs in the stock market; <br /><span className="text-white italic font-semibold">gold, silver and bitcoin reach historic highs</span>
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex items-start justify-start gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left max-w-lg mt-20"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#ba924c] font-sans mt-3">2025</h3>
              <p className="text-base md:text-lg leading-relaxed mb-3" style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                Grey Swan Investment Fraternity founded in Mt. Vernon.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era6/2025_right.png'], 0, 'right')}>
                <img
                  src="/era6/2025_right.png"
                  alt="2025 right"
                  className="absolute w-full max-w-[300px] h-[300px] -translate-x-[1rem] border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
            </motion.div>
          </div>

          {/* Custom Connector Lines - Both sides */}
          <div className="absolute right-1/2 top-1/2 h-[2px] bg-white/60 transform translate-y-[5rem] pointer-events-none z-0"
            style={{ right: 'calc(50% + 3px)', width: 'calc(40% - 48px - 3px)' }} />
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform translate-y-[5rem] pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(40% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 translate-y-[8rem] w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>
    </div>
  );
};

export default Era6Content;
