import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Zap } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioData';
import { CrimsonLaceFrame } from './ui/VictorianFrame';
import { soundSynth } from '../utils/audioSynthesizer';

export function HeroSection({ onExploreClick }) {
  const [isRevving, setIsRevving] = useState(false);
  const handleRevEngine = () => {
    setIsRevving(true);
    soundSynth.playEngineRev(0.7, 1.3);
    setTimeout(() => {
      setIsRevving(false);
    }, 800);
  };

  return (
    <section id="introduction" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-start items-center overflow-hidden parchment-texture">
      {/* Background Decorative Victorian Filigree & Racing Vignette */}
      <div className="absolute inset-0 pointer-events-none opacity-20 oil-canvas-texture" />

      {/* Subtle Floating Checkered Ribbons in Top Corners */}
      <div className="absolute top-16 left-0 w-32 h-6 checkered-pattern opacity-30 -rotate-12 pointer-events-none" />
      <div className="absolute top-20 right-0 w-36 h-6 checkered-pattern opacity-30 rotate-12 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 flex flex-col items-center text-center">

        {/* Grand Paddock Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F5] border border-[#D4AF37] shadow-sm mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#E10600] animate-ping" />
          <span className="font-cinzel text-xs font-semibold tracking-[0.2em] text-[#6B1124] uppercase">
            {portfolioConfig.personal.title}
          </span>
          <span className="text-[#D4AF37]">✦</span>
          <span className="font-racing text-xs text-[#0B192C] font-bold">
            {portfolioConfig.personal.location}
          </span>
        </motion.div>

        {/* Ornate Masterpiece Hero Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-4xl"
        >
          <CrimsonLaceFrame
            className="border-2 border-[#D4AF37]/50"
          >
            <div className="hero-frame-content p-4 sm:p-8 flex flex-col items-center">
              <p className="section-kicker">Introduction</p>
              
              {/* Grand Namesake Header */}
              <h1 className="hero-title font-cinzel text-4xl sm:text-6xl md:text-7xl font-bold tracking-wider text-[#0B192C] mb-2 drop-shadow-sm">
                <span className="burgundy-text-gradient">{portfolioConfig.personal.name}</span>
              </h1>

              <div className="hero-flair flex items-center justify-center gap-3 my-2">
                <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#D4AF37]" />
                <span className="font-script text-2xl sm:text-3xl text-[#6B1124]">Larger Than Life</span>
                <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#D4AF37]" />
              </div>

              <p className="hero-tagline font-playfair text-base sm:text-xl text-[#0B192C]/85 max-w-2xl mx-auto leading-relaxed mt-2 font-medium">
                {portfolioConfig.personal.tagline}
              </p>

              <p className="hero-description font-cormorant italic text-sm sm:text-base text-[#6B1124] max-w-xl mx-auto mt-1">
                A product/growth strategist & developer building around AI, data, and user behavior.
              </p>

              {/* F1 Car Silhouette & Aerodynamic Visual Stage */}
              <div className="hero-car-stage relative w-full max-w-2xl my-8 py-6 px-4 bg-gradient-to-b from-[#FAF8F5] via-[#F4EFE6] to-[#ECE5D8] rounded-sm border border-[#D4AF37]/60 shadow-inner overflow-hidden group">
                
                {/* Background Telemetry Grid */}
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                  <div className="w-full h-full bg-[radial-gradient(#6B1124_1px,transparent_1px)] [background-size:16px_16px]" />
                </div>

                {/* Racing Curbs at Top & Bottom */}
                <div className="absolute top-0 inset-x-0 h-1.5 racing-curb opacity-75" />
                <div className="absolute bottom-0 inset-x-0 h-1.5 racing-curb opacity-75" />

                {/* SVG F1 Aerodynamic Monoposto Car Illustration */}
                <div className="relative z-10 flex flex-col items-center">
                  <svg
                    viewBox="0 0 700 200"
                    className="w-full max-w-xl h-auto drop-shadow-xl select-none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Road shadow */}
                    <ellipse cx="350" cy="175" rx="300" ry="12" fill="#0B192C" opacity="0.25" />

                    {/* Wind tunnel aerodynamics stream lines */}
                    <motion.path
                      d="M 50 70 Q 250 50 650 90"
                      stroke="#E10600"
                      strokeWidth="2"
                      strokeDasharray="8 8"
                      animate={{ strokeDashoffset: [0, -100] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                      opacity={isRevving ? 0.9 : 0.3}
                    />
                    <motion.path
                      d="M 80 110 Q 300 90 680 120"
                      stroke="#D4AF37"
                      strokeWidth="2"
                      strokeDasharray="12 6"
                      animate={{ strokeDashoffset: [0, -100] }}
                      transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
                      opacity={isRevving ? 0.9 : 0.4}
                    />

                    {/* F1 Car Body Silhouette - Red Bull & Victorian Burgundy Blend */}
                    <g className={isRevving ? 'animate-pulse' : ''}>
                      {/* Rear Wing */}
                      <path d="M 60 70 L 110 70 L 105 130 L 75 130 Z" fill="#6B1124" stroke="#D4AF37" strokeWidth="2" />
                      <rect x="55" y="65" width="60" height="8" rx="2" fill="#0B192C" stroke="#F5D061" strokeWidth="1.5" />

                      {/* Engine Cover & Shark Fin */}
                      <path d="M 110 90 Q 220 70 340 100 L 320 145 L 110 140 Z" fill="#0B192C" />
                      <path d="M 170 75 Q 260 70 300 105 L 170 105 Z" fill="#6B1124" opacity="0.9" />

                      {/* Halo & Cockpit with Driver Helmet */}
                      <ellipse cx="280" cy="98" rx="14" ry="12" fill="#D4AF37" stroke="#0B192C" strokeWidth="2" />
                      <path d="M 270 105 Q 310 95 330 115" stroke="#FAF8F5" strokeWidth="4" strokeLinecap="round" />

                      {/* Sidepod & Chassis Floor */}
                      <path d="M 230 135 C 320 130 420 125 510 145 L 140 145 Z" fill="#0B192C" />
                      <path d="M 320 115 C 380 115 450 125 500 145 L 320 145 Z" fill="#6B1124" />

                      {/* Nosecone */}
                      <path d="M 500 135 Q 580 142 630 152 L 500 152 Z" fill="#0B192C" stroke="#D4AF37" strokeWidth="1" />

                      {/* Front Wing Assembly */}
                      <rect x="590" y="152" width="70" height="8" rx="2" fill="#6B1124" stroke="#F5D061" strokeWidth="1.5" />
                      <path d="M 630 140 L 660 140 L 660 162 L 630 162 Z" fill="#0B192C" />

                      {/* Rear Wheel */}
                      <circle cx="160" cy="148" r="32" fill="#111" stroke="#333" strokeWidth="4" />
                      <circle cx="160" cy="148" r="18" fill="#1E2A38" stroke="#D4AF37" strokeWidth="2" />
                      <circle cx="160" cy="148" r="6" fill="#E10600" />

                      {/* Front Wheel */}
                      <circle cx="530" cy="150" r="30" fill="#111" stroke="#333" strokeWidth="4" />
                      <circle cx="530" cy="150" r="16" fill="#1E2A38" stroke="#D4AF37" strokeWidth="2" />
                      <circle cx="530" cy="150" r="5" fill="#E10600" />

                      {/* Livery Accent Stripes */}
                      <path d="M 240 125 Q 380 120 480 138" stroke="#F5D061" strokeWidth="3" />
                      <path d="M 280 132 Q 400 128 470 142" stroke="#E10600" strokeWidth="2" />
                    </g>

                    {/* Speed exhaust flame on rev */}
                    {isRevving && (
                      <motion.polygon
                        points="55,100 20,95 55,115"
                        fill="#FF5500"
                        animate={{ scale: [1, 1.4, 1], opacity: [0.8, 1, 0.8] }}
                        transition={{ repeat: Infinity, duration: 0.15 }}
                      />
                    )}
                  </svg>

                  {/* Interactive Rev Throttle Button */}
                  <div className="mt-2 flex items-center gap-4">
                    <button
                      onClick={handleRevEngine}
                      className="px-5 py-2 rounded-full bg-gradient-to-r from-[#6B1124] to-[#8B1832] border border-[#D4AF37] text-[#FAF8F5] font-racing text-xs font-bold tracking-widest hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer flex items-center gap-2"
                    >
                      <Zap className="w-4 h-4 text-[#F5D061]" />
                      <span>{isRevving ? 'THROTTLE WIDE OPEN!' : 'PRESS THROTTLE • REV V10'}</span>
                    </button>
                    {isRevving && (
                      <span className="font-racing text-xs text-[#E10600] font-bold animate-pulse">
                        348 KM/H MAXIMUM VELOCITY!
                      </span>
                    )}
                  </div>
                </div>

                {/* Telemetry Corner Stats */}
                <div className="hero-stats grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-3 border-t border-[#D4AF37]/30 text-center font-racing text-xs">
                  {portfolioConfig.personal.telemetry.highlights.map((item) => (
                    <div key={item.label} className="bg-[#FAF8F5]/80 p-1.5 rounded border border-[#D4AF37]/30">
                      <span className="text-[#6B1124] block text-[10px]">{item.label}</span>
                      <span className="font-bold text-[#0B192C]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="hero-actions flex flex-wrap items-center justify-center gap-4 mt-2">
                <button
                  onClick={onExploreClick}
                  className="px-6 py-3 rounded-sm bg-[#6B1124] border-2 border-[#D4AF37] text-[#FAF8F5] font-cinzel text-xs font-bold tracking-widest hover:bg-[#8B1832] transition-all shadow-lg hover:shadow-xl cursor-pointer flex items-center gap-2"
                >
                  <span>TOUR THE EXHIBITION</span>
                  <ArrowDown className="w-3.5 h-3.5 text-[#F5D061]" />
                </button>

                <a
                  href={portfolioConfig.personal.resumeUrl}
                  download="Aarushi_Patidar_Resume.pdf"
                  className="px-6 py-3 rounded-sm bg-[#FAF8F5] border-2 border-[#0B192C] text-[#0B192C] font-cinzel text-xs font-bold tracking-widest hover:bg-[#0B192C] hover:text-[#FAF8F5] transition-all shadow-md cursor-pointer flex items-center gap-2"
                >
                  <span>OFFICIAL DOSSIER (RESUME)</span>
                </a>
              </div>

            </div>
          </CrimsonLaceFrame>
        </motion.div>

        {/* Scroll Indicator Prompt */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="hero-scroll-prompt mt-8 flex flex-col items-center gap-1 cursor-pointer"
          onClick={onExploreClick}
        >
          <span className="font-cinzel text-[10px] tracking-[0.25em] text-[#6B1124] uppercase font-bold">
            Scroll to explore
          </span>
          <ArrowDown className="w-4 h-4 text-[#D4AF37]" />
        </motion.div>

      </div>
    </section>
  );
}
