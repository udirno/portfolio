'use client';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [showBengali, setShowBengali] = useState(false);

  return (
    <header className="pt-12 pb-8 px-4 sm:pt-16 sm:pb-12 md:pt-24 md:pb-16 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          <h1
            className="text-3xl sm:text-4xl font-normal tracking-tight cursor-pointer transition-all duration-300"
            onMouseEnter={() => setShowBengali(true)}
            onMouseLeave={() => setShowBengali(false)}
          >
            {showBengali ? 'উদীর্ণ' : 'Udirno'}
          </h1>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
