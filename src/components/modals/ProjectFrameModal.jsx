import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code2 } from 'lucide-react';
import { useModalAccessibility } from '../../hooks/useModalAccessibility';

export function ProjectFrameModal({ project, isOpen, onClose }) {
  useModalAccessibility(isOpen, onClose);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          key={project.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="portfolio-modal fixed inset-0 z-[99990] flex items-center justify-center p-2 sm:p-5"
        >
          <button className="portfolio-modal-backdrop" onClick={onClose} aria-label="Close project details" />
          <motion.article
            initial={{ opacity: 0, scale: 0.92, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 18 }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="portfolio-modal-card project-modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button className="portfolio-modal-close" onClick={onClose} aria-label="Close">
              <X aria-hidden="true" />
            </button>
            <div className="project-modal-image">
              <img src={project.image} alt={project.title} />
              <span>{project.year}</span>
            </div>
            <div className="project-modal-copy">
              <div className="project-modal-kicker">
                <span>{project.category}</span>
                <span>{project.period || project.year}</span>
              </div>
              <h2 id="project-modal-title">{project.title}</h2>
              {project.contributor && <p className="project-modal-contributor">With {project.contributor}</p>}
              <p className="project-modal-description">{project.fullDesc}</p>
              {project.metrics?.length > 0 && (
                <div className="project-modal-metrics">
                  {project.metrics.slice(0, 3).map((metric) => <span key={metric}>{metric}</span>)}
                </div>
              )}
              <div className="project-modal-stack">
                <h3>Tech stack</h3>
                <div>{project.techStack.map((tech) => <span key={tech}>{tech}</span>)}</div>
              </div>
              <div className="project-modal-links">
                {project.links.demo && project.links.demo !== '#' && (
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                    Visit project <ExternalLink aria-hidden="true" />
                  </a>
                )}
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    Source code <Code2 aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
