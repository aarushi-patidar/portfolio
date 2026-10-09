import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Download } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioData';

export function Navbar({ isMuted, toggleSound, onNavigate }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState('introduction');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Detect current section in view
      const sections = ['introduction', 'about', 'experience', 'projects', 'education', 'certificates', 'skills', 'fun-facts', 'written-works', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.2) {
            setCurrentSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'skills', label: 'Skills' },
    { id: 'fun-facts', label: 'Fun Facts' },
    { id: 'written-works', label: 'Writing' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    if (onNavigate) onNavigate(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#FAF8F5]/90 border-b border-[#D4AF37]/30 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        {/* Left: Victorian Racing Monogram */}
        <button
          onClick={() => scrollToSection('introduction')}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#6B1124] to-[#3B0713] border-2 border-[#D4AF37] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <span className="font-cinzel font-bold text-sm text-[#F5D061] tracking-wider">
              {portfolioConfig.personal.name.split(/\s+/).map((part) => part[0]).join('').slice(0, 2)}
            </span>
          </div>
          <div className="hidden sm:block">
            <p className="font-cinzel text-xs font-bold tracking-widest text-[#0B192C] uppercase group-hover:text-[#6B1124] transition-colors">
              {portfolioConfig.personal.name}
            </p>
            <p className="font-racing text-[10px] text-[#8C6D1F] tracking-wider">
              {portfolioConfig.personal.racingHandle}
            </p>
          </div>
        </button>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1 text-xs font-cinzel tracking-wider rounded transition-all cursor-pointer ${
                  isActive
                    ? 'text-[#6B1124] font-bold bg-[#6B1124]/10 border-b-2 border-[#6B1124]'
                    : 'text-[#0B192C]/75 hover:text-[#6B1124] hover:bg-[#FAF8F5]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Sound toggle & Resume action */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            aria-label={isMuted ? "Enable sound effects" : "Mute sound effects"}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-[#D4AF37]/50 bg-[#FAF8F5] hover:bg-[#D4AF37]/15 transition-all text-xs font-racing text-[#0B192C] cursor-pointer shadow-sm"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#6B1124]" />
                <span className="hidden sm:inline text-[11px] font-semibold text-[#6B1124]">Muted</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#00A859] animate-pulse" />
                <span className="hidden sm:inline text-[11px] font-semibold text-[#00A859]">Sound On</span>
              </>
            )}
          </button>

          {/* Download Resume Button */}
          <a
            href={portfolioConfig.personal.resumeUrl}
            download="Aarushi_Patidar_Resume.pdf"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-gradient-to-r from-[#6B1124] to-[#8B1832] border border-[#D4AF37] text-[#FAF8F5] text-xs font-racing font-bold tracking-wider hover:brightness-110 shadow-sm transition-all"
          >
            <Download className="w-3.5 h-3.5 text-[#F5D061]" />
            <span className="hidden sm:inline">Dossier</span>
          </a>
        </div>
      </div>

      {/* Bottom Track Progress Bar */}
      <div className="w-full h-1 bg-[#D8C4B6]/30 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#6B1124] via-[#E10600] to-[#D4AF37] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
}
