import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Clock, Shield, Compass } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioData';
import { BookSpreadModal } from './modals/BookSpreadModal';
import { soundSynth } from '../utils/audioSynthesizer';

export function WrittenWorksSection() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [activeDecorLore, setActiveDecorLore] = useState(null);

  const handleBookClick = (book) => {
    soundSynth.playPageTurn();
    setSelectedBook(book);
  };

  const handleDecorClick = (item) => {
    if (item.clinkSound === 'rev') {
      soundSynth.playEngineRev(0.4, 1.5);
    } else {
      soundSynth.playClink();
    }
    setActiveDecorLore(item);
  };

  return (
    <section id="written-works" className="portfolio-section wall-section">
      {/* Decorative Texture Overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none oil-canvas-texture" />

      <div className="feature-content relative z-10">
        
        {/* Section Header */}
        <div className="feature-heading">
          <p className="section-kicker">Writing</p>
          <h2 className="section-title">Books & writing</h2>
          <p className="section-description">Select a book to read more.</p>
        </div>

        {/* Grand 3-Tier Mahogany Bookshelf Structure */}
        <div className="bookshelf relative p-2 sm:p-5 rounded-sm bg-[#2A160F] border-4 border-[#3D2115] shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
          
          {/* Carved Wood Header Molding */}
          <div className="hidden sm:block text-center pb-2 border-b-2 border-[#1F100B]">
            <span className="font-cinzel text-xs font-bold text-[#D4AF37] tracking-widest uppercase">Published works</span>
          </div>

          {/* ======================================================== */}
          {/* TIER 1 (TOP SHELF): CLICKABLE ANTIQUE DECOR */}
          {/* ======================================================== */}
          <div className="bookshelf-tier bookshelf-decor py-2 border-b-4 border-[#1A0C08] flex items-end justify-around px-1 sm:px-8 relative bg-gradient-to-b from-[#22110B] to-[#2E1810]">

            {/* Top Decor Item 1: Minerva Bust */}
            <motion.button
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleDecorClick(portfolioConfig.writtenWorks.decorItems[0])}
              className="group flex flex-col items-center cursor-pointer focus:outline-hidden"
            >
              <div className="w-14 h-16 sm:w-16 sm:h-20 bg-gradient-to-t from-[#ECE5D8] to-[#FAF8F5] rounded-t-full border-2 border-[#D4AF37] flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]">
                <Shield className="w-7 h-7 text-[#6B1124]" />
              </div>
              <div className="w-20 h-3 bg-[#1A0C08] rounded-xs border-t border-[#D4AF37]/60" />
              <span className="font-cinzel text-[10px] text-[#FAF8F5]/80 mt-1 group-hover:text-[#F5D061]">
                {portfolioConfig.writtenWorks.decorItems[0].name}
              </span>
            </motion.button>

            {/* Top Decor Item 2: Vintage Gilded Helmet */}
            <motion.button
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleDecorClick(portfolioConfig.writtenWorks.decorItems[1])}
              className="group flex flex-col items-center cursor-pointer focus:outline-hidden"
            >
              <div className="w-16 h-14 sm:w-20 sm:h-16 bg-gradient-to-r from-[#D4AF37] via-[#F5D061] to-[#8C6D1F] rounded-t-2xl border-2 border-[#6B1124] flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(245,208,97,0.7)]">
                <span className="font-racing text-xs font-bold text-[#0B192C]">1976 GP</span>
              </div>
              <div className="w-24 h-3 bg-[#1A0C08] rounded-xs border-t border-[#D4AF37]/60" />
              <span className="font-cinzel text-[10px] text-[#FAF8F5]/80 mt-1 group-hover:text-[#F5D061]">
                {portfolioConfig.writtenWorks.decorItems[1].name}
              </span>
            </motion.button>

            {/* Top Decor Item 3: Brass Telescope / Sextant */}
            <motion.button
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleDecorClick(portfolioConfig.writtenWorks.decorItems[4])}
              className="group flex flex-col items-center cursor-pointer focus:outline-hidden"
            >
              <div className="w-12 h-14 sm:w-14 sm:h-16 bg-gradient-to-br from-[#B89758] to-[#8C6D1F] rounded-t-sm border border-[#F5D061] flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]">
                <Compass className="w-6 h-6 text-[#FAF8F5]" />
              </div>
              <div className="w-18 h-3 bg-[#1A0C08] rounded-xs border-t border-[#D4AF37]/60" />
              <span className="font-cinzel text-[10px] text-[#FAF8F5]/80 mt-1 group-hover:text-[#F5D061]">
                {portfolioConfig.writtenWorks.decorItems[4].name}
              </span>
            </motion.button>
          </div>

          {/* ======================================================== */}
          {/* TIER 2 (MIDDLE SHELF): LEATHER-BOUND CLICKABLE BOOKS */}
          {/* ======================================================== */}
          <div className="bookshelf-tier bookshelf-books py-2 border-b-4 border-[#1A0C08] px-1 sm:px-5 bg-gradient-to-b from-[#22110B] via-[#2A150D] to-[#22110B] relative flex flex-col justify-end">

            {/* Books Arranged Horizontally on Shelf */}
            <div className="flex items-end justify-center gap-2 sm:gap-5 pt-2 overflow-x-auto pb-1">
              {portfolioConfig.writtenWorks.books.map((book) => (
                <motion.button
                  key={book.id}
                  onClick={() => handleBookClick(book)}
                  whileHover={{ y: -18, scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  style={{ backgroundColor: book.spineColor }}
                  className="relative group w-14 sm:w-20 md:w-[88px] h-[min(28vh,190px)] min-h-32 rounded-t-xs border-2 border-[#D4AF37]/70 shadow-2xl flex flex-col items-center justify-between p-1.5 cursor-pointer transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] shrink-0 focus:outline-hidden overflow-hidden"
                >
                  {/* Leather grain texture overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-20"
                    style={{ background: 'repeating-linear-gradient(90deg, transparent 0, transparent 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 4px)' }}
                  />

                  {/* Top Gold Rib */}
                  <div className="w-full h-[6px] bg-gradient-to-r from-[#8C6D1F] via-[#F5D061] to-[#8C6D1F] rounded-full shrink-0" />

                  {/* Embossed Vertical Title — clipped to fit spine */}
                  <div className="flex-1 flex items-center justify-center w-full py-1 overflow-hidden">
                    <span
                      style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', maxHeight: '170px', overflow: 'hidden', textOverflow: 'ellipsis' }}
                      className="font-cinzel text-[11px] sm:text-xs font-bold tracking-widest text-[#F5D061] drop-shadow leading-tight whitespace-nowrap px-0.5"
                    >
                      {book.title}
                    </span>
                  </div>

                  {/* Bottom: Emboss seal ring + year */}
                  <div className="w-full flex flex-col items-center gap-0.5 border-t border-[#D4AF37]/40 pt-1 shrink-0">
                    <div
                      className="w-5 h-5 rounded-full border border-[#D4AF37]/70 flex items-center justify-center"
                      style={{ background: book.embossColor + '33' }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: book.embossColor }} />
                    </div>
                    <span className="font-racing text-[9px]" style={{ color: book.embossColor + 'cc' }}>{book.year}</span>
                  </div>

                  {/* Hover "Open Book" label */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#6B1124] text-[#FAF8F5] text-[9px] font-racing px-2 py-0.5 rounded border border-[#D4AF37] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    Open Folio
                  </div>

                  {/* Side page-edge illusion */}
                  <div className="absolute top-0 right-0 bottom-0 w-[3px] bg-[#FAF8F5]/10" />
                </motion.button>
              ))}
            </div>


            {/* Polished Brass Shelf Plate */}
            <div className="w-full h-3 bg-gradient-to-r from-[#8C6D1F] via-[#F5D061] to-[#8C6D1F] rounded-xs shadow-inner mt-2 flex items-center justify-center">
              <span className="w-32 h-1 bg-[#4A0A17] rounded-full" />
            </div>
          </div>

          {/* ======================================================== */}
          {/* TIER 3 (BOTTOM SHELF): TROPHIES & CERAMIC ARTIFACTS */}
          {/* ======================================================== */}
          <div className="bookshelf-tier bookshelf-decor py-2 flex items-end justify-around px-1 sm:px-8 relative bg-gradient-to-b from-[#22110B] to-[#1E0F09]">

            {/* Bottom Decor Item 1: Championship Cup */}
            <motion.button
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleDecorClick(portfolioConfig.writtenWorks.decorItems[2])}
              className="group flex flex-col items-center cursor-pointer focus:outline-hidden"
            >
              <div className="w-14 h-16 sm:w-16 sm:h-20 bg-gradient-to-t from-[#B89758] via-[#F5D061] to-[#D4AF37] rounded-t-lg border-2 border-[#FAF8F5] flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(245,208,97,0.8)]">
                <Trophy className="w-7 h-7 text-[#6B1124]" />
              </div>
              <div className="w-20 h-3 bg-[#1A0C08] rounded-xs border-t border-[#D4AF37]/60" />
              <span className="font-cinzel text-[10px] text-[#FAF8F5]/80 mt-1 group-hover:text-[#F5D061]">
                {portfolioConfig.writtenWorks.decorItems[2].name}
              </span>
            </motion.button>

            {/* Bottom Decor Item 2: Brass Stopwatch */}
            <motion.button
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleDecorClick(portfolioConfig.writtenWorks.decorItems[3])}
              className="group flex flex-col items-center cursor-pointer focus:outline-hidden"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#D4AF37] to-[#8C6D1F] rounded-full border-2 border-[#1E2A38] flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(212,175,55,0.7)]">
                <Clock className="w-6 h-6 text-[#0B192C]" />
              </div>
              <div className="w-20 h-3 bg-[#1A0C08] rounded-xs border-t border-[#D4AF37]/60" />
              <span className="font-cinzel text-[10px] text-[#FAF8F5]/80 mt-1 group-hover:text-[#F5D061]">
                {portfolioConfig.writtenWorks.decorItems[3].name}
              </span>
            </motion.button>

            {/* Bottom Decor Item 3: Victorian Ceramic Urn */}
            <motion.button
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleDecorClick(portfolioConfig.writtenWorks.decorItems[5])}
              className="group flex flex-col items-center cursor-pointer focus:outline-hidden"
            >
              <div className="w-12 h-16 sm:w-14 sm:h-18 bg-gradient-to-b from-[#FAF8F5] via-[#E6DFD5] to-[#D8C4B6] rounded-t-2xl border-2 border-[#D4AF37] flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]">
                <span className="font-script text-xl text-[#6B1124]">A</span>
              </div>
              <div className="w-18 h-3 bg-[#1A0C08] rounded-xs border-t border-[#D4AF37]/60" />
              <span className="font-cinzel text-[10px] text-[#FAF8F5]/80 mt-1 group-hover:text-[#F5D061]">
                {portfolioConfig.writtenWorks.decorItems[5].name}
              </span>
            </motion.button>
          </div>

        </div>

        {/* Interactive Decor Lore Banner (Shows when clicking an artifact) */}
        <AnimatePresence>
          {activeDecorLore && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="mt-6 p-4 rounded-sm bg-[#FAF8F5] border-2 border-[#D4AF37] shadow-xl max-w-xl mx-auto text-center relative"
            >
              <button
                onClick={() => setActiveDecorLore(null)}
                className="absolute top-2 right-2 text-xs text-[#6B1124] font-bold p-1 hover:bg-[#6B1124]/10 rounded cursor-pointer"
              >
                ✕
              </button>
              <span className="font-cinzel text-xs font-bold text-[#6B1124] tracking-wider uppercase block">
                ✦ {activeDecorLore.name} ✦
              </span>
              <p className="font-cormorant text-sm text-[#0B192C]/85 mt-1 leading-relaxed">
                {activeDecorLore.lore}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Book Spread Modal */}
      <BookSpreadModal
        book={selectedBook}
        isOpen={!!selectedBook}
        onClose={() => setSelectedBook(null)}
      />
    </section>
  );
}
