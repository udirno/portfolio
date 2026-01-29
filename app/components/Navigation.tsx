'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="px-4 py-6 sm:px-6 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-3xl mx-auto">
        <div className="flex gap-6 text-sm">
          <Link
            href="/"
            className={`transition-colors ${
              pathname === '/'
                ? 'text-red-600 dark:text-emerald-500'
                : 'text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-emerald-500'
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`transition-colors ${
              pathname === '/about'
                ? 'text-red-600 dark:text-emerald-500'
                : 'text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-emerald-500'
            }`}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
