import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Gauge, Sparkles } from 'lucide-react';
import { soundSynth } from '../utils/audioSynthesizer';
import { portfolioConfig } from '../data/portfolioData';

export function LoadingScreen({ onComplete, onSoundToggled, isMuted }) {
  const [lightsCount, setLightsCount] = useState(0);
  const [isLightsOut, setIsLightsOut] = useState(false);
  const [rpm, setRpm] = useState(1200);
  const [isRevving, setIsRevving] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(!isMuted);

  // Check if skip requested in url
  useEffect(() => {
    if (typeof window !== 'undefined' && 
      (window.location.search.includes('skipIntro') || window.location.hash.includes('skipIntro'))) {
      onComplete();
    }
  }, [onComplete]);

  // F1 5-lights sequence countdown
  useEffect(() => {
    let interval;
    if (lightsCount < 5) {
      interval = setTimeout(() => {
        setLightsCount((prev) => {
          const next = prev + 1;
          soundSynth.playLightBeep(520 + next * 40);
          return next;
        });
      }, 420);
    } else if (lightsCount === 5 && !isLightsOut) {
      // Hold with high tension, then extinguish!
      interval = setTimeout(() => {
        setIsLightsOut(true);
        soundSynth.playLightsOut();
        // Give time for launch animation before completing
        setTimeout(() => {
          onComplete();
        }, 800);
      }, 900);
    }

    return () => clearTimeout(interval);
  }, [lightsCount, isLightsOut, onComplete]);

  // Interactive RPM rev effect
  const handleRevEngine = () => {
    setIsRevving(true);
    setRpm((prev) => Math.min(14500, prev + 3200));
    soundSynth.playEngineRev(0.5, 1.2 + Math.random() * 0.4);
    setTimeout(() => {
      setIsRevving(false);
      setRpm(3800);
    }, 450);
  };

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundSynth.setMuted(!next);
    if (next) {
      soundSynth.playClink();
    }
    if (onSoundToggled) onSoundToggled(next);
  };

  const handleSkip = () => {
    setIsLightsOut(true);
    soundSynth.playLightsOut();
    setTimeout(() => onComplete(), 400);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100000] bg-[#0B192C] text-[#FAF8F5] flex flex-col items-center justify-between p-6 sm:p-12 select-none overflow-hidden"
    >
      {/* Victorian Damask & Lace Background Texture */}
      <div className="absolute inset-0 opacity-15 pointer-events-none oil-canvas-texture" />
      <div className="absolute inset-0 bg-radial from-transparent via-[#0B192C]/80 to-[#0B192C] pointer-events-none" />

      {/* Top Header: Gallery Salon Entry Bar */}
      <div className="w-full max-w-4xl flex items-center justify-between border-b border-[#D4AF37]/30 pb-4 relative z-10">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E10600] animate-pulse" />
          <span className="font-cinzel text-xs sm:text-sm tracking-[0.25em] text-[#D4AF37] uppercase">
            AARUSHI PATIDAR • PORTFOLIO
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Sound Toggle Button */}
          <button
            onClick={handleToggleSound}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#FAF8F5]/5 hover:bg-[#D4AF37]/20 transition-all text-xs font-racing text-[#FAF8F5] cursor-pointer"
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#F5D061]" />
                <span className="text-[#F5D061]">AUDIO: ENGAGED</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#FAF8F5]/60" />
                <span>SOUND MUTED (CLICK TO UNMUTE)</span>
              </>
            )}
          </button>

          <button
            onClick={handleSkip}
            className="text-xs font-racing text-[#D4AF37]/70 hover:text-[#FAF8F5] underline underline-offset-4 cursor-pointer"
          >
            Skip Launch
          </button>
        </div>
      </div>

      {/* Central Interactive Loading Core */}
      <div className="relative z-10 flex flex-col items-center text-center my-auto max-w-2xl px-4">
        {/* Ornate Gilded Gantry Frame holding the 5 Start Lights */}
        <div className="relative p-6 sm:p-8 rounded-sm bg-gradient-to-b from-[#162238] to-[#0B192C] border-2 border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.2)] mb-8">
          {/* Victorian Arch Filigree Header */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-0.5 bg-[#6B1124] border border-[#D4AF37] rounded-full text-[10px] font-cinzel text-[#F5D061] tracking-widest uppercase">
            Start Gantry Telemetry
          </div>

          {/* 5 F1 Start Lights */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 py-2">
            {[1, 2, 3, 4, 5].map((lightIndex) => {
              const isLit = !isLightsOut && lightsCount >= lightIndex;
              return (
                <div key={lightIndex} className="flex flex-col items-center gap-1.5">
                  <div className="w-9 h-14 sm:w-12 sm:h-20 rounded-md bg-[#050B13] border-2 border-[#334155] p-1 flex flex-col justify-around shadow-inner">
                    {/* Upper red light */}
                    <div
                      className={`w-full aspect-square rounded-full transition-all duration-150 ${
                        isLit
                          ? 'bg-[#FF0000] shadow-[0_0_20px_#FF0000,0_0_40px_#FF2200]'
                          : 'bg-[#2A0505] opacity-50'
                      }`}
                    />
                    {/* Lower red light */}
                    <div
                      className={`w-full aspect-square rounded-full transition-all duration-150 ${
                        isLit
                          ? 'bg-[#FF0000] shadow-[0_0_20px_#FF0000,0_0_40px_#FF2200]'
                          : 'bg-[#2A0505] opacity-50'
                      }`}
                    />
                  </div>
                  <span className="font-racing text-[9px] text-[#D4AF37]/60">0{lightIndex}</span>
                </div>
              );
            })}
          </div>

          {/* Lights Status Text */}
          <div className="mt-4 font-cinzel text-xs tracking-widest">
            {isLightsOut ? (
              <span className="text-[#00FF66] font-bold text-sm tracking-[0.2em] animate-pulse">
                ✦ LIGHTS OUT AND AWAY WE GO! ✦
              </span>
            ) : lightsCount === 5 ? (
              <span className="text-[#FFCC00] animate-pulse">AWAITING CLUTCH BITE POINT...</span>
            ) : (
              <span className="text-[#FAF8F5]/70">
                WARMING GRID POWER UNITS • {lightsCount}/5 ARMED
              </span>
            )}
          </div>
        </div>

        {/* Grand Hero Namesake */}
        <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wider text-[#FAF8F5] mb-2 drop-shadow-md">
          {portfolioConfig.personal.name}
        </h1>
        <p className="font-cormorant italic text-lg sm:text-xl text-[#D8C4B6] max-w-lg mx-auto mb-6">
          {portfolioConfig.personal.tagline}
        </p>

        {/* Interactive RPM Tachometer & Rev Trigger */}
        <div className="flex flex-col items-center gap-3 w-full max-w-sm">
          <div className="w-full bg-[#162238] p-3 rounded border border-[#D4AF37]/40 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Gauge className={`w-4 h-4 ${isRevving ? 'text-[#E10600] animate-bounce' : 'text-[#D4AF37]'}`} />
              <span className="font-racing text-xs text-[#FAF8F5]/80">ENGINE RPM:</span>
            </div>
            <span className="font-racing text-lg font-bold text-[#F5D061] tracking-widest">
              {rpm.toLocaleString()} <span className="text-xs text-[#FAF8F5]/60">RPM</span>
            </span>
          </div>

          <button
            onClick={handleRevEngine}
            className="w-full py-3 px-6 rounded-sm bg-gradient-to-r from-[#6B1124] via-[#8B1832] to-[#6B1124] border border-[#D4AF37] text-[#FAF8F5] font-racing text-sm font-bold tracking-widest hover:brightness-125 transition-all shadow-[0_0_20px_rgba(107,17,36,0.5)] cursor-pointer flex items-center justify-center gap-2 group"
          >
            <Sparkles className="w-4 h-4 text-[#F5D061] group-hover:rotate-45 transition-transform" />
            REV ENGINE
          </button>
        </div>
      </div>

      {/* Bottom Paddock Status Bar */}
      <div className="w-full max-w-4xl flex items-center justify-between border-t border-[#D4AF37]/30 pt-4 text-[11px] font-racing text-[#D8C4B6]/70 relative z-10">
        <div>PRODUCT • AI • GROWTH</div>
        <div className="hidden sm:block">WEB • DESIGN • STRATEGY</div>
        <div>READY TO EXPLORE</div>
      </div>
    </motion.div>
  );
}
