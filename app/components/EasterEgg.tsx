'use client';

import { useEffect, useState } from 'react';

export function EasterEgg() {
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [activated, setActivated] = useState(false);

  const konamiCode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === konamiCode[konamiIndex]) {
        setKonamiIndex(prev => prev + 1);
      } else {
        setKonamiIndex(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiIndex]);

  useEffect(() => {
    if (konamiIndex === konamiCode.length && !activated) {
      setActivated(true);
      document.documentElement.style.transform = 'rotate(180deg)';
      document.documentElement.style.transition = 'transform 0.5s ease';

      setTimeout(() => {
        document.documentElement.style.transform = '';
        setActivated(false);
        setKonamiIndex(0);
      }, 2000);
    }
  }, [konamiIndex, activated]);

  return null;
}
