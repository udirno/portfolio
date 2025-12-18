'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-xl shadow-2xl shadow-red-900/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl font-bold tracking-tight hover:text-red-600 transition-colors"
          >
            UC
          </motion.button>

          {/* Nav Links */}
          <div className="flex items-center gap-8">
            <motion.button
              onClick={() => scrollToSection('about')}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm hover:text-red-600 transition-colors font-medium"
            >
              About
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm hover:text-red-600 transition-colors font-medium"
            >
              Projects
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm hover:text-red-600 transition-colors font-medium"
            >
              Contact
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
