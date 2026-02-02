import React from 'react';
import { motion } from 'framer-motion';

/**
 * ERA II Custom Content - The Managed World (1913-1944)
 */
const Era2Content = ({ openLightbox }) => {
  return (
    <div className="relative z-20 py-12 px-4 md:px-12">
      {/* Milestone 1: 1913 - Left side */}
      <div className="timeline-event relative mb-20">
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-start relative">
          {/* LEFT COLUMN */}
          <div className="flex items-start justify-end gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute grid grid-cols-1 justify-end mr-[30rem] z-50"
            >
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era1/1913_under.jpg', '/era1/1913.jpg'], 1, 'left')}>
                <img
                  src="/era1/1913.jpg"
                  alt="1913-2"
                  className="w-full max-w-[250px] h-[128px] border-2 order-1 border-white/60 hover:border-white transition-all duration-300 group-hover:scale-105 object-top grayscale hover:grayscale-0 z-50"
                />
              </div>
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era1/1913_under.jpg', '/era1/1913.jpg'], 0, 'left')}>
                <img
                  src="/era1/1913_under.jpg"
                  alt="1913-1"
                  className="w-full max-w-[200px] h-auto border-2 order-2 border-white/60 hover:border-white transition-all duration-300 group-hover:scale-105 object-cover grayscale hover:grayscale-0 z-50"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-right max-w-xs"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white font-sans">1913</h3>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-3">
                The Federal Reserve established; 16th & 17th Amendments (income tax; direct election of Senators).
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Empty */}
          <div></div>

          {/* Custom Connector Line */}
          <div className="absolute right-1/2 top-1/2 h-[2px] bg-white/60 transform translate-y-[4rem] pointer-events-none z-0"
            style={{ right: 'calc(50% + 3px)', width: 'calc(40% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 translate-y-[6rem] w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

      {/* Milestone 2: 1923 - Right side */}
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
              <h3 className="text-xl md:text-2xl font-bold text-[#ba924c] font-sans">1923</h3>
              <p className="text-base md:text-lg leading-relaxed mb-3" style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                The Kiplinger Letter launches
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era2/1923.jfif'], 0, 'right')}>
                <img
                  src="/era2/1923.jfif"
                  alt="1923"
                  className="absolute w-full max-w-[240px] h-[300px] translate-x-[3rem] -translate-y-[8rem] border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-fill z-50"
                />
              </div>
            </motion.div>
          </div>

          {/* Custom Connector Line */}
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform translate-y-[2.4rem] pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(24% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 translate-y-[2.6rem] w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

      {/* Milestone 3: 1931 - Right side */}
      <div className="timeline-event relative mb-20">
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-start relative">
          {/* LEFT COLUMN - Empty */}
          <div></div>

          {/* RIGHT COLUMN */}
          <div className="relative flex items-start justify-start gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left max-w-sm mt-20"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#ba924c] font-sans">1931</h3>
              <p className="text-base md:text-lg leading-relaxed " style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                Value Line founded.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era2/1931_vl_logo.png', '/era2/1931.png'], 0, 'right')}>
                <img
                  src="/era2/1931_vl_logo.png"
                  alt="1931"
                  className="absolute w-full max-w-[225px] h-auto border-2 translate-x-[25.5rem] -translate-y-[9rem] border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era2/1931.png', '/era2/1931_vl_logo.png'], 1, 'right')}>
                <img
                  src="/era2/1931.png"
                  alt="1931"
                  className="absolute w-full max-w-[226px] h-[350px] translate-x-[24.7rem] -translate-y-[4rem] border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
            </motion.div>
          </div>

          {/* Custom Connector Line */}
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform translate-y-[6rem] pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(45% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 translate-y-[8.4rem] w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

      {/* Milestone 4: 1933-34 - Left side */}
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
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era2/1933-1934_bot.avif', '/era2/1933-1934_top.avif'], 0, 'left')}>
                <img
                  src="/era2/1933-1934_bot.avif"
                  alt="1933-34-1"
                  className="absolute w-full max-w-[200px] h-auto -translate-x-[16rem] border-2 border-white/60 hover:border-white transition-all duration-300 group-hover:scale-105 object-cover grayscale hover:grayscale-0 z-50"
                />
              </div>
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era2/1933-1934_bot.avif', '/era2/1933-1934_top.avif'], 1, 'left')}>
                <img
                  src="/era2/1933-1934_top.avif"
                  alt="1933-34-2"
                  className="absolute w-full max-w-[200px] h-auto -translate-x-[16.75rem] -translate-y-[8.4rem] border-2 border-white/60 hover:border-white transition-all duration-300 group-hover:scale-105 object-cover grayscale hover:grayscale-0 z-50"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-right max-w-sm"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white font-sans">1933-34</h3>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-3">
                New Deal 'Alphabet Agencies'; <br /> Securities Exchange Act establishes the <span className='font-bold text-white/80'>SEC</span>
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Empty */}
          <div></div>

          {/* Custom Connector Lines - Rectangle Formation */}
          {/* Top horizontal line */}
          <div className="absolute right-1/2 top-1/2 h-[2px] bg-white/60 transform translate-y-[4.1rem] pointer-events-none z-0"
            style={{ right: 'calc(50% + 3px)', width: 'calc(8% - 48px - 3px)' }} />

          {/* Middle horizontal line */}
          <div className="absolute right-1/2 top-1/2 h-[2px] bg-white/60 transform -translate-x-[6rem] translate-y-[6.1rem] pointer-events-none z-0"
            style={{ right: 'calc(50% + 3px)', width: 'calc(28.6% - 48px - 3px)' }} />

          {/* Bottom horizontal line */}
          <div className="absolute right-1/2 top-1/2 h-[2px] bg-white/60 transform translate-y-[8.1rem] pointer-events-none z-0"
            style={{ right: 'calc(50% + 3px)', width: 'calc(8% - 48px - 3px)' }} />

          {/* Left vertical line - connects top and bottom at the left edge */}
          <div className="absolute right-1/2 top-1/2 w-[2px] bg-white/60 transform translate-y-[4.1rem] pointer-events-none z-0"
            style={{ right: 'calc(50% + 3px + 8% - 48px - 3px)', height: '4.1rem' }} />

          {/* Right vertical line - connects top and bottom at the right edge (near center) */}
          <div className="absolute right-1/2 top-1/2 w-[2px] bg-white/60 transform -translate-x-[35rem] translate-y-[4.1rem] pointer-events-none z-0"
            style={{ right: 'calc(50% + 3px)', height: '2rem' }} />



          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 translate-y-[5.2rem] w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 translate-y-[9.2rem]  w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

      {/* Milestone 5: 1938 - Right side */}
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
              className="text-left max-w-sm mt-12"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#ba924c] font-sans">1938</h3>
              <p className="text-base md:text-lg leading-relaxed mb-3" style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                The Fleet Street Letter founded in London (Patrick Maitland).
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era2/1938.jpg'], 0, 'right')}>
                <img
                  src="/era2/1938.jpg"
                  alt="1938"
                  className="absolute w-full max-w-[275px] h-auto border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
            </motion.div>
          </div>

          {/* Custom Connector Line */}
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform translate-y-[5rem] pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(30% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 translate-y-[7.6rem] w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

      {/* Milestone 6: 1940 - Left side */}
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
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era2/1940.jpg'], 0, 'left')}>
                <img
                  src="/era2/1940.jpg"
                  alt="1940"
                  className="absolute w-full max-w-[300px] h-auto -translate-x-[21rem] -translate-y-[3rem] border-2 border-white/60 hover:border-white transition-all duration-300 group-hover:scale-105 object-cover grayscale hover:grayscale-0 z-50"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-right max-w-md"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white font-sans">1940</h3>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-3">
                Investment Advisers Act: <br /> publisher's exemption for bona fide <br />general-circulation financial publications.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Empty */}
          <div></div>

          {/* Custom Connector Line */}
          <div className="absolute right-1/2 top-1/2 h-[2px] bg-white/60 transform translate-y-[4.2rem] pointer-events-none z-0"
            style={{ right: 'calc(50% + 3px)', width: 'calc(38% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 translate-y-[6.2rem] w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

      {/* Milestone 7: 1944 - Left side */}
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
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era2/1944_1.webp'], 0, 'left')}>
                <img
                  src="/era2/1944_1.webp"
                  alt="1944"
                  className="absolute w-full max-w-[200px] h-auto -translate-x-[18rem] translate-y-[2rem] border-2 border-white/60 hover:border-white transition-all duration-300 group-hover:scale-105 object-cover grayscale hover:grayscale-0 z-50"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-right max-w-xs mt-8"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white font-sans">1944</h3>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-3">
                Bretton Woods exchange rate system for U.S. dollar; IMF/World Bank.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Empty */}
          <div></div>

          {/* Custom Connector Line */}
          <div className="absolute right-1/2 top-1/2 h-[2px] bg-white/60 transform translate-y-[4.2rem] pointer-events-none z-0"
            style={{ right: 'calc(50% + 3px)', width: 'calc(30% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 translate-y-[6.2rem] w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>
    </div>
  );
};

export default Era2Content;
