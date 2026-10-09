import React, { lazy, Suspense, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioConfig } from '../data/portfolioData';

const RacingDriver3D = lazy(() => import('./RacingDriver3D').then((module) => ({ default: module.RacingDriver3D })));

function InteractiveDriver() {
  const frameRef = useRef(null);
  const isNearViewport = useInView(frameRef, { once: true, margin: '240px' });

  return (
    <div ref={frameRef} className="driver-stage-frame">
      {isNearViewport ? (
        <Suspense fallback={<div className="driver-3d-loading" aria-hidden="true" />}>
          <RacingDriver3D />
        </Suspense>
      ) : (
        <div className="driver-3d-loading" aria-hidden="true" />
      )}
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="portfolio-section wall-section">
      <div className="about-layout">
        <header className="about-heading">
          <h2 className="section-title">About me</h2>
          <p>{portfolioConfig.personal.bio}</p>
        </header>

        <div className="about-orbit">
          {portfolioConfig.about.services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -18 : 18, y: 8 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`about-service about-service-${index + 1}`}
            >
              <span aria-hidden="true">0{index + 1}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.article>
          ))}

          <figure className="driver-stage">
            <InteractiveDriver />
            <figcaption>Drag to rotate · Interactive 3D driver</figcaption>
          </figure>
        </div>

      </div>
    </section>
  );
}
