import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Bookmark } from 'lucide-react';
import { soundSynth } from '../../utils/audioSynthesizer';
import { useModalAccessibility } from '../../hooks/useModalAccessibility';

export function BookSpreadModal({ book, isOpen, onClose }) {
  useModalAccessibility(isOpen, onClose);

  const handleClose = () => {
    soundSynth.playPageTurn();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && book && (
        <motion.div
          key={book.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="portfolio-modal fixed inset-0 z-[99990] flex items-center justify-center p-2 sm:p-5"
        >
          <button className="portfolio-modal-backdrop" onClick={handleClose} aria-label="Close book" />
          <motion.article
            initial={{ opacity: 0, scale: 0.92, rotateX: 8 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.92, rotateX: 8 }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="portfolio-modal-card book-modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="book-modal-title"
          >
            <button className="portfolio-modal-close" onClick={handleClose} aria-label="Close book">
              <X aria-hidden="true" />
            </button>
            <div className="book-modal-pages">
              <section className="book-modal-page">
                <div className="book-modal-page-content">
                  <span className="book-modal-kicker"><Bookmark aria-hidden="true" />Published work · {book.year}</span>
                  <h2 id="book-modal-title">{book.title}</h2>
                  <p className="book-modal-subtitle">{book.subtitle}</p>
                  <div className="book-modal-meta">
                    <span>{book.pages}</span>
                    <span>{book.publisher}</span>
                  </div>
                </div>
                <span className="book-modal-page-number">I</span>
              </section>
              <section className="book-modal-page">
                <div className="book-modal-page-content">
                  <h3>About this work</h3>
                  <p className="book-modal-synopsis">{book.synopsis}</p>
                  <blockquote>{book.excerpt}</blockquote>
                  {book.linkUrl && (
                    <a
                      href={book.linkUrl === '#' ? undefined : book.linkUrl}
                      target={book.linkUrl === '#' ? undefined : '_blank'}
                      rel={book.linkUrl === '#' ? undefined : 'noreferrer'}
                      onClick={(event) => {
                        if (book.linkUrl === '#') event.preventDefault();
                        soundSynth.playPageTurn();
                      }}
                    >
                      {book.linkText || 'Read excerpt'} <ExternalLink aria-hidden="true" />
                    </a>
                  )}
                </div>
                <span className="book-modal-page-number">II</span>
              </section>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
