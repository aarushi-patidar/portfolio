import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';

import CustomCursor from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection, CertificatesSection, SkillsSection } from './components/PortfolioDetailsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { HobbiesSection } from './components/HobbiesSection';
import { WrittenWorksSection } from './components/WrittenWorksSection';
import { ContactSection } from './components/ContactSection';

import { useSoundEffects } from './hooks/useSoundEffects';
import { soundSynth } from './utils/audioSynthesizer';

export default function App() {
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window !== 'undefined' && 
      (window.location.search.includes('skipIntro') || window.location.hash.includes('skipIntro'))) {
      return false;
    }
    return true;
  });
  const { isMuted, toggleSound, setMuted } = useSoundEffects();
  const lenisRef = useRef(null);

  // Initialize smooth scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });
    lenisRef.current = lenis;

    let lastScroll = window.scrollY;
    let throttleTimeout = null;

    // Scroll burst throttle audio effect
    const handleScrollBurst = () => {
      const currentScroll = window.scrollY;
      const delta = Math.abs(currentScroll - lastScroll);
      lastScroll = currentScroll;

      // Fast scroll burst triggers subtle aerodynamic throttle surge
      if (delta > 85 && !throttleTimeout) {
        soundSynth.playEngineRev(0.25, 1.5 + Math.random() * 0.3);
        throttleTimeout = setTimeout(() => {
          throttleTimeout = null;
        }, 900);
      }
    };

    window.addEventListener('scroll', handleScrollBurst, { passive: true });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const animId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('scroll', handleScrollBurst);
      lenis.destroy();
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleExploreClick = () => {
    const aboutEl = document.getElementById('about');
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-site relative min-h-screen text-[#0B192C] selection:bg-[#6B1124] selection:text-[#FAF8F5]">
      {/* Ferrari Custom Cursor & Racing Glove */}
      <CustomCursor />

      {/* Interactive 5-Lights F1 Start Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen
            onComplete={handleLoadingComplete}
            onSoundToggled={(enabled) => setMuted(!enabled)}
            isMuted={isMuted}
          />
        )}
      </AnimatePresence>

      {/* Telemetry Navbar */}
      <Navbar
        isMuted={isMuted}
        toggleSound={toggleSound}
        onNavigate={(id) => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Interconnected Continuous Scrolling Gallery Sections */}
      <main className="relative">
        {/* Section 1: Landing / Hero */}
        <HeroSection onExploreClick={handleExploreClick} />

        {/* Section 2: About Me (3D Model + Floating Victorian Info Cards) */}
        <AboutSection />
        <EducationSection />
        {/* Section 3: Experience (Framed Wall Racetrack + Car Scrolling along path + Checkered Flag Modals) */}
        <ExperienceSection />

        {/* Section 4: Projects (Salon-style Gallery Wall + Themed Frames + Horizontal Modal) */}
        <ProjectsSection />
        <CertificatesSection />
        <SkillsSection />

        {/* Section 5: Fun facts (Paddock Circuit with Team Cars + Telemetry Cards) */}
        <HobbiesSection />

        {/* Section 6: Written Works (3-Tier Bookshelf with Clickable Decor + Open Book Folio Modal) */}
        <WrittenWorksSection />

        {/* Section 7: Contact (P1 Victory Podium, Finish Line, Trophy Confetti & Dispatch Form) */}
        <ContactSection />
      </main>
    </div>
  );
}
