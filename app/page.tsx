import { Header } from './components/Header';
import { PostFeed } from './components/PostFeed';
import { Journey } from './components/Journey';
import { Footer } from './components/Footer';
import { getAllPosts } from '@/lib/mdx';

export default function Home() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Header />
      <PostFeed posts={posts} />
      <Journey />
      <Footer />
    </main>
  );
}
