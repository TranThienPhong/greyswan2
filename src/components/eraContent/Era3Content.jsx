import React from 'react';
import { motion } from 'framer-motion';

/**
 * ERA III Custom Content - The Fiat Experiment (1971-1987)
 */
const Era3Content = ({ openLightbox }) => {
  return (
    <div className="relative z-20 py-12 px-4 md:px-12">
      {/* Milestone 1: 1963-2011 - Right side */}
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
              className="text-left max-w-sm mt-[0.4rem]"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#ba924c] font-sans">1963 - 2011</h3>
              <p className="text-base md:text-lg leading-relaxed mb-3" style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                International Harry Schultz Letter <br /> (adds TAS telex alerts in the 1970s)
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era3/1963-2011.jpg', '/era3/1963-2011_ontheleft.jpg'], 0, 'right')}>
                <img
                  src="/era3/1963-2011_ontheleft.jpg"
                  alt="1963-2011"
                  className="absolute w-full max-w-[115px] h-[150px] translate-x-[13.1rem] border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era3/1963-2011.jpg'], 1, 'right')}>
                <img
                  src="/era3/1963-2011.jpg"
                  alt="1963-2011"
                  className="absolute w-full  max-w-[115px] h-[150px] translate-x-[19.1rem] border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
            </motion.div>
          </div>

          {/* Custom Connector Line */}
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform translate-y-[3.55rem] pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(35% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 translate-y-[4.8rem] w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

      {/* Milestone 2: 1971 - Left side */}
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
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era3/1971.avif'], 0, 'left')}>
                <img
                  src="/era3/1971.avif"
                  alt="1971"
                  className="absolute w-full max-w-[350px] h-auto -translate-x-[26rem] -translate-y-[2.8rem] border-2 border-white/60 hover:border-white transition-all duration-300 group-hover:scale-105 object-cover grayscale hover:grayscale-0 z-50"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-right max-w-xs mt-20"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white font-sans mt-[2rem]">1971</h3>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-3">
                Nixon closes the 'gold window'<br />(end of Bretton Woods)
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Empty */}
          <div></div>

          {/* Custom Connector Line */}
          <div className="absolute right-1/2 top-1/2 h-[2px] bg-white/60 transform translate-y-[6.8rem] pointer-events-none z-0"
            style={{ right: 'calc(50% + 3px)', width: 'calc(30% - 48px - 3px)' }} />

          {/* Right vertical line - connects top and bottom at the right edge (near center) */}
          <div className="absolute right-1/2 top-1/2 w-[2px] bg-white/60 transform -translate-x-[30.6rem] translate-y-[4.9rem] pointer-events-none z-0"
            style={{ right: 'calc(50% + 3px)', height: '2rem' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 translate-y-[11.4rem] w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

      {/* Milestone 3: 1974-2007 - Right side */}
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
              className="text-left max-w-xl -mt-[5rem]"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#ba924c] font-sans">1974-2007</h3>
              <p className="text-base md:text-lg leading-relaxed mb-3" style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                Richebächer Letter legacy; paid <br />podcasts/Substack/YouTube become acquisition + product.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era3/1974-2007.jpg'], 0, 'right')}>
                <img
                  src="/era3/1974-2007.jpg"
                  alt="1974-2007"
                  className="absolute w-full max-w-[210px] h-[265px] -translate-x-[0rem] -translate-y-[19.4rem] border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover overflow-hidden z-50"
                />
              </div>
            </motion.div>
          </div>

          {/* Custom Connector Line */}
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform translate-y-[0.8rem] pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(35.05% - 48px - 3px)' }} />

          {/* Right vertical line - connects top and bottom at the right edge (near center) */}
          <div className="absolute left-1/2 top-1/2 w-[2px] bg-[#ba924c]/60 transform translate-x-[36.3rem] -translate-y-[5.05rem] pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', height: '6rem' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 -translate-y-[0.6rem] w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

      {/* Milestone 4: Late 1970s - Left side */}
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
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era3/late_1970s.jpg'], 0, 'left')}>
                <img
                  src="/era3/late_1970s.jpg"
                  alt="Late 1970s"
                  className="absolute w-full max-w-[300px] h-auto -translate-x-[33rem] -translate-y-[6rem] border-2 border-white/60 hover:border-white transition-all duration-300 group-hover:scale-105 object-cover grayscale hover:grayscale-0 z-50"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-right max-w-xs mt-[1rem]"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white font-sans">Late-1970s</h3>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-3">
                Stagflation
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Empty */}
          <div></div>

          {/* Custom Connector Line */}
          <div className="absolute right-1/2 top-1/2 h-[2px] bg-white/60 transform translate-y-[3rem] pointer-events-none z-0"
            style={{ right: 'calc(50% + 3px)', width: 'calc(30% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-5 h-5 translate-y-[3.7rem] rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

      {/* Milestone 5: 1979 - Right side */}
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
              className="text-left max-w-md -mt-[9rem]"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#ba924c] font-sans">1979</h3>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                - Doug Casey begins Crisis Investing; <br />- Agora flagship International Living launches.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era3/1979.jpg', '/era3/1979_book.jpg'], 0, 'right')}>
                <img
                  src="/era3/1979.jpg"
                  alt="1979-1"
                  className="absolute w-full max-w-[200px] h-auto translate-x-[11.5rem] -translate-y-[16.5rem] border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era3/1979.jpg', '/era3/1979_book.jpg'], 1, 'right')}>
                <img
                  src="/era3/1979_book.jpg"
                  alt="1979-2"
                  className="absolute w-full max-w-[124px] h-[9.5rem] translate-x-[23.2rem] -translate-y-[16.5rem] border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-fill z-50"
                />
              </div>

              {/*Books*/}
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era3/1979_book_1.jpg', '/era3/1979_book_2.jpg', '/era3/1979_book_3.jpg'], 0, 'right')}>
                <img
                  src="/era3/1979_book_1.jpg"
                  alt="1979-2"
                  className="absolute w-full max-w-[108.5px] h-auto translate-x-[10rem] -translate-y-[6rem] border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>

              <div className="cursor-pointer group" onClick={() => openLightbox(['/era3/1979_book_1.jpg', '/era3/1979_book_2.jpg', '/era3/1979_book_3.jpg'], 2, 'right')}>
                <img
                  src="/era3/1979_book_2.jpg"
                  alt="1979-2"
                  className="absolute w-full max-w-[108.5px] h-auto translate-x-[16rem] -translate-y-[6rem] border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>

              <div className="cursor-pointer group" onClick={() => openLightbox(['/era3/1979_book_1.jpg', '/era3/1979_book_2.jpg', '/era3/1979_book_3.jpg'], 3, 'right')}>
                <img
                  src="/era3/1979_book_3.jpg"
                  alt="1979-2"
                  className="absolute w-full max-w-[108.5px] h-[8.64rem] translate-x-[22rem] -translate-y-[6rem] border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
            </motion.div>
          </div>

          {/* Custom Connector Line */}
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform -translate-y-[2.6rem] pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(32% - 48px - 3px)' }} />

          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform translate-x-[33rem] -translate-y-[1.5rem] pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(8% - 48px - 3px)' }} />

          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform translate-x-[33rem] -translate-y-[9.2rem] pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(8% - 48px - 3px)' }} />


          {/* Right vertical line - connects top and bottom at the right edge (near center) */}
          <div className="absolute left-1/2 top-1/2 w-[2px] bg-[#ba924c]/60 transform translate-x-[33rem] -translate-y-[9.08rem] pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', height: '7.6rem' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 -translate-y-[4.6rem] w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

      {/* Milestone 6: 1980 - Right side */}
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
              className="text-left max-w-sm -mt-[5rem]"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#ba924c] font-sans">1980</h3>
              <p className="text-base md:text-lg leading-relaxed mb-3" style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                Hulbert Financial Digest
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era3/1980.JPG'], 0, 'right')}>
                <img
                  src="/era3/1980.JPG"
                  alt="1980"
                  className="absolute w-full max-w-[100px] h-[79px] translate-x-[0.6rem] -translate-y-[5.5rem] border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover  z-50"
                />
              </div>
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era3/1980.JPG', '/era3/1980_left.png'], 1, 'right')}>
                <img
                  src="/era3/1980_left.png"
                  alt="1980"
                  className="absolute w-full max-w-[270px] h-[80px] translate-x-[4.5rem] -translate-y-[5.5rem] border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-fill object-top z-50"
                />
              </div>
            </motion.div>
          </div>

          {/* Custom Connector Line */}
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform -translate-y-[0.6rem] pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(36.1% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 -translate-y-[2.6rem] w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

      {/* Milestone 7: 1983 - Right side */}
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
              className="text-left max-w-sm -mt-[2rem]"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#ba924c] font-sans">1983</h3>
              <p className="text-base md:text-lg leading-relaxed mb-3" style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                Grant's Interest Rate Observer debuts
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era3/1983_1.jfif', '/era3/1983_2.jpg'], 0, 'right')}>
                <img
                  src="/era3/1983_1.jfif"
                  alt="1983-1"
                  className="absolute w-full max-w-[125px] translate-x-[6.5rem] -translate-y-[4.5rem] h-auto border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era3/1983_1.jfif', '/era3/1983_2.jpg'], 1, 'right')}>
                <img
                  src="/era3/1983_2.jpg"
                  alt="1983-2"
                  className="absolute w-full max-w-[275px] translate-x-[13.58rem] -translate-y-[4.5rem] h-[11.3rem] border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
            </motion.div>
          </div>

          {/* Custom Connector Line */}
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform translate-y-[1.3rem] pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(35% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 translate-y-[0.5rem] w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

      {/* Milestone 8: 1984 - Right side */}
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
              className="text-left max-w-lg"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#ba924c] font-sans">1984</h3>
              <p className="text-base md:text-lg leading-relaxed mb-3" style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                Strategic Investment (Davidson & Rees-Mogg) launches.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era3/1984_1.jpg', '/era3/1984_2.webp'], 0, 'right')}>
                <img
                  src="/era3/1984_1.jpg"
                  alt="1984-1"
                  className="absolute w-full max-w-[200px] h-auto border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era3/1984_1.jpg', '/era3/1984_2.webp'], 1, 'right')}>
                <img
                  src="/era3/1984_2.webp"
                  alt="1984-2"
                  className="absolute w-full max-w-[200px] h-auto border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
            </motion.div>
          </div>

          {/* Custom Connector Line */}
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform translate-y-1/2 pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(50% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

      {/* Milestone 9: 1985 - Left side */}
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
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era3/1985_1.jpg', '/era3/1985_2.jpg', '/era3/1985_3.jpg'], 0, 'left')}>
                <img
                  src="/era3/1985_1.jpg"
                  alt="1985-1"
                  className="w-full max-w-[200px] h-auto border-2 border-white/60 hover:border-white transition-all duration-300 group-hover:scale-105 object-cover grayscale hover:grayscale-0 z-50"
                />
              </div>
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era3/1985_1.jpg', '/era3/1985_2.jpg', '/era3/1985_3.jpg'], 1, 'left')}>
                <img
                  src="/era3/1985_2.jpg"
                  alt="1985-2"
                  className="w-full max-w-[200px] h-auto border-2 border-white/60 hover:border-white transition-all duration-300 group-hover:scale-105 object-cover grayscale hover:grayscale-0 z-50"
                />
              </div>
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era3/1985_1.jpg', '/era3/1985_2.jpg', '/era3/1985_3.jpg'], 2, 'left')}>
                <img
                  src="/era3/1985_3.jpg"
                  alt="1985-3"
                  className="w-full max-w-[200px] h-auto border-2 border-white/60 hover:border-white transition-all duration-300 group-hover:scale-105 object-cover grayscale hover:grayscale-0 z-50"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-right max-w-xs"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white font-sans">1985</h3>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-3">
                Lowe v. SEC affirms the publisher's exemption; the financial newsletter industry gets real.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Empty */}
          <div></div>

          {/* Custom Connector Line */}
          <div className="absolute right-1/2 top-1/2 h-[2px] bg-white/60 transform -translate-y-1/2 pointer-events-none z-0"
            style={{ right: 'calc(50% + 3px)', width: 'calc(50% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>

      {/* Milestone 10: 1987 - Both sides (same year) */}
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
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era3/1987.avif'], 0, 'left')}>
                <img
                  src="/era3/1987.avif"
                  alt="1987"
                  className="w-full max-w-[200px] h-auto border-2 border-white/60 hover:border-white transition-all duration-300 group-hover:scale-105 object-cover grayscale hover:grayscale-0 z-50"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-right max-w-xs"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white font-sans">1987</h3>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-3">
                Black Monday (Dow -22.6%)
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
              <h3 className="text-xl md:text-2xl font-bold text-[#ba924c] font-sans">1987-97</h3>
              <p className="text-base md:text-lg leading-relaxed mb-3" style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                Blood in the Streets (1987); The Great Reckoning (1991/93); The Sovereign Individual (1997)
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era3/1987-97_1.jpg', '/era3/1987-97_2.jpg', '/era3/1987-97_3.jpg'], 0, 'right')}>
                <img
                  src="/era3/1987-97_1.jpg"
                  alt="1987-97-1"
                  className="w-full max-w-[200px] h-auto border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era3/1987-97_1.jpg', '/era3/1987-97_2.jpg', '/era3/1987-97_3.jpg'], 1, 'right')}>
                <img
                  src="/era3/1987-97_2.jpg"
                  alt="1987-97-2"
                  className="w-full max-w-[200px] h-auto border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era3/1987-97_1.jpg', '/era3/1987-97_2.jpg', '/era3/1987-97_3.jpg'], 2, 'right')}>
                <img
                  src="/era3/1987-97_3.jpg"
                  alt="1987-97-3"
                  className="w-full max-w-[200px] h-auto border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
            </motion.div>
          </div>

          {/* Custom Connector Lines - Both sides */}
          <div className="absolute right-1/2 top-1/2 h-[2px] bg-white/60 transform -translate-y-1/2 pointer-events-none z-0"
            style={{ right: 'calc(50% + 3px)', width: 'calc(50% - 48px - 3px)' }} />
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform -translate-y-1/2 pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(50% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-5 h-5 rounded-full z-10"
            style={{ background: 'linear-gradient(90deg, white 50%, #ba924c 50%)' }} />
        </div>
      </div>
    </div>
  );
};

export default Era3Content;
