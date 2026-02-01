import React from 'react';

const Header = () => {
  return (
    <header className="bg-rich-black border-b border-muted-gold/20">
      {/* Top Section - Logo and Title */}
      <div className="py-8 px-8 md:px-8 border-b border-muted-gold/20">
        <div className="relative max-w-7xl mx-auto">
          {/* Logo - Positioned on Left */}
          <div className="absolute -left-[10rem] top-1/2 -translate-y-1/2 ">
            <img
              src="/era1/logo-gsi.png"
              alt="Grey Swan Investment Fraternity"
              className="h-20 md:h-24"
            />
          </div>

          {/* Title - Truly Centered */}
          <div className="text-center">
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-1">
              Grey Swan Investment Fraternity
            </h1>
            <p className="text-muted-gold text-lg md:text-xl font-light tracking-wide">
              Tradition. Legacy. Insight.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section - Split Headers */}
      <div className="grid grid-cols-2">
        {/* Left: Economy & Policy */}
        <div className="py-4 md:py-6 px-4 bg-white text-rich-black border-r border-muted-gold/20">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-center">
            Economy & Policy
          </h2>
        </div>

        {/* Right: Newsletters & Industry */}
        <div className="py-4 md:py-6 px-4 bg-[#ba924c] text-rich-black">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-center">
            Newsletters & Industry
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
