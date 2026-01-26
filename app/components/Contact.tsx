'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Link as LinkIcon } from 'lucide-react';

// Custom Medium icon component
function MediumIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/udirno/',
    color: 'hover:text-blue-500',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/udirno',
    color: 'hover:text-gray-300',
  },
  {
    name: 'Medium',
    icon: MediumIcon,
    href: 'https://medium.com/@udirno',
    color: 'hover:text-green-400',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:udirno@gmail.com',
    color: 'hover:text-red-500',
  },
  {
    name: 'LinkTree',
    icon: LinkIcon,
    href: 'https://linktr.ee/udirno',
    color: 'hover:text-green-500',
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[60vh] flex items-center justify-center py-20 px-6 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold">
            Let&apos;s <span className="text-red-600">Connect</span>
          </h2>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.name === 'Email' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ scale: 1.1, y: -5 }}
              className={`flex flex-col items-center gap-2 p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-red-600 transition-all ${link.color} group`}
            >
              <link.icon className="w-8 h-8" />
              <span className="text-sm font-medium">{link.name}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-8"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Udirno Chaudhuri. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Built with{' '}
            <a
              href="https://claude.ai/code"
              className="text-red-600 hover:text-red-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Claude Code
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
