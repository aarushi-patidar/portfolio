import React, { useEffect, useRef, useState } from 'react';
import { useScroll } from 'framer-motion';
import { portfolioConfig } from '../data/portfolioData';
import { circuitPath, getPathPosition } from '../utils/raceTrack';
import { FlagExperienceModal } from './modals/FlagExperienceModal';
import { soundSynth } from '../utils/audioSynthesizer';

function RacingCar({ image }) {
  return (
    <>
      <ellipse cx="0" cy="0" rx="72" ry="43" fill="#000" opacity=".42" />
      <rect x="-68" y="-39" width="136" height="78" rx="9" fill="#d4af37" />
      <image href={image} x="-64" y="-35" width="128" height="70" preserveAspectRatio="xMidYMid slice" />
    </>
  );
}

export function ExperienceSection() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const carRef = useRef(null);
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [markerPositions, setMarkerPositions] = useState([]);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });

  useEffect(() => {
    const updateCar = (progress) => {
      if (!trackRef.current || !carRef.current) return;
      const position = getPathPosition(trackRef.current, Math.max(.005, Math.min(.995, progress)));
      carRef.current.setAttribute('transform', `translate(${position.x} ${position.y}) rotate(${position.angle})`);
    };
    const unsubscribe = scrollYProgress.on('change', updateCar);
    const length = trackRef.current?.getTotalLength() ?? 0;
    if (length) {
      setMarkerPositions(portfolioConfig.experience.map((_, index) =>
        getPathPosition(trackRef.current, (index + 1) / (portfolioConfig.experience.length + 1), 58)
      ));
    }
    updateCar(scrollYProgress.get());
    return unsubscribe;
  }, [scrollYProgress]);

  const openMilestone = (milestone) => {
    soundSynth.playFlagFlutter();
    soundSynth.playClink();
    setSelectedMilestone(milestone);
  };

  return (
    <section id="experience" ref={sectionRef} className="portfolio-section wall-section">
      <div className="feature-content">
        <header className="feature-heading">
          <h2 className="section-title">Experience</h2>
          <p>Scroll to move the car. Select a marker to see the details.</p>
        </header>

        <div className="track-frame">
          <svg viewBox="0 0 1000 540" role="img" aria-label="A racing circuit showing career milestones">
            <defs>
              <pattern id="trackGravel" width="14" height="14" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="4" r="1" fill="#d9c7a5" opacity=".22" />
                <circle cx="11" cy="10" r="1" fill="#d9c7a5" opacity=".16" />
              </pattern>
              <pattern id="startFinish" width="16" height="16" patternUnits="userSpaceOnUse">
                <rect width="16" height="16" fill="#f6f2e9" />
                <path d="M0 0h8v8H0zm8 8h8v8H8z" fill="#10151d" />
              </pattern>
            </defs>
            <rect width="1000" height="540" rx="18" fill="#17253a" />
            <path d="M24 75h952v390H24z" fill="url(#trackGravel)" opacity=".7" />
            <path d={circuitPath} fill="none" stroke="#d8c4b6" strokeWidth="68" strokeLinecap="round" strokeLinejoin="round" opacity=".7" />
            <path d={circuitPath} fill="none" stroke="#db2430" strokeWidth="56" strokeDasharray="20 20" strokeLinecap="butt" />
            <path d={circuitPath} fill="none" stroke="#f4f1e8" strokeWidth="56" strokeDasharray="20 20" strokeDashoffset="20" strokeLinecap="butt" />
            <path d={circuitPath} fill="none" stroke="#272d35" strokeWidth="42" strokeLinecap="round" strokeLinejoin="round" />
            <path d={circuitPath} fill="none" stroke="#64707d" strokeWidth="2" strokeDasharray="14 15" strokeLinecap="round" opacity=".7" />
            <path ref={trackRef} d={circuitPath} fill="none" stroke="transparent" strokeWidth="1" />
            <text x="490" y="275" textAnchor="middle" className="track-infield-title">CAREER CIRCUIT</text>
            <text x="490" y="300" textAnchor="middle" className="track-infield-note">2021 — PRESENT</text>

            <g transform="translate(165 440) rotate(90)">
              <rect x="-27" y="-3" width="54" height="6" fill="url(#startFinish)" stroke="#d4af37" strokeWidth="1" />
            </g>
            <text x="165" y="492" textAnchor="middle" className="track-label">START / FINISH</text>

            {portfolioConfig.experience.map((milestone, index) => {
              const position = markerPositions[index];
              if (!position) return null;
              const labelSide = position.x > 700 ? -1 : 1;
              return (
                <g
                  key={milestone.id}
                  transform={`translate(${position.x} ${position.y})`}
                  className="track-marker"
                  role="button"
                  tabIndex="0"
                  aria-label={`View ${milestone.role} at ${milestone.company}`}
                  onClick={() => openMilestone(milestone)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      openMilestone(milestone);
                    }
                  }}
                >
                  <circle r="25" fill="#f7f3e9" stroke="#d4af37" strokeWidth="3" />
                  <path d="M-12-9h8v8h-8zm8 8h8v8h-8zm8-8h8v8H4z" fill="#111820" />
                  <path d="M0 13v22" stroke="#f7f3e9" strokeWidth="3" />
                  <rect x={labelSide * 42 - (labelSide < 0 ? 190 : 0)} y="-15" width="190" height="30" rx="5" className="track-marker-label" />
                  <text x={labelSide * 42 + (labelSide < 0 ? -180 : 10)} y="5" className="track-marker-text">
                    {milestone.markerLabel || milestone.company}
                  </text>
                </g>
              );
            })}

            <g ref={carRef} transform="translate(165 440) rotate(0)" className="track-car">
              <RacingCar image={portfolioConfig.hobbies.cars[0].image} />
            </g>
          </svg>
        </div>
      </div>
      <FlagExperienceModal
        milestone={selectedMilestone}
        isOpen={!!selectedMilestone}
        onClose={() => setSelectedMilestone(null)}
      />
    </section>
  );
}
