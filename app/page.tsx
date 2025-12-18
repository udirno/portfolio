import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { getAllProjects } from '@/lib/mdx';

export default function Home() {
  const projects = getAllProjects();

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <About />
      <Projects projects={projects} />
      <Contact />
    </main>
  );
}
