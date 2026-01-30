import { Header } from './components/Header';
import { Now } from './components/Now';
import { ProjectTimeline } from './components/ProjectTimeline';
import { Journey } from './components/Journey';
import { Footer } from './components/Footer';
import { getAllPosts } from '@/lib/mdx';

export default function Home() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-black dark:bg-white text-white dark:text-black transition-colors duration-200">
      <Header />
      <Now />
      <ProjectTimeline posts={posts} />
      <Journey />
      <Footer />
    </main>
  );
}
