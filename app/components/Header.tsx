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
            className="text-3xl sm:text-4xl font-serif font-normal tracking-tight cursor-pointer transition-all duration-300"
            onMouseEnter={() => setShowBengali(true)}
            onMouseLeave={() => setShowBengali(false)}
          >
            {showBengali ? 'উদীর্ণ' : 'Udirno'}
          </h1>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className={`text-sm transition-colors duration-200 ${
                pathname === '/'
                  ? 'text-emerald-500 dark:text-red-600'
                  : 'text-gray-400 dark:text-gray-600 hover:text-emerald-500 dark:hover:text-red-600'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm transition-colors duration-200 ${
                pathname === '/about'
                  ? 'text-emerald-500 dark:text-red-600'
                  : 'text-gray-400 dark:text-gray-600 hover:text-emerald-500 dark:hover:text-red-600'
              }`}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={`text-sm transition-colors duration-200 ${
                pathname === '/projects'
                  ? 'text-emerald-500 dark:text-red-600'
                  : 'text-gray-400 dark:text-gray-600 hover:text-emerald-500 dark:hover:text-red-600'
              }`}
            >
              Projects
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
