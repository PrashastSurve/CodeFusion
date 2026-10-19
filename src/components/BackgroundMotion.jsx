import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundMotion() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.035]" 
        style={{
          backgroundImage: `linear-gradient(#F4F3ED 1px, transparent 1px), linear-gradient(90deg, #F4F3ED 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Floating Ambient Neon Orbs */}
      <motion.div
        className="absolute top-1/4 right-[10%] w-[550px] h-[550px] rounded-full bg-[#D5FF00]/5 blur-[140px]"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.08, 0.95, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-[5%] w-[450px] h-[450px] rounded-full bg-blue-600/5 blur-[120px]"
        animate={{
          x: [0, -25, 30, 0],
          y: [0, 35, -25, 0],
          scale: [1, 0.92, 1.05, 1]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Subtle Scanline Bar */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D5FF00]/15 to-transparent"
        animate={{
          top: ['0%', '100%']
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}
