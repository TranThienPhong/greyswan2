import React from 'react';
import { motion } from 'framer-motion';

/**
 * ERA IV Custom Content - Globalization & Excess (1990-2008)
 */
const Era4Content = ({ openLightbox }) => {
  return (
    <div className="relative z-20 py-12 px-4 md:px-12">
      {/* Milestone 1: 1990s - Left side */}
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
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era4/1990s.webp', '/era4/1990s_top.webp'], 0, 'left')}>
                <img
                  src="/era4/1990s_top.webp"
                  alt="1990s"
                  className="absolute w-full max-w-[225px] h-auto -translate-x-[16rem] translate-y-[1rem] border-2 border-white/60 hover:border-white transition-all duration-300 group-hover:scale-105 object-cover grayscale hover:grayscale-0 z-50"
                />
              </div>
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era4/1990s.webp'], 1, 'left')}>
                <img
                  src="/era4/1990s.webp"
                  alt="1990s"
                  className="absolute w-full max-w-[226px] h-auto -translate-x-[16.8rem] translate-y-[9rem] border-2 border-white/60 hover:border-white transition-all duration-300 group-hover:scale-105 object-cover grayscale hover:grayscale-0 z-50"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-right max-w-xl mt-4"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white font-sans">1990s</h3>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-3">
                <span className='text-white/60 font-bold'>Globalization</span> and tech supercycle sets up the Dot-Com bust
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Empty */}
          <div></div>

          {/* Custom Connector Line */}
          <div className="absolute right-1/2 top-1/2 h-[2px] bg-white/60 transform translate-y-[3.3rem] pointer-events-none z-0"
            style={{ right: 'calc(50% + 3px)', width: 'calc(40% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 translate-y-[4rem] w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

      {/* Milestone 2: Early-mid 90s - Right side */}
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
              className="absolute text-left max-w-md -mt-28"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#ba924c] font-sans">Early-mid '90s</h3>
              <p className="text-base md:text-lg leading-relaxed mb-3" style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                Plague of the Black Debt Mark Strategic Investment
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era4/early-mid-90s.jpg'], 0, 'right')}>
                <img
                  src="/era4/early-mid-90s.jpg"
                  alt="Early-mid 90s"
                  className="absolute w-full max-w-[150px] h-[195px] border-2 translate-x-[32rem] -translate-y-[10rem] border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-fill z-50"
                />
              </div>
            </motion.div>
          </div>

          {/* Custom Connector Line */}
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform -translate-y-[2.1rem] pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(35% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-5 h-5 -translate-y-[4.1rem] rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

      {/* Milestone 3: 1994 - Right side */}
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
              className="absolute text-left max-w-[32rem] -mt-[4rem]"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#ba924c] font-sans">1994</h3>
              <p className="text-base md:text-lg leading-relaxed mb-3" style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                Agora in Mount Vernon, (Manburg Mansion: 14 W. Mount Vernon Pl.) overlooking Baltimore's original Washington Monument. Later home to the Grey Swan Fraternity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era4/1994_1.png', '/era4/1994_2.jpg'], 0, 'right')}>
                <img
                  src="/era4/1994_1.png"
                  alt="1994-1"
                  className="absolute w-full max-w-[200px] h-auto translate-x-[43rem] -translate-y-[4rem] border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era4/1994_1.png', '/era4/1994_2.jpg'], 1, 'right')}>
                <img
                  src="/era4/1994_2.jpg"
                  alt="1994-2"
                  className="absolute w-full max-w-[203px] h-[200px] translate-x-[42.2rem] translate-y-[0.6rem] border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
            </motion.div>
          </div>

          {/* Custom Connector Line */}
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform translate-y-[4.3rem] pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(50% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 translate-y-[2.25rem] w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

      {/* Milestone 4: 1995 - Right side */}
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
              className="text-left max-w-xl mt-[2.2rem] mb-[16rem]"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#ba924c] font-sans">1995</h3>
              <p className="text-base md:text-lg leading-relaxed mb-3" style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                Agora launches a U.S. edition of The Fleet Street Letter.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era4/1995.png'], 0, 'right')}>
                <img
                  src="/era4/1995.webp"
                  alt="1995"
                  className="absolute w-full max-w-[362px] h-[auto] translate-x-[2rem] translate-y-[10.8rem] border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-top z-50"
                />
              </div>
            </motion.div>
          </div>

          {/* Custom Connector Line */}
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform -translate-y-[3.9rem] pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(35% - 48px - 3px)' }} />
          {/* Right vertical line - connects top and bottom at the right edge (near center) */}
          <div className="absolute left-1/2 top-1/2 w-[2px] bg-[#ba924c]/60 transform translate-x-[36.3rem] -translate-y-[3.85rem] pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', height: '4rem' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 translate-y-[5.4rem] w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

      {/* Milestone 5: 1998 - Both sides */}
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
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era4/1998_LTCM.webp'], 0, 'left')}>
                <img
                  src="/era4/1998_LTCM.webp"
                  alt="1998 LTCM"
                  className="absolute w-full max-w-[600px] h-auto border-2 -translate-x-[40rem] -translate-y-[16rem] border-white/60 hover:border-white transition-all duration-300 group-hover:scale-105 object-cover grayscale hover:grayscale-0 z-50"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-right max-w-xs"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white font-sans">1998</h3>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-3">
                <span className='text-white/60 font-bold'>Collapse of LTCM</span>
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex items-start justify-start gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left max-w-md"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#ba924c] font-sans">1998</h3>
              <p className="text-base md:text-lg leading-relaxed mb-3" style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                The Sovereign Society founded Delray Beach, FL.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era4/1998_right.jfif'], 0, 'right')}>
                <img
                  src="/era4/1998_right.jfif"
                  alt="1998"
                  className="absolute w-full max-w-[200px] h-auto translate-x-[5.2rem] -translate-y-[10rem] border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
            </motion.div>
          </div>

          {/* Custom Connector Lines - Both sides */}
          <div className="absolute right-1/2 top-1/2 h-[2px] bg-white/60 transform translate-y-[2.3rem] pointer-events-none z-0"
            style={{ right: 'calc(50% + 3px)', width: 'calc(35% - 48px - 3px)' }} />
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform translate-y-[2.3rem] pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(35% - 48px - 3px)' }} />

          {/* Right vertical line - connects top and bottom at the right edge (near center) */}
          <div className="absolute left-1/2 top-1/2 w-[2px] bg-[#ba924c]/60 transform translate-x-[36.3rem] -translate-y-[1.55rem] pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', height: '4rem' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 translate-y-[2.55rem] w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

      {/* Milestone 6: 1999-2019 - Right side */}
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
              className="text-left max-w-xl mb-[8rem] -mt-[1.8rem]"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#ba924c] font-sans">1999-2019</h3>
              <p className="text-base md:text-lg leading-relaxed mb-3" style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                Agora Financial Investment Symposium (Vancouver, BC)
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3 "
            >
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era4/1999-2019.jfif'], 0, 'right')}>
                <img
                  src="/era4/1999-2019.jfif"
                  alt="1999-2019"
                  className="absolute w-full max-w-[250px] h-auto translate-x-[7rem] -translate-y-[4rem] border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
            </motion.div>
          </div>

          {/* Custom Connector Line */}
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform -translate-y-[2.4rem] pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(40% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 translate-y-[0.9rem] w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

      {/* Milestone 7: 2003-2005 Book Trilogy - Right side */}
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
              className="text-left max-w-xl space-y-4 mt-[1rem]"
            >
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#ba924c] font-sans">2003 → 2011 → 2022</h3>
                <p className="text-base md:text-lg leading-relaxed mb-[3.6rem]" style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                  Bonner & Wiggin: Financial Reckoning Day (incl. 3rd ed. 2022)
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#ba924c] font-sans">2004 → 2009 → 2023</h3>
                <p className="text-base md:text-lg leading-relaxed mb-[3.6rem]" style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                  Addison Wiggin Demise of the Dollar (incl. 3rd ed. 2023)
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#ba924c] font-sans">2005 → 2009 → 2024</h3>
                <p className="text-base md:text-lg leading-relaxed mb-[3.6rem]" style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                  Empire of Debt series (incl. Empire of Debt, 3rd ed. 2024)
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex"
            >
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era4/2003_1.png', '/era4/2003_2.png', '/era4/2003_3.png'], 0, 'right')}>
                <img
                  src="/era4/2003_1.png"
                  alt="Book 1"
                  className="absolute w-full max-w-[125px] h-[200px] translate-y-[3.4rem] border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era4/2003_1.png', '/era4/2003_2.png', '/era4/2003_3.png'], 1, 'right')}>
                <img
                  src="/era4/2003_2.png"
                  alt="Book 2"
                  className="absolute w-full max-w-[125px] h-[200px] translate-y-[3.4rem] translate-x-[8rem] border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era4/2003_1.png', '/era4/2003_2.png', '/era4/2003_3.png'], 2, 'right')}>
                <img
                  src="/era4/2003_3.png"
                  alt="Book 3"
                  className="absolute w-full max-w-[125px] h-[200px] translate-y-[3.4rem] translate-x-[16rem] border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
            </motion.div>
          </div>

          {/* Custom Connector Line */}
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform -translate-y-[12.4rem] pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(33.5% - 48px - 3px)' }} />
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform -translate-y-[5.3rem] pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(33.5% - 48px - 3px)' }} />
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform translate-y-[2rem] pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(33.5% - 48px - 3px)' }} />
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform translate-y-[9.6rem] pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(33.5% - 48px - 3px)' }} />

          {/* Right vertical line - connects top and bottom at the right edge (near center) */}
          <div className="absolute left-1/2 top-1/2 w-[2px] bg-[#ba924c]/60 transform translate-x-[34.6rem] -translate-y-[12.35rem] pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', height: '22rem' }} />
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform translate-x-[34.7rem] -translate-y-[1.6rem] pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(4.5% - 48px - 3px)' }} />


          {/* Custom Center Dot */}

        </div>

      </div>
    </div>
  );
};

export default Era4Content;
