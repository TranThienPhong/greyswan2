import React from 'react';
import { motion } from 'framer-motion';

/**
 * ERA V Custom Content - The Zero-Rate World (2009-2020)
 */
const Era5Content = ({ openLightbox }) => {
  return (
    <div className="relative z-20 py-12 px-4 md:px-12">
      {/* Milestone 1: 2008-2018 - Left side */}
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
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era5/2008-2018.jpg'], 0, 'left')}>
                <img
                  src="/era5/2008-2018.jpg"
                  alt="2008-2018"
                  className="absolute w-full max-w-[300px] h-auto -translate-x-[31rem] -translate-y-[1rem] border-2 border-white/60 hover:border-white transition-all duration-300 group-hover:scale-105 object-cover grayscale hover:grayscale-0 z-50"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-right max-w-md mt-8"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white font-sans">2008-2018</h3>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-3">
                Global Fiancial Crisis; ZIRP/QE regine.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Empty */}
          <div></div>

          {/* Custom Connector Line */}
          <div className="absolute right-1/2 top-1/2 h-[2px] bg-white/60 transform translate-y-[3.8rem] pointer-events-none z-0"
            style={{ right: 'calc(50% + 3px)', width: 'calc(40% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 translate-y-[5rem]  w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

      {/* Milestone 2: 2008-09 - Left side */}
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
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era5/2008-09.jpg'], 0, 'left')}>
                <img
                  src="/era5/2008-09.jpg"
                  alt="2008-09"
                  className="absolute w-full max-w-[200px] h-[285px] -translate-x-[13.2rem]  border-2 border-white/60 hover:border-white transition-all duration-300 group-hover:scale-105 object-fill grayscale hover:grayscale-0 z-50"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-right max-w-2xl"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white font-sans">2008/09</h3>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-3">
                <span className="text-white/70 font-bold">Satoshi Nakamoto </span> White Paper/Launch of Peer-to-peer Bitcoin, crypto.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Empty */}
          <div></div>

          {/* Custom Connector Line */}
          <div className="absolute right-1/2 top-1/2 h-[2px] bg-white/60 transform translate-y-[2.6rem] pointer-events-none z-0"
            style={{ right: 'calc(50% + 3px)', width: 'calc(40% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 translate-y-[2.8rem] w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

      {/* Milestone 3: 2010s - Left side */}
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
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era5/2010s.jfif'], 0, 'left')}>
                <img
                  src="/era5/2010s.jfif"
                  alt="2010s"
                  className="absolute w-full max-w-[300px] h-auto border-2 -translate-x-[21.5rem] -translate-y-[rem] border-white/60 hover:border-white transition-all duration-300 group-hover:scale-105 object-cover grayscale hover:grayscale-0 z-50"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-right max-w-[14rem] mt-1"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white font-sans">2010s</h3>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-3">
                The post-QFC decade of negative interest rates.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Empty */}
          <div></div>

          {/* Custom Connector Line */}
          <div className="absolute right-1/2 top-1/2 h-[2px] bg-white/60 transform translate-y-[3.8rem] pointer-events-none z-0"
            style={{ right: 'calc(50% + 3px)', width: 'calc(25% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 translate-y-[5rem] w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

      {/* Milestone 4: 2011 - Right side */}
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
              className="text-left max-w-sm -mt-12"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#ba924c] font-sans">2011</h3>
              <p className="text-base md:text-lg leading-relaxed mb-3" style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                End of America – Stansberry & Associates.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era5/2011.jpg'], 0, 'right')}>
                <img
                  src="/era5/2011.jpg"
                  alt="2011"
                  className="absolute w-full max-w-[300px] h-[375px] translate-x-[6rem] -translate-y-[19rem]  border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
            </motion.div>
          </div>

          {/* Custom Connector Line */}
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform translate-y-[0.4rem] pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(35% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 -translate-y-[1rem] w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>
    </div>
  );
};

export default Era5Content;
