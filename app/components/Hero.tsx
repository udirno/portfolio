'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden py-20"
    >
      {/* Brighter Solar System Background with Orbital Rings */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black">
        {/* Central radial glow - much brighter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 50% 45%,
                rgba(220, 38, 38, 0.4) 0%,
                rgba(239, 68, 68, 0.25) 15%,
                rgba(139, 27, 27, 0.15) 35%,
                transparent 70%
              )
            `,
          }}
        />

        {/* Large Corner-to-Corner Pyramid - Subtle Background Perspective */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute inset-0 w-full h-full"
          style={{
            perspective: '2000px',
            transformStyle: 'preserve-3d',
          }}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full opacity-8"
            preserveAspectRatio="none"
            style={{
              filter: 'drop-shadow(0 10px 30px rgba(220, 38, 38, 0.2))',
            }}
          >
            <defs>
              <linearGradient id="pyramidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#EF4444" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#DC2626" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#991B1B" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="pyramidSide1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DC2626" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#7F1D1D" stopOpacity="0.15" />
              </linearGradient>
              <linearGradient id="pyramidSide2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#EF4444" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#991B1B" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Pyramid faces spanning corner to corner */}
            {/* Left face */}
            <motion.path
              d="M 50 20 L 0 95 L 50 85 Z"
              fill="url(#pyramidSide1)"
              stroke="#DC2626"
              strokeWidth="0.3"
              strokeOpacity="0.2"
              animate={{ opacity: [0.3, 0.4, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Right face */}
            <motion.path
              d="M 50 20 L 50 85 L 100 95 Z"
              fill="url(#pyramidSide2)"
              stroke="#EF4444"
              strokeWidth="0.3"
              strokeOpacity="0.2"
              animate={{ opacity: [0.4, 0.3, 0.4] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            />

            {/* Front face (spans almost full width at bottom) */}
            <motion.path
              d="M 50 20 L 0 95 L 100 95 Z"
              fill="url(#pyramidGradient)"
              stroke="#DC2626"
              strokeWidth="0.5"
              strokeOpacity="0.25"
              animate={{ opacity: [0.35, 0.45, 0.35] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Subtle pyramid edges */}
            <line x1="50" y1="20" x2="0" y2="95" stroke="#EF4444" strokeWidth="0.5" opacity="0.25" />
            <line x1="50" y1="20" x2="100" y2="95" stroke="#EF4444" strokeWidth="0.5" opacity="0.25" />
            <line x1="0" y1="95" x2="100" y2="95" stroke="#DC2626" strokeWidth="0.8" opacity="0.2" />
          </svg>
        </motion.div>

        {/* Inverted Pyramid - Pointing Down (Above Scroll Button) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute bottom-32 left-1/2 -translate-x-1/2 w-[200px] h-[200px]"
          style={{
            perspective: '800px',
            transformStyle: 'preserve-3d',
          }}
        >
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full opacity-25"
            style={{
              filter: 'drop-shadow(0 10px 30px rgba(220, 38, 38, 0.3))',
            }}
          >
            {/* Inverted pyramid pointing down */}
            {/* Top face (base) */}
            <motion.path
              d="M 40 40 L 160 40 L 160 80 L 40 80 Z"
              fill="url(#pyramidSide1)"
              stroke="#DC2626"
              strokeWidth="0.5"
              strokeOpacity="0.4"
            />

            {/* Left face */}
            <motion.path
              d="M 40 40 L 100 160 L 40 80 Z"
              fill="url(#pyramidSide2)"
              stroke="#EF4444"
              strokeWidth="0.5"
              strokeOpacity="0.3"
              animate={{ opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Right face */}
            <motion.path
              d="M 160 40 L 160 80 L 100 160 Z"
              fill="url(#pyramidGradient)"
              stroke="#DC2626"
              strokeWidth="0.5"
              strokeOpacity="0.3"
              animate={{ opacity: [0.6, 0.4, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            />

            {/* Front face */}
            <motion.path
              d="M 40 80 L 160 80 L 100 160 Z"
              fill="url(#pyramidGradient)"
              stroke="#EF4444"
              strokeWidth="1"
              strokeOpacity="0.5"
              animate={{ opacity: [0.5, 0.7, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Sharp edges */}
            <line x1="40" y1="40" x2="100" y2="160" stroke="#DC2626" strokeWidth="0.5" opacity="0.4" />
            <line x1="160" y1="40" x2="100" y2="160" stroke="#DC2626" strokeWidth="0.5" opacity="0.4" />
            <line x1="40" y1="80" x2="100" y2="160" stroke="#EF4444" strokeWidth="1" opacity="0.3" />
            <line x1="160" y1="80" x2="100" y2="160" stroke="#EF4444" strokeWidth="1" opacity="0.3" />
          </svg>
        </motion.div>

        {/* Orbital rings - solar system effect */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ringGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DC2626" stopOpacity="0" />
              <stop offset="50%" stopColor="#DC2626" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="ringGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EF4444" stopOpacity="0" />
              <stop offset="50%" stopColor="#EF4444" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Rotating orbital ring 1 */}
          <motion.ellipse
            cx="50%"
            cy="50%"
            rx="30%"
            ry="20%"
            fill="none"
            stroke="url(#ringGradient1)"
            strokeWidth="1"
            opacity="0.4"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '50% 50%' }}
          />

          {/* Rotating orbital ring 2 - opposite direction */}
          <motion.ellipse
            cx="50%"
            cy="50%"
            rx="45%"
            ry="30%"
            fill="none"
            stroke="url(#ringGradient2)"
            strokeWidth="0.5"
            opacity="0.3"
            animate={{ rotate: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '50% 50%' }}
          />

          {/* Inner ring */}
          <motion.ellipse
            cx="50%"
            cy="50%"
            rx="20%"
            ry="12%"
            fill="none"
            stroke="url(#ringGradient1)"
            strokeWidth="0.5"
            opacity="0.5"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '50% 50%' }}
          />
        </svg>

        {/* Pulsing energy core */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.5) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />

        {/* Subtle stars */}
        <div className="absolute inset-0 opacity-60" style={{
          backgroundImage: `
            radial-gradient(2px 2px at 20% 30%, rgba(255, 255, 255, 0.8), transparent),
            radial-gradient(1px 1px at 60% 70%, rgba(239, 68, 68, 0.6), transparent),
            radial-gradient(1px 1px at 50% 50%, rgba(255, 255, 255, 0.4), transparent),
            radial-gradient(2px 2px at 80% 10%, rgba(220, 38, 38, 0.5), transparent),
            radial-gradient(1px 1px at 90% 60%, rgba(255, 255, 255, 0.3), transparent),
            radial-gradient(2px 2px at 33% 50%, rgba(239, 68, 68, 0.4), transparent),
            radial-gradient(1px 1px at 70% 40%, rgba(255, 255, 255, 0.5), transparent)
          `,
          backgroundSize: '100% 100%',
        }} />
      </div>

      {/* Name - centered vertically (on top of pyramid) */}
      <div className="flex-1 flex items-center justify-center relative z-10 w-full px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: [0.6, 0.05, 0.01, 0.9],
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative inline-block cursor-default"
          style={{
            padding: '30px 0',
          }}
        >
          {/* English name */}
          <motion.h1
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight whitespace-nowrap"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #ff6b6b 40%, #DC2626 80%, #991B1B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: `
                0 0 40px rgba(239, 68, 68, 0.8),
                0 10px 30px rgba(0, 0, 0, 0.5),
                0 20px 60px rgba(220, 38, 38, 0.6)
              `,
              filter: `
                drop-shadow(0 5px 15px rgba(0, 0, 0, 0.4))
                drop-shadow(0 0 40px rgba(239, 68, 68, 0.5))
              `,
            }}
          >
            UDIRNO
          </motion.h1>

          {/* Bengali name */}
          <motion.h1
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute inset-0 text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight flex items-center justify-center whitespace-nowrap"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #ff6b6b 40%, #DC2626 80%, #991B1B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: `
                0 0 40px rgba(239, 68, 68, 0.8),
                0 10px 30px rgba(0, 0, 0, 0.5),
                0 20px 60px rgba(220, 38, 38, 0.6)
              `,
              filter: `
                drop-shadow(0 5px 15px rgba(0, 0, 0, 0.4))
                drop-shadow(0 0 40px rgba(239, 68, 68, 0.5))
              `,
              pointerEvents: 'none',
              paddingTop: '30px',
            }}
          >
            উদীর্ণ
          </motion.h1>
        </motion.div>
      </div>

      {/* Scroll Indicator - at bottom (aligned with inverted pyramid point) */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        onClick={scrollToProjects}
        className="group relative z-10 mb-8"
        aria-label="Scroll to projects"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-gray-300 group-hover:text-red-400 transition-colors font-medium">
            Scroll to explore
          </span>
          <ChevronDown className="w-5 h-5 text-gray-300 group-hover:text-red-400 transition-colors" />
        </motion.div>
      </motion.button>
    </section>
  );
}
