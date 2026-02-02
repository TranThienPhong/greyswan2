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
              className="text-left max-w-sm"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#ba924c] font-sans">1963-2011</h3>
              <p className="text-base md:text-lg leading-relaxed mb-3" style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                International Harry Schultz Letter (adds TAS telex alerts in the 1970s)
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era3/1963-2011.jpg'], 0, 'right')}>
                <img
                  src="/era3/1963-2011.jpg"
                  alt="1963-2011"
                  className="w-full max-w-[200px] h-auto border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
            </motion.div>
          </div>

          {/* Custom Connector Line */}
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform -translate-y-1/2 pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(50% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-5 h-5 rounded-full z-10"
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
              <h3 className="text-xl md:text-2xl font-bold text-white font-sans">1971</h3>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-3">
                Nixon closes the 'gold window' (end of Bretton Woods)
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
              className="text-left max-w-sm"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#ba924c] font-sans">1974-2007</h3>
              <p className="text-base md:text-lg leading-relaxed mb-3" style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                Trendletter Letter legacy; paid podcasts/Substack/YouTube become 'acquisition + product'
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
                  className="w-full max-w-[200px] h-auto border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
            </motion.div>
          </div>

          {/* Custom Connector Line */}
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform -translate-y-1/2 pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(50% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-5 h-5 rounded-full z-10"
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
              <h3 className="text-xl md:text-2xl font-bold text-white font-sans">Late 1970s</h3>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-3">
                Stagflation
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
              className="text-left max-w-sm"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#ba924c] font-sans">1979</h3>
              <p className="text-base md:text-lg leading-relaxed mb-3" style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                Doug Casey begins Crisis Investing; Agora flagship International Living launches.
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
                  className="w-full max-w-[200px] h-auto border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era3/1979.jpg', '/era3/1979_book.jpg'], 1, 'right')}>
                <img
                  src="/era3/1979_book.jpg"
                  alt="1979-2"
                  className="w-full max-w-[200px] h-auto border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
            </motion.div>
          </div>

          {/* Custom Connector Line */}
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform -translate-y-1/2 pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(50% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-5 h-5 rounded-full z-10"
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
              className="text-left max-w-sm"
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
                  className="w-full max-w-[200px] h-auto border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
            </motion.div>
          </div>

          {/* Custom Connector Line */}
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform -translate-y-1/2 pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(50% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-5 h-5 rounded-full z-10"
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
              className="text-left max-w-sm"
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
                  className="w-full max-w-[200px] h-auto border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era3/1983_1.jfif', '/era3/1983_2.jpg'], 1, 'right')}>
                <img
                  src="/era3/1983_2.jpg"
                  alt="1983-2"
                  className="w-full max-w-[200px] h-auto border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
            </motion.div>
          </div>

          {/* Custom Connector Line */}
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform -translate-y-1/2 pointer-events-none z-0"
            style={{ left: 'calc(50% + 3px)', width: 'calc(50% - 48px - 3px)' }} />

          {/* Custom Center Dot */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-5 h-5 rounded-full z-10"
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
              className="text-left max-w-sm"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#ba924c] font-sans">1984</h3>
              <p className="text-base md:text-lg leading-relaxed mb-3" style={{ color: 'rgba(186, 146, 76, 0.7)' }}>
                Strategic Investment (Davidson & Rees-Mogg) launches
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
                  className="w-full max-w-[200px] h-auto border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
              <div className="cursor-pointer group" onClick={() => openLightbox(['/era3/1984_1.jpg', '/era3/1984_2.webp'], 1, 'right')}>
                <img
                  src="/era3/1984_2.webp"
                  alt="1984-2"
                  className="w-full max-w-[200px] h-auto border-2 border-[#ba924c]/60 hover:border-[#ba924c] transition-all duration-300 group-hover:scale-105 object-cover z-50"
                />
              </div>
            </motion.div>
          </div>

          {/* Custom Connector Line */}
          <div className="absolute left-1/2 top-1/2 h-[2px] bg-[#ba924c]/60 transform -translate-y-1/2 pointer-events-none z-0"
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
