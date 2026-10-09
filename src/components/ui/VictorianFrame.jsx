import React from 'react';

/**
 * Ornate Victorian Baroque Gilded Frame
 */
export function GildedFrame({ children, className = '', title, subtitle, size = 'default' }) {
  return (
    <div className={`relative p-3 sm:p-5 bg-gradient-to-br from-[#FAF8F5] via-[#F5EFE6] to-[#ECE5D8] rounded-sm shadow-2xl ${className}`}>
      {/* Outer Gilded Moldings */}
      <div className="absolute inset-0 border-[6px] border-[#B89758] rounded-sm pointer-events-none" />
      <div className="absolute inset-[3px] border-[2px] border-[#D4AF37] rounded-sm pointer-events-none" />
      <div className="absolute inset-[8px] border border-[#6B1124]/30 pointer-events-none" />

      {/* Ornate Corner Flourishes */}
      <div className="absolute top-1 left-1 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37] pointer-events-none flex items-start justify-start">
        <span className="w-1.5 h-1.5 bg-[#6B1124] rounded-full m-0.5" />
      </div>
      <div className="absolute top-1 right-1 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37] pointer-events-none flex items-start justify-end">
        <span className="w-1.5 h-1.5 bg-[#6B1124] rounded-full m-0.5" />
      </div>
      <div className="absolute bottom-1 left-1 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37] pointer-events-none flex items-end justify-start">
        <span className="w-1.5 h-1.5 bg-[#6B1124] rounded-full m-0.5" />
      </div>
      <div className="absolute bottom-1 right-1 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37] pointer-events-none flex items-end justify-end">
        <span className="w-1.5 h-1.5 bg-[#6B1124] rounded-full m-0.5" />
      </div>

      {/* Frame Content */}
      <div className="relative z-10 w-full h-full overflow-hidden">
        {children}
      </div>

      {/* Museum Title Plaque if provided */}
      {title && (
        <div className="mt-3 mx-auto w-fit px-4 py-1.5 bg-gradient-to-r from-[#D4AF37] via-[#F5D061] to-[#B89758] border border-[#8C6D1F] rounded-xs shadow-md text-center">
          <p className="font-cinzel text-xs font-bold text-[#0B192C] tracking-widest uppercase">{title}</p>
          {subtitle && (
            <p className="font-cormorant text-[11px] text-[#4A0A17] italic font-semibold">{subtitle}</p>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Victorian Crimson Lace Frame (Directly inspired by user reference image)
 */
export function CrimsonLaceFrame({ children, className = '', title, subtitle }) {
  return (
    <div className={`relative p-5 sm:p-7 bg-[#FAF8F5] shadow-xl ${className}`}>
      {/* Victorian Lace Outer Scalloped Border */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Intricate Lace Pattern Border */}
        <rect
          x="3"
          y="3"
          width="94"
          height="94"
          rx="2"
          stroke="#6B1124"
          strokeWidth="1.5"
          strokeDasharray="1.2 0.8"
          opacity="0.9"
        />
        <rect
          x="5.5"
          y="5.5"
          width="89"
          height="89"
          rx="1"
          stroke="#8B1832"
          strokeWidth="0.8"
          opacity="0.75"
        />
        {/* Ornate corner lace loops */}
        <circle cx="3" cy="3" r="2.5" fill="#FAF8F5" stroke="#6B1124" strokeWidth="1" />
        <circle cx="97" cy="3" r="2.5" fill="#FAF8F5" stroke="#6B1124" strokeWidth="1" />
        <circle cx="3" cy="97" r="2.5" fill="#FAF8F5" stroke="#6B1124" strokeWidth="1" />
        <circle cx="97" cy="97" r="2.5" fill="#FAF8F5" stroke="#6B1124" strokeWidth="1" />
      </svg>

      {/* Decorative filigree accents */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 px-3 bg-[#FAF8F5] text-[#6B1124] text-[9px] font-cinzel tracking-widest uppercase">
        GALLERY
      </div>

      <div className="relative z-10 w-full h-full">
        {children}
      </div>

      {title && (
        <div className="mt-3 text-center">
          <p className="font-playfair text-sm font-bold text-[#6B1124] tracking-wider">{title}</p>
          {subtitle && <p className="font-cormorant text-xs text-[#0B192C]/70 italic">{subtitle}</p>}
        </div>
      )}
    </div>
  );
}

/**
 * Carbon Racing & Checkered Gilded Frame
 */
export function CarbonRacingFrame({ children, className = '', title, subtitle }) {
  return (
    <div className={`relative p-4 sm:p-6 bg-[#0B192C] text-[#FAF8F5] shadow-2xl rounded-sm ${className}`}>
      {/* Checkered top & bottom edge trim */}
      <div className="absolute top-0 inset-x-0 h-2.5 checkered-pattern opacity-80" />
      <div className="absolute bottom-0 inset-x-0 h-2.5 checkered-pattern opacity-80" />

      {/* Gold side borders */}
      <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#D4AF37] via-[#F5D061] to-[#8C6D1F]" />
      <div className="absolute inset-y-0 right-0 w-1.5 bg-gradient-to-b from-[#D4AF37] via-[#F5D061] to-[#8C6D1F]" />

      <div className="relative z-10 w-full h-full">
        {children}
      </div>

      {title && (
        <div className="mt-3 text-center border-t border-[#D4AF37]/30 pt-2">
          <p className="font-racing text-sm font-bold text-[#F5D061] tracking-widest uppercase">{title}</p>
          {subtitle && <p className="font-tech text-xs text-[#FAF8F5]/70">{subtitle}</p>}
        </div>
      )}
    </div>
  );
}
