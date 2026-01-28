'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-red-600 dark:text-emerald-500">
            404
          </div>
        </div>

        {/* Message */}
        <div>
          <h1 className="text-3xl font-medium mb-4">Page Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          {/* Action Button */}
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-red-600 dark:bg-emerald-500 hover:bg-red-700 dark:hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
