'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error caught by boundary:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        {/* Error Icon */}
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-red-600/20 dark:bg-emerald-500/20 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-red-600 dark:text-emerald-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl font-medium mb-4">Something went wrong</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          An unexpected error occurred. Don&apos;t worry, we&apos;re on it.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-red-600 dark:bg-emerald-500 hover:bg-red-700 dark:hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="px-6 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors"
          >
            Go home
          </a>
        </div>

        {/* Debug Info (only in development) */}
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left">
            <summary className="text-sm text-gray-500 cursor-pointer hover:text-gray-400">
              Error details
            </summary>
            <pre className="mt-4 p-4 bg-gray-100 dark:bg-gray-900 rounded text-xs text-red-600 dark:text-red-400 overflow-auto">
              {error.message}
              {error.digest && `\nDigest: ${error.digest}`}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
