import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export const metadata = {
  title: 'About - Udirno Chaudhuri',
  description: 'About Udirno Chaudhuri - Data Analyst & Engineer',
};

export default function About() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Header />
      <Navigation />

      <article className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* About Me Section */}
          <section>
            <h2 className="text-xl font-medium mb-4">About Me</h2>
            <div className="text-gray-600 dark:text-gray-400 space-y-3">
              <p>
                [Your introduction goes here - tell your story]
              </p>
              <p>
                [Add more paragraphs as needed]
              </p>
            </div>
          </section>

          {/* Background Section */}
          <section>
            <h2 className="text-xl font-medium mb-4">Background</h2>
            <div className="text-gray-600 dark:text-gray-400 space-y-3">
              <p>
                Data analyst and engineer building semantic search, automation tools, and ethical reasoning systems.
              </p>
              <p>
                Experience with Python, Claude API, RAG architectures, and modern web technologies.
              </p>
            </div>
          </section>

          {/* Interests Section */}
          <section>
            <h2 className="text-xl font-medium mb-4">Interests</h2>
            <div className="text-gray-600 dark:text-gray-400">
              <ul className="space-y-2">
                <li>• AI and machine learning systems</li>
                <li>• Semantic search and vector databases</li>
                <li>• Ethical reasoning and philosophy</li>
                <li>• Local-first applications</li>
                <li>• Travel and cultural exploration</li>
              </ul>
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-xl font-medium mb-4">Contact</h2>
            <div className="text-gray-600 dark:text-gray-400">
              <p>
                Feel free to reach out via{' '}
                <a
                  href="mailto:hello@udirno.com"
                  className="text-red-600 dark:text-emerald-500 hover:underline"
                >
                  email
                </a>
                {' '}or connect on{' '}
                <a
                  href="https://linkedin.com/in/udirno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 dark:text-emerald-500 hover:underline"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>
          </section>

          {/* Colophon Section */}
          <section>
            <h2 className="text-xl font-medium mb-4">Colophon</h2>
            <div className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
              <p>
                This site is built with Next.js 16, TypeScript, and Tailwind CSS.
              </p>
              <p>
                Hosted on Vercel. Domain registered through Squarespace.
              </p>
              <p>
                The design is intentionally minimal—a research notebook, not a flashy portfolio.
              </p>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  );
}
