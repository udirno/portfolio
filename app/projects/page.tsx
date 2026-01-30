import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const metadata = {
  title: 'Projects - Udirno Chaudhuri',
  description: 'GitHub repositories and projects by Udirno Chaudhuri',
};

const projects = [
  {
    name: 'Argument Decomposer',
    url: 'https://github.com/udirno/argument-decomposer',
    description: 'Multi-framework ethical analysis tool using Toulmin methodology',
  },
  {
    name: 'LyricLens',
    url: 'https://github.com/udirno/lyric-lens',
    description: 'Semantic search engine for song lyrics that understands meaning',
  },
  {
    name: 'Portfolio Website',
    url: 'https://github.com/udirno/portfolio',
    description: 'Personal portfolio site built with AI-assisted development',
  },
  {
    name: 'Gmail Promo Agent',
    url: 'https://github.com/udirno/gmail-promo-agent',
    description: 'Local-first AI agent that automatically scans Gmail for promo codes',
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-black dark:bg-white text-white dark:text-black transition-colors duration-200">
      <Header />

      <article className="px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="max-w-3xl mx-auto">
          <section>
            <h2 className="text-xl font-serif font-medium mb-8 text-emerald-500 dark:text-red-600 transition-colors duration-200">
              Projects
            </h2>
            <div className="space-y-3">
              {projects.map((project) => (
                <div key={project.name} className="text-gray-400 dark:text-gray-600 transition-colors duration-200">
                  <span className="font-serif">{project.name}:</span>{' '}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-500 dark:text-red-600 hover:opacity-80 transition-all duration-200"
                  >
                    {project.url}
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  );
}
