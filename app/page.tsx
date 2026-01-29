import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Now } from './components/Now';
import { PostFeed } from './components/PostFeed';
import { Journey } from './components/Journey';
import { Footer } from './components/Footer';
import { getAllPosts } from '@/lib/mdx';

export default function Home() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Header />
      <Navigation />
      <Now />
      <PostFeed posts={posts} />
      <Journey />
      <Footer />
    </main>
  );
}
