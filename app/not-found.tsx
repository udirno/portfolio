'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        {/* 404 Number with Pyramid Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 relative"
        >
          <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-red-900 relative">
            404
          </div>

          {/* Subtle pyramid decoration */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 -z-10"
          >
            <svg viewBox="0 0 200 200" className="w-full h-full opacity-30">
              <defs>
                <linearGradient id="pyramidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#DC2626" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#991B1B" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <path
                d="M 100 40 L 40 160 L 160 160 Z"
                fill="url(#pyramidGrad)"
                stroke="#DC2626"
                strokeWidth="1"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-gray-400 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          {/* Action Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition-colors"
            >
              Return Home
            </Link>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 text-sm text-gray-600"
        >
          Lost in the pyramids? Let&apos;s get you back.
        </motion.div>
      </div>
    </div>
  );
}
