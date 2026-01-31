'use client';
import { useState, useEffect } from 'react';
import { Header } from './Header';
import { Now } from './Now';
import { ProjectTimeline } from './ProjectTimeline';
import { Journey } from './Journey';
import { Footer } from './Footer';
import { IntroAnimation } from './IntroAnimation';
import { Post } from '@/lib/mdx';

interface HomePageProps {
  posts: Post[];
}

export function HomePage({ posts }: HomePageProps) {
  const [showIntro, setShowIntro] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    // Check if intro has been shown this session
    const hasSeenIntro = sessionStorage.getItem('intro-shown');

    if (!hasSeenIntro) {
      setShowIntro(true);
      sessionStorage.setItem('intro-shown', 'true');
    } else {
      setIntroComplete(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setIntroComplete(true);
  };

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      <main
        className={`min-h-screen bg-black dark:bg-white text-white dark:text-black transition-all duration-700 ${
          introComplete ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Header />
        <Now />
        <ProjectTimeline posts={posts} />
        <Journey />
        <Footer />
      </main>
    </>
  );
}
