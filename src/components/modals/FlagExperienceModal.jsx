import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Calendar, MapPin, Flag } from 'lucide-react';
import { useModalAccessibility } from '../../hooks/useModalAccessibility';

export function FlagExperienceModal({ milestone, isOpen, onClose }) {
  useModalAccessibility(isOpen, onClose);

  return (
    <AnimatePresence>
      {isOpen && milestone && (
        <motion.div
          key={milestone.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="portfolio-modal fixed inset-0 z-[99990] flex items-center justify-center p-2 sm:p-5"
        >
          <button className="portfolio-modal-backdrop" onClick={onClose} aria-label="Close experience details" />
          <motion.article
            initial={{ opacity: 0, scale: 0.92, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 18 }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="portfolio-modal-card career-modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="career-modal-title"
          >
            <div className="h-2.5 shrink-0 checkered-pattern" />
            <header className="career-modal-header">
              <div className="career-modal-icon"><Flag aria-hidden="true" /></div>
              <div className="min-w-0">
                <p>{milestone.position} · {milestone.lap}</p>
                <div className="career-modal-meta">
                  <span><Calendar aria-hidden="true" />{milestone.period}</span>
                  <span><MapPin aria-hidden="true" />{milestone.location}</span>
                </div>
              </div>
              <button className="portfolio-modal-close" onClick={onClose} aria-label="Close">
                <X aria-hidden="true" />
              </button>
            </header>

            <div className="career-modal-title">
              <h2 id="career-modal-title">{milestone.role}</h2>
              <p>{milestone.company}</p>
              <p className="career-modal-summary">{milestone.summary}</p>
            </div>

            {milestone.careerProgression?.length > 0 && (
              <ol className="career-progression" aria-label="Roles at CodeChef-VIT">
                {milestone.careerProgression.map((step) => (
                  <li key={step.role}>
                    <strong>{step.role}</strong>
                    <span>{step.period} · {step.duration}</span>
                  </li>
                ))}
              </ol>
            )}

            <div className="career-modal-main">
              <section className="career-modal-points" aria-label="Responsibilities and accomplishments">
                <h3>Highlights</h3>
                {milestone.points.map((point) => (
                  <p key={point}>
                    <CheckCircle2 aria-hidden="true" />
                    <span>{point}</span>
                  </p>
                ))}
              </section>
              <aside className="career-modal-aside">
                {milestone.metrics.length > 0 && (
                  <div className="career-modal-metrics">
                    {milestone.metrics.map((metric) => (
                      <div key={metric.label}>
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="career-modal-tags">
                  {milestone.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </aside>
            </div>
            <div className="h-2.5 shrink-0 checkered-pattern" />
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
