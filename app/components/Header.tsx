'use client';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const [showBengali, setShowBengali] = useState(false);
  const pathname = usePathname();

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
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className={`text-sm transition-colors ${
                pathname === '/'
                  ? 'text-red-600 dark:text-emerald-500'
                  : 'text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-emerald-500'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm transition-colors ${
                pathname === '/about'
                  ? 'text-red-600 dark:text-emerald-500'
                  : 'text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-emerald-500'
              }`}
            >
              About
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
