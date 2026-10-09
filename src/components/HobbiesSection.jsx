import React, { useEffect, useRef, useState } from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { circuitPath, getPathPosition } from '../utils/raceTrack';
import { HobbyCarModal } from './modals/HobbyCarModal';
import { soundSynth } from '../utils/audioSynthesizer';

const carLaps = [0.08, 0.31, 0.56, 0.8];

export function HobbiesSection() {
  const trackRef = useRef(null);
  const [carPositions, setCarPositions] = useState([]);
  const [hoveredCarId, setHoveredCarId] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    if (!trackRef.current) return;
    setCarPositions(carLaps.map((lap) => getPathPosition(trackRef.current, lap)));
  }, []);

  const openCar = (car) => {
    soundSynth.playFlagFlutter();
    soundSynth.playClink();
    setSelectedCar(car);
  };

  return (
    <section id="fun-facts" className="portfolio-section wall-section">
      <div className="feature-content">
        <header className="feature-heading">
          <h2 className="section-title">Fun Facts About Me</h2>
          <p>Interests and creative pursuits, beyond work.</p>
        </header>

        <div className="track-frame hobbies-track">
          <svg viewBox="0 0 1000 540" role="img" aria-label="Four hobby cars driving on a Formula One-inspired circuit">
            <defs>
              <pattern id="hobbyGravel" width="14" height="14" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="4" r="1" fill="#d9c7a5" opacity=".22" />
                <circle cx="11" cy="10" r="1" fill="#d9c7a5" opacity=".16" />
              </pattern>
              <pattern id="hobbyStartFinish" width="16" height="16" patternUnits="userSpaceOnUse">
                <rect width="16" height="16" fill="#f6f2e9" />
                <path d="M0 0h8v8H0zm8 8h8v8H8z" fill="#10151d" />
              </pattern>
            </defs>
            <rect width="1000" height="540" rx="18" fill="#17253a" />
            <path d="M24 75h952v390H24z" fill="url(#hobbyGravel)" opacity=".7" />
            <path d={circuitPath} fill="none" stroke="#d8c4b6" strokeWidth="68" strokeLinecap="round" strokeLinejoin="round" opacity=".7" />
            <path d={circuitPath} fill="none" stroke="#db2430" strokeWidth="56" strokeDasharray="20 20" />
            <path d={circuitPath} fill="none" stroke="#f4f1e8" strokeWidth="56" strokeDasharray="20 20" strokeDashoffset="20" />
            <path d={circuitPath} fill="none" stroke="#272d35" strokeWidth="42" strokeLinecap="round" strokeLinejoin="round" />
            <path d={circuitPath} fill="none" stroke="#64707d" strokeWidth="2" strokeDasharray="14 15" opacity=".7" />
            <path ref={trackRef} d={circuitPath} fill="none" stroke="transparent" strokeWidth="1" />
            <g transform="translate(165 440) rotate(90)">
              <rect x="-27" y="-3" width="54" height="6" fill="url(#hobbyStartFinish)" stroke="#d4af37" strokeWidth="1" />
            </g>
            <text x="165" y="492" textAnchor="middle" className="track-label">START / FINISH</text>
            <text x="490" y="274" textAnchor="middle" className="track-infield-title">OFF THE CLOCK</text>
            <text x="490" y="300" textAnchor="middle" className="track-infield-note">HOVER OR SELECT A CAR</text>

            {portfolioConfig.hobbies.cars.map((car, index) => {
              const position = carPositions[index];
              if (!position) return null;
              return (
                <g
                  key={car.id}
                  transform={`translate(${position.x} ${position.y}) rotate(${position.angle})`}
                  className="hobby-car"
                  role="button"
                  tabIndex="0"
                  aria-label={`Open ${car.hobbyName}`}
                  onMouseEnter={() => {
                    setHoveredCarId(car.id);
                    soundSynth.playEngineRev(.2, 1.2);
                  }}
                  onMouseLeave={() => setHoveredCarId(null)}
                  onFocus={() => setHoveredCarId(car.id)}
                  onBlur={() => setHoveredCarId(null)}
                  onClick={() => openCar(car)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      openCar(car);
                    }
                  }}
                >
                  <ellipse cx="0" cy="0" rx="70" ry="48" fill="#000" opacity=".35" />
                  <defs>
                    <clipPath id={`hobby-photo-${car.id}`}>
                      <rect x="-66" y="-40" width="132" height="80" rx="8" />
                    </clipPath>
                  </defs>
                  <rect x="-70" y="-44" width="140" height="88" rx="11" fill="#d4af37" />
                  <image
                    href={car.image}
                    x="-66"
                    y="-40"
                    width="132"
                    height="80"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath={`url(#hobby-photo-${car.id})`}
                  />
                  <text x="0" y="35" textAnchor="middle" className="hobby-car-number">{car.number} · {car.team.split(' · ')[1]}</text>
                  {hoveredCarId === car.id && (
                    <g transform={`rotate(${-position.angle})`}>
                      <rect x="-108" y="-81" width="216" height="32" rx="7" fill="#0b192c" stroke="#d4af37" strokeWidth="2" />
                      <text x="0" y="-60" textAnchor="middle" className="hobby-car-label">{car.hobbyName}</text>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>
      <HobbyCarModal car={selectedCar} isOpen={!!selectedCar} onClose={() => setSelectedCar(null)} />
    </section>
  );
}
