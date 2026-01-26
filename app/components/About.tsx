'use client';

import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { GraduationCap, Briefcase, type LucideIcon } from 'lucide-react';

interface Badge {
  category: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  dates: string;
  href: string;
}

const badges: Badge[] = [
  {
    category: 'EDUCATION',
    icon: GraduationCap,
    title: 'UC DAVIS',
    subtitle: 'Statistics BS',
    dates: '2019 - 2023',
    href: 'https://www.ucdavis.edu',
  },
  {
    category: 'WORK',
    icon: Briefcase,
    title: 'PAYSTAND',
    subtitle: 'Data Analyst',
    dates: '2023 - Present',
    href: 'https://www.paystand.com',
  },
];

function BadgeCard({ badge, index }: { badge: Badge; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Magnetic hover effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
    <motion.a
      ref={ref}
      href={badge.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.05, z: 50 }}
      className="relative bg-black rounded-2xl p-8 border border-gray-800 hover:border-red-600 transition-all overflow-hidden group w-full md:w-[280px] shadow-2xl hover:shadow-red-900/50"
    >
      {/* Glow Effect */}
      <motion.div
        animate={isHovered ? { opacity: 0.3 } : { opacity: 0 }}
        className="absolute inset-0 bg-gradient-to-br from-red-600 to-transparent blur-xl"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center space-y-3" style={{ transform: 'translateZ(20px)' }}>
        {/* Icon */}
        <badge.icon className="w-12 h-12 text-gray-400 mb-1" />

        {/* Title */}
        <h3 className="text-lg font-bold text-white">
          {badge.title}
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-gray-300">
          {badge.subtitle}
        </p>

        {/* Dates */}
        <p className="text-xs text-gray-500">
          {badge.dates}
        </p>
      </div>

      {/* Hover Indicator */}
      <motion.div
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        className="absolute bottom-4 right-4 text-red-600 text-xs"
      >
        View →
      </motion.div>
    </motion.a>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* About Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12"
        >
          Hi, I&apos;m Udirno. This is an organized brain dump of side projects and creative interests. Glad you&apos;re here.
        </motion.p>

        {/* Experience Label */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6"
        >
          Experience
        </motion.h3>

        {/* Badges */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          {badges.map((badge, index) => (
            <BadgeCard key={badge.category} badge={badge} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
