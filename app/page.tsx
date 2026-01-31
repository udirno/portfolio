import { HomePage } from './components/HomePage';
import { getAllPosts } from '@/lib/mdx';

export default function Home() {
  const posts = getAllPosts();

  return <HomePage posts={posts} />;
}
