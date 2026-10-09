import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioData';
import { GildedFrame, CrimsonLaceFrame, CarbonRacingFrame } from './ui/VictorianFrame';
import { ProjectFrameModal } from './modals/ProjectFrameModal';
import { soundSynth } from '../utils/audioSynthesizer';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (proj) => {
    soundSynth.playClink();
    setSelectedProject(proj);
  };

  // Helper to render appropriate themed frame for each painting
  const renderThemedFrame = (proj, isFeatured = false) => {
    const cardContent = (
      <div className="relative group cursor-pointer overflow-hidden">
        {/* Artwork Image with Oil Texture and Lighting Sheen */}
        <div className={`relative ${isFeatured ? 'h-64 sm:h-80' : 'h-52 sm:h-60'} overflow-hidden rounded-xs`}>
          <img
            src={proj.image}
            alt={proj.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:[transform:scale(1.08)]"
          />
          {/* Oil Painting Texture Overlay */}
          <div className="absolute inset-0 oil-canvas-texture opacity-30 pointer-events-none" />
          
          {/* Subtle Hover Glaze Light Sheen */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/90 via-[#0B192C]/30 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

          {/* Hover View Badge */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="px-4 py-2 rounded-full bg-[#6B1124]/90 border border-[#D4AF37] text-[#FAF8F5] font-racing text-xs font-bold tracking-widest shadow-xl flex items-center gap-1.5 backdrop-blur-xs">
              <Eye className="w-3.5 h-3.5 text-[#F5D061]" />
              INSPECT CANVAS
            </span>
          </div>

          {/* Quick Category Tag on Painting */}
          <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#FAF8F5]/85 border border-[#D4AF37] font-racing text-[10px] text-[#0B192C] font-bold">
            {proj.category}
          </div>
        </div>

        {/* Painting Description in Frame */}
        <div className="p-3 bg-[#FAF8F5] text-left">
          <h4 className="font-cinzel text-base font-bold text-[#0B192C] group-hover:text-[#6B1124] transition-colors">
            {proj.title}
          </h4>
          <p className="font-cormorant text-xs text-[#0B192C]/80 line-clamp-2 mt-1">
            {proj.shortDesc}
          </p>

          <div className="flex flex-wrap gap-1 mt-2.5">
            {proj.techStack.slice(0, 3).map((t, i) => (
              <span key={i} className="text-[10px] font-racing px-1.5 py-0.5 bg-[#FAF8F5] border border-[#D4AF37]/40 text-[#6B1124] rounded">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    );

    if (proj.frameStyle === 'crimson-lace') {
      return (
        <CrimsonLaceFrame
          title={proj.title}
          subtitle={proj.year}
          className="hover:-translate-y-2 transition-transform duration-300 shadow-xl"
        >
          {cardContent}
        </CrimsonLaceFrame>
      );
    }

    if (proj.frameStyle === 'carbon-racing') {
      return (
        <CarbonRacingFrame
          title={proj.title}
          subtitle={proj.year}
          className="hover:-translate-y-2 transition-transform duration-300 shadow-xl"
        >
          {cardContent}
        </CarbonRacingFrame>
      );
    }

    // Default Baroque Gilded Gold Frame
    return (
      <GildedFrame
        title={proj.title}
        subtitle={proj.year}
        className="hover:-translate-y-2 transition-transform duration-300 shadow-xl"
      >
        {cardContent}
      </GildedFrame>
    );
  };

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 overflow-hidden">
      {/* Decorative Damask Grid Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20 oil-canvas-texture" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Salon Wall Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="section-title">Projects</h2>
          <p className="section-description">Selected work. Select a project to see more.</p>
        </div>

        {/* Salon-Style Staggered Cluster Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onClick={() => handleProjectClick(portfolioConfig.projects[0])}
            >
              {renderThemedFrame(portfolioConfig.projects[0], true)}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              onClick={() => handleProjectClick(portfolioConfig.projects[3])}
            >
              {renderThemedFrame(portfolioConfig.projects[3], false)}
            </motion.div>
          </div>

          {/* Column 2 (Center: Staggered Height) */}
          <div className="flex flex-col gap-5 lg:mt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onClick={() => handleProjectClick(portfolioConfig.projects[1])}
            >
              {/* Papers by CodeChef with Reference Lace Border */}
              {renderThemedFrame(portfolioConfig.projects[1], true)}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={() => handleProjectClick(portfolioConfig.projects[4])}
            >
              {renderThemedFrame(portfolioConfig.projects[4], false)}
            </motion.div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-8 md:col-span-2 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={() => handleProjectClick(portfolioConfig.projects[2])}
            >
              {renderThemedFrame(portfolioConfig.projects[2], true)}
            </motion.div>
          </div>

        </div>

      </div>

      {/* Horizontal Project Frame Modal */}
      <ProjectFrameModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
