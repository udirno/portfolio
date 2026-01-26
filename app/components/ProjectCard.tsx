'use client';

import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink, BookOpen } from 'lucide-react';
import Image from 'next/image';
import type { Project } from '@/lib/mdx';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Magnetic hover effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: 1.05, z: 50 }}
      className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 cursor-pointer border border-gray-800 hover:border-red-600 transition-all overflow-hidden group w-full md:w-[450px] shadow-2xl hover:shadow-red-900/50"
    >
      {/* Glow Effect */}
      <motion.div
        animate={isHovered ? { opacity: 0.3 } : { opacity: 0 }}
        className="absolute inset-0 bg-gradient-to-br from-red-600 to-transparent blur-xl"
      />

      {/* Content */}
      <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
        <h3 className="text-3xl font-bold mb-4 group-hover:text-red-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-6 text-base leading-relaxed">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs bg-red-600/20 text-red-400 rounded-full border border-red-600/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Date */}
        <p className="text-sm text-gray-500">{project.date}</p>
      </div>

      {/* Hover Indicator */}
      <motion.div
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        className="absolute bottom-4 right-4 text-red-600 text-sm"
      >
        Click to expand →
      </motion.div>
    </motion.div>
  );
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-red-600/30 shadow-2xl shadow-red-600/20"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-600 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <h2 className="text-3xl font-bold mb-4 text-red-600">
          {project.title}
        </h2>

        <p className="text-gray-300 mb-6">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-red-600/20 text-red-400 rounded-full border border-red-600/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Media Section */}
        <div className="mb-6">
          {project.image ? (
            <div className="rounded-lg overflow-hidden border border-gray-800 relative w-full aspect-video">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
          ) : project.video ? (
            <div className="rounded-lg overflow-hidden border border-gray-800 aspect-video">
              {project.video.includes('youtube.com') || project.video.includes('youtu.be') ? (
                <iframe
                  src={project.video}
                  className="w-full h-full"
                  allowFullScreen
                  title={project.title}
                />
              ) : (
                <video
                  src={project.video}
                  controls
                  className="w-full h-full"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ) : project.content && project.content.trim() ? (
            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-3">Starting Prompt</h3>
              <div className="rounded-lg border border-gray-800 bg-gray-950 p-6 max-h-96 overflow-y-auto">
                <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono leading-relaxed select-all">
                  {project.content}
                </pre>
              </div>
            </div>
          ) : (
            <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-12 text-center">
              <div className="flex flex-col items-center gap-4">
                <svg
                  className="w-16 h-16 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-gray-500 text-sm">Demo coming soon</p>
              </div>
            </div>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.github && project.github !== '#' && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
          {project.blog && project.blog !== '#' && (
            <a
              href={project.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Blog
            </a>
          )}
          {project.website && project.website !== '#' && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Website
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
