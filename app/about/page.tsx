import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const metadata = {
  title: 'About - Udirno Chaudhuri',
  description: 'About Udirno Chaudhuri - Data Analyst & Engineer',
};

export default function About() {
  return (
    <main className="min-h-screen bg-black dark:bg-white text-white dark:text-black transition-colors duration-200">
      <Header />

      <article className="px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* About Me Section */}
          <section>
            <h2 className="text-xl font-serif font-medium mb-4 text-emerald-500 dark:text-red-600 transition-colors duration-200">About Me</h2>
            <div className="text-gray-400 dark:text-gray-600 transition-colors duration-200 space-y-4">
              <p>
                Hi, I'm Udi—yes, a real person, not a bot. I graduated from UC Davis in 2023 with a B.S. in Statistics.
                I'm curious about data, AI applications, music, and calisthenics. I'll be adding to this site regularly, so stay tuned.
              </p>
              <div className="pt-2">
                <p className="mb-2">Connect:</p>
                <div>
                  <a
                    href="mailto:udirno@gmail.com"
                    className="font-mono text-emerald-500 dark:text-red-600 hover:opacity-80 transition-all duration-200"
                  >
                    udirno@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  );
}
