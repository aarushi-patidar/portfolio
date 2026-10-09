import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Mail, Phone, Send, CheckCircle2, Download } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioConfig } from '../data/portfolioData';

import { soundSynth } from '../utils/audioSynthesizer';

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isPrepared, setIsPrepared] = useState(false);

  const triggerVictoryConfetti = () => {
    soundSynth.playFanfare();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#6B1124', '#FAF8F5', '#E10600', '#F5D061']
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      formData.message
    ].join('\n');
    const mailto = `mailto:${portfolioConfig.personal.email}?${new URLSearchParams({
      subject: formData.subject,
      body
    }).toString()}`;

    window.location.href = mailto;
    setIsPrepared(true);
    soundSynth.playEngineRev(0.5, 1.3);
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mb-3">
            Contact
          </h2>
          <p className="section-description">
            {portfolioConfig.contact.subheading}
          </p>
          <div className="h-[2px] w-28 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        {/* Grand Gilded Frame Podium Container */}
        <div className="relative p-4 sm:p-8 rounded-sm bg-[#162238] border-4 border-[#B89758] shadow-[0_25px_70px_rgba(0,0,0,0.35)] text-[#FAF8F5]">
          
          {/* Top Checkered Ribbon Banner */}
          <div className="flex items-center justify-between border-b border-[#D4AF37]/40 pb-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#E10600] animate-pulse" />
              <span className="font-cinzel text-xs sm:text-sm font-bold text-[#F5D061] tracking-widest uppercase">
                Contact details
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-racing text-xs text-[#D8C4B6]">{portfolioConfig.personal.location}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Podium Trophy & Official Direct Channels (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              
              {/* Profile card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                onClick={triggerVictoryConfetti}
                className="relative p-6 rounded-sm bg-gradient-to-b from-[#FAF8F5] via-[#F4EFE6] to-[#ECE5D8] border-2 border-[#D4AF37] text-[#0B192C] shadow-xl w-full max-w-sm mb-6 cursor-pointer group"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#6B1124] text-[#F5D061] border border-[#D4AF37] rounded-full text-[10px] font-racing font-bold tracking-widest uppercase">
                  PROFILE
                </div>

                <div className="my-4 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    <Trophy className="w-10 h-10 text-[#6B1124] drop-shadow-md" />
                  </div>
                </div>

                <h3 className="font-cinzel text-xl font-bold text-[#0B192C] mb-1">
                  {portfolioConfig.personal.name}
                </h3>
                <p className="font-cormorant italic text-xs text-[#6B1124] font-semibold mb-3">
                  {portfolioConfig.personal.tagline}
                </p>

                <div className="pt-2 border-t border-[#D4AF37]/40 text-xs font-racing text-[#8C6D1F] flex items-center justify-center gap-1.5">
                  <span>{portfolioConfig.personal.title}</span>
                </div>
              </motion.div>

              {/* Direct Communication Channels */}
              <div className="w-full space-y-2.5 max-w-sm">
                <a
                  href={`mailto:${portfolioConfig.personal.email}`}
                  className="flex items-center gap-3 p-3 rounded bg-[#0B192C] border border-[#D4AF37]/40 hover:border-[#F5D061] transition-all text-left text-xs font-racing text-[#FAF8F5] group"
                >
                  <Mail className="w-4 h-4 text-[#F5D061] group-hover:scale-110 transition-transform" />
                  <div className="overflow-hidden">
                    <span className="block text-[10px] text-[#D8C4B6]">EMAIL DOSSIER</span>
                    <span className="font-semibold truncate block">{portfolioConfig.personal.email}</span>
                  </div>
                </a>

                <a
                  href={portfolioConfig.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded bg-[#0B192C] border border-[#D4AF37]/40 hover:border-[#F5D061] transition-all text-left text-xs font-racing text-[#FAF8F5] group"
                >
                  <svg className="w-4 h-4 text-[#F5D061] group-hover:scale-110 transition-transform fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <div>
                    <span className="block text-[10px] text-[#D8C4B6]">PROFESSIONAL NETWORK</span>
                    <span className="font-semibold block">{portfolioConfig.personal.linkedin.replace(/^https?:\/\//, '')}</span>
                  </div>
                </a>

                <a
                  href={`tel:${portfolioConfig.personal.phone}`}
                  className="flex items-center gap-3 p-3 rounded bg-[#0B192C] border border-[#D4AF37]/40 hover:border-[#F5D061] transition-all text-left text-xs font-racing text-[#FAF8F5] group"
                >
                  <Phone className="w-4 h-4 text-[#F5D061] group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="block text-[10px] text-[#D8C4B6]">DIRECT TELEPHONE</span>
                    <span className="font-semibold block">{portfolioConfig.personal.phone}</span>
                  </div>
                </a>

                <a
                  href={portfolioConfig.personal.resumeUrl}
                  download="Aarushi_Patidar_Resume.pdf"
                  className="flex items-center justify-center gap-2 p-3 rounded bg-gradient-to-r from-[#6B1124] to-[#8B1832] border border-[#D4AF37] text-xs font-racing font-bold text-[#FAF8F5] hover:brightness-110 transition-all shadow-md"
                >
                  <Download className="w-4 h-4 text-[#F5D061]" />
                  <span>DOWNLOAD RESUME (PDF)</span>
                </a>
              </div>

            </div>

            {/* Right Column: Telemetry Dispatch Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#FAF8F5] text-[#0B192C] p-6 sm:p-8 rounded-sm border-2 border-[#D4AF37] shadow-xl">
              <div className="border-b border-[#D4AF37]/30 pb-3 mb-6">
                <span className="font-racing text-xs font-bold text-[#E10600] tracking-widest uppercase block">
                  SEND A MESSAGE
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#0B192C]">
                  Send a message
                </h3>
              </div>

              {isPrepared ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#00A859]/20 border-2 border-[#00A859] flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-[#00A859]" />
                  </div>
                  <h4 className="font-cinzel text-xl font-bold text-[#0B192C] mb-2">
                    Dispatch Prepared
                  </h4>
                  <p className="font-cormorant text-base text-[#0B192C]/80 max-w-md mb-6">
                    Your email application should open with the message ready to send. If it did not, email {portfolioConfig.personal.email} directly.
                  </p>
                  <button
                    onClick={() => {
                      setIsPrepared(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-6 py-2 rounded-xs bg-[#6B1124] text-[#FAF8F5] font-racing text-xs font-bold tracking-wider hover:bg-[#8B1832] transition-colors cursor-pointer"
                  >
                    SEND ANOTHER DISPATCH
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block font-racing text-xs font-bold text-[#0B192C]/80 mb-1">
                        YOUR NAME / CALLSIGN
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Adrian Newey"
                        className="w-full px-3.5 py-2.5 rounded-xs bg-[#FAF8F5] border border-[#D4AF37] focus:border-[#6B1124] font-cormorant text-sm text-[#0B192C] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block font-racing text-xs font-bold text-[#0B192C]/80 mb-1">
                        YOUR EMAIL ADDRESS
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. adrian@redbullracing.com"
                        className="w-full px-3.5 py-2.5 rounded-xs bg-[#FAF8F5] border border-[#D4AF37] focus:border-[#6B1124] font-cormorant text-sm text-[#0B192C] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block font-racing text-xs font-bold text-[#0B192C]/80 mb-1">
                      SECTOR / SUBJECT
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. High-Scale Engineering or Research Collaboration"
                      className="w-full px-3.5 py-2.5 rounded-xs bg-[#FAF8F5] border border-[#D4AF37] focus:border-[#6B1124] font-cormorant text-sm text-[#0B192C] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block font-racing text-xs font-bold text-[#0B192C]/80 mb-1">
                      DISPATCH MESSAGE
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Compose your inquiry or dispatch notes..."
                      className="w-full px-3.5 py-2.5 rounded-xs bg-[#FAF8F5] border border-[#D4AF37] focus:border-[#6B1124] font-cormorant text-sm text-[#0B192C] focus:outline-hidden resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xs bg-gradient-to-r from-[#6B1124] via-[#8B1832] to-[#6B1124] text-[#FAF8F5] border border-[#D4AF37] font-racing text-xs font-bold tracking-widest hover:brightness-115 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5 text-[#F5D061]" />
                    <span>OPEN EMAIL TO SEND DISPATCH</span>
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Footer Gallery Colophon */}
          <div className="mt-10 pt-6 border-t border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between text-xs font-racing text-[#D8C4B6]/70">
            <div>© 2026 {portfolioConfig.personal.name} • ALL RIGHTS RESERVED</div>
            <div className="my-2 sm:my-0">CURATED IN OIL, LACE & TELEMETRY</div>
            <div className="text-[#F5D061]">GRAND PRIX DU LOUVRE • POLE POSITION #01</div>
          </div>

        </div>

      </div>
    </section>
  );
}
