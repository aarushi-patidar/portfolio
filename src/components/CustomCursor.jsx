import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring physics for trail
  const springConfig = { damping: 25, stiffness: 450, mass: 0.2 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const trailConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const trailX = useSpring(cursorX, trailConfig);
  const trailY = useSpring(cursorY, trailConfig);

  useEffect(() => {
    // Only enable on desktop pointer
    if (window.matchMedia('(pointer: coarse)').matches) return;

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check if target is clickable
      const target = e.target;
      const isClickable =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('.clickable-element') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsHovered(!!isClickable);
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
      {/* Aerodynamic gold/crimson slipstream trail ring */}
      <motion.div
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        className="absolute w-4 h-4 rounded-full border border-[#D4AF37]/40 bg-[#6B1124]/10 blur-[1px] pointer-events-none"
        animate={{
          scale: isMouseDown ? 0.7 : isHovered ? 1.6 : 1,
          borderColor: isHovered ? '#E10600' : '#D4AF37'
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Main Cursor Element: Ferrari Arrow or Ferrari Glove */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: isHovered ? '-20%' : '-10%',
          translateY: isHovered ? '-20%' : '-10%'
        }}
        className="absolute pointer-events-none drop-shadow-md select-none"
        animate={{
          scale: isMouseDown ? 0.85 : isHovered ? 1.08 : 1,
          rotate: isMouseDown ? -8 : 0
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 350 }}
      >
        <img
          src={isHovered ? '/assets/ferrari_glove.png' : '/assets/ferrari_cursor.png'}
          alt="Ferrari Cursor"
          className={isHovered ? "w-6 h-6 object-contain drop-shadow-[0_3px_5px_rgba(0,0,0,0.35)]" : "w-[18px] h-[18px] object-contain drop-shadow-[0_3px_5px_rgba(0,0,0,0.35)]"}
        />
      </motion.div>
    </div>
  );
}
