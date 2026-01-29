import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const metadata = {
  title: 'About - Udirno Chaudhuri',
  description: 'About Udirno Chaudhuri - Data Analyst & Engineer',
};

export default function About() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Header />

      <article className="px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* About Me Section */}
          <section>
            <h2 className="text-xl font-medium mb-4">About Me</h2>
            <div className="text-gray-600 dark:text-gray-400 space-y-3">
              {/* Placeholder for content */}
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  );
}
