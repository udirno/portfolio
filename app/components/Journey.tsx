'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function Journey() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine color based on theme (light mode = green, dark mode = red)
  const accentColor = mounted && theme === 'dark' ? '#DC2626' : '#10b981';

  return (
    <section className="px-4 pt-0 pb-8 sm:px-6 sm:pb-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-mono text-emerald-500 dark:text-red-600 transition-colors duration-200 mb-12">Travel</h2>
        <div className="px-8 font-mono text-xs pb-4">
          {/* Year labels spread across timeline - with proper margins */}
          <div className="relative h-4 mb-1 text-gray-400 dark:text-gray-600 transition-colors duration-200">
            <span className="absolute left-[5%] -translate-x-1/2 whitespace-nowrap">Jan 2024</span>
            <span className="absolute left-[50%] -translate-x-1/2 whitespace-nowrap">Jan 2025</span>
            <span className="absolute left-[95%] -translate-x-1/2 whitespace-nowrap">Jan 2026</span>
          </div>

          {/* Vertical tick marks at year boundaries */}
          <div className="relative h-4 mb-1 text-gray-400 dark:text-gray-600 transition-colors duration-200">
            <span className="absolute left-[5%] -translate-x-1/2">│</span>
            <span className="absolute left-[50%] -translate-x-1/2">│</span>
            <span className="absolute left-[95%] -translate-x-1/2">│</span>
          </div>

          {/* Timeline with dots spanning 5% to 95% */}
          <div className="relative h-6 mb-1" style={{ color: accentColor }}>
            <div className="absolute left-[5%] right-[5%] top-1/2 -translate-y-1/2 h-px bg-current"></div>
            <span className="absolute left-[5%] -translate-x-1/2 top-1/2 -translate-y-1/2">●</span>
            <span className="absolute left-[8%] -translate-x-1/2 top-1/2 -translate-y-1/2">●</span>
            <span className="absolute left-[30%] -translate-x-1/2 top-1/2 -translate-y-1/2">●</span>
            <span className="absolute left-[45%] -translate-x-1/2 top-1/2 -translate-y-1/2">●</span>
            <span className="absolute left-[50%] -translate-x-1/2 top-1/2 -translate-y-1/2">●</span>
            <span className="absolute left-[92%] -translate-x-1/2 top-1/2 -translate-y-1/2">●</span>
            <span className="absolute left-[95%] -translate-x-1/2 top-1/2 -translate-y-1/2">●</span>
          </div>

          {/* Airport codes positioned under their dots */}
          <div className="relative h-8" style={{ color: accentColor }}>
            <span className="absolute left-[5%] -translate-x-1/2 top-[-4px]">IXZ</span>
            <span className="absolute left-[8%] -translate-x-1/2 top-[8px]">CCU</span>
            <span className="absolute left-[30%] -translate-x-1/2">GND</span>
            <span className="absolute left-[45%] -translate-x-1/2">GOI</span>
            <span className="absolute left-[50%] -translate-x-1/2">CAI</span>
            <span className="absolute left-[92%] -translate-x-1/2 top-[-4px]">BUD</span>
            <span className="absolute left-[95%] -translate-x-1/2 top-[8px]">VIE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
