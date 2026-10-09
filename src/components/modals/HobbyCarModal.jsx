import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { useModalAccessibility } from '../../hooks/useModalAccessibility';

export function HobbyCarModal({ car, isOpen, onClose }) {
  useModalAccessibility(isOpen, onClose);

  return (
    <AnimatePresence>
      {isOpen && car && (
        <motion.div
          key={car.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="portfolio-modal fixed inset-0 z-[99990] flex items-center justify-center p-2 sm:p-5"
        >
          <button className="portfolio-modal-backdrop" onClick={onClose} aria-label="Close hobby details" />
          <motion.article
            initial={{ opacity: 0, scale: 0.92, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 18 }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="portfolio-modal-card hobby-modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="hobby-modal-title"
          >
            <button className="portfolio-modal-close" onClick={onClose} aria-label="Close">
              <X aria-hidden="true" />
            </button>
            <div className="h-2.5 shrink-0 checkered-pattern" />
            <div className="hobby-modal-layout">
              <div className="hobby-modal-art">
                <img src={car.image} alt={`${car.team} Formula One car`} />
                <a href={car.imageSource} target="_blank" rel="noreferrer" className="hobby-image-credit">
                  {car.imageCredit} <ExternalLink aria-hidden="true" />
                </a>
                <p>{car.team}</p>
              </div>
              <div className="hobby-modal-copy">
                <span className="hobby-modal-label">INTEREST</span>
                <h2 id="hobby-modal-title">{car.hobbyName}</h2>
                <p className="hobby-modal-role">{car.role}</p>
                <p className="hobby-modal-description">{car.description}</p>
                <div className="hobby-modal-stats">
                  {Object.entries(car.stats).map(([label, value]) => (
                    <div key={label}>
                      <span>{label}</span>
                      <strong>{value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="h-2.5 shrink-0 checkered-pattern" />
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
