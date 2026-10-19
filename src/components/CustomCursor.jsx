import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for outer ring
  const springConfig = { damping: 24, stiffness: 220, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverStart = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setIsHovered(true);
        setCursorText(target.getAttribute('data-cursor') || 'VIEW');
      } else if (e.target.closest('button, a, input, select, textarea')) {
        setIsHovered(true);
        setCursorText('');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleHoverStart);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleHoverStart);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Center pinpoint neon dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#D5FF00] pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />

      {/* Outer spring follower ring / label */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center font-mono text-[9px] font-bold tracking-widest uppercase transition-colors hidden md:flex"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          width: isHovered ? (cursorText ? 64 : 36) : 22,
          height: isHovered ? (cursorText ? 64 : 36) : 22,
          backgroundColor: isHovered && cursorText ? '#D5FF00' : 'rgba(213, 255, 0, 0.05)',
          borderColor: isHovered ? '#D5FF00' : 'rgba(213, 255, 0, 0.4)',
          color: '#0A0A0A',
          borderWidth: isHovered && cursorText ? '0px' : '1px'
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
