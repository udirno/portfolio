import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const metadata = {
  title: 'Projects - Udirno Chaudhuri',
  description: 'GitHub repositories and projects by Udirno Chaudhuri',
};

const projects = [
  {
    name: 'SoundAtlas',
    description: 'A world map of where my music comes from. Resolves 3,000+ artists from my Spotify library to their country of origin via MusicBrainz, plots them on Mapbox colored by top genre per country, and includes a Claude chat panel for asking questions about the data.',
    tags: ['Mapbox GL', 'PostgreSQL', 'MusicBrainz API', 'Async SQLAlchemy', 'Redis'],
    githubUrl: 'https://github.com/udirno/soundatlas',
    liveUrl: 'https://soundatlas-pi.vercel.app',
    blogUrl: 'https://medium.com/@udirno/soundatlas-a-map-of-my-music-taste-0bc89ab6378f',
    accentColor: 'bg-gray-500',
  },
  {
    name: 'Cardly',
    description: 'AI-powered greeting card app that generates personalized copy with Claude and renders it across 30 hand-built SVG templates spanning 15 occasions. Supports inline editing, PNG export, and shareable links with a 30-day TTL — no account required.',
    tags: ['Next.js', 'Claude API', 'Supabase', 'TypeScript', 'SVG/CSS'],
    githubUrl: 'https://github.com/udirno/cardly',
    liveUrl: 'https://cardly-git-main-udirnos-projects.vercel.app',
    accentColor: 'bg-gray-500',
  },
  {
    name: 'Document Intelligence Agent',
    description: 'Built a document intelligence agent at AWS AI Builder Lab using router-specialist pattern. Processes natural language queries about purchase orders, invoices, and catalogs—returns structured JSON with validated extraction. Deployed on AWS Bedrock with LlamaIndex orchestration.',
    tags: ['AWS Bedrock', 'LlamaIndex', 'AgentCore', 'Coder'],
    blogUrl: 'https://medium.com/@udirno/building-a-document-intelligence-agent-on-aws-e3f09b2dc295',
    certificateUrl: 'https://www.aicamp.ai/index/certificate/W2026021314udch',
    accentColor: 'bg-gray-500',
  },
  {
    name: 'JobDigest',
    description: 'Chrome extension that automates job search with AI-powered scoring. Fetches jobs daily from multiple APIs, scores 0-100 based on resume match using Claude, generates cover letters, and tracks applications—all running locally.',
    tags: ['Chrome Extension', 'Claude API', 'Vanilla JS', 'Local-First', 'Job Search'],
    githubUrl: 'https://github.com/udirno/jobdigest',
    blogUrl: 'https://medium.com/@udirno/jobdigest-custom-ai-scored-job-search-in-a-chrome-extension-d14aef6025be',
    accentColor: 'bg-gray-500',
  },
  {
    name: 'Argument Decomposer',
    description: 'Built a multi-framework analysis system applying Toulmin methodology to decompose arguments into claims, warrants, and rebuttals across ethical dimensions.',
    tags: ['FastAPI', 'Toulmin Model', 'Ethical Frameworks', 'Argument Mining'],
    githubUrl: 'https://github.com/udirno/argument-decomposer',
    blogUrl: 'https://medium.com/@udirno/building-an-ai-system-that-argues-with-itself-c609270c78e4',
    accentColor: 'bg-gray-500',
  },
  {
    name: 'LyricLens',
    description: 'Evaluated 5 retrieval optimization approaches across 3,400+ multilingual songs, benchmarking against manually audited ground truth to achieve 24.7% Recall@5.',
    tags: ['ChromaDB', 'Sentence Transformers', 'RAG', 'Multilingual', 'Benchmarking'],
    githubUrl: 'https://github.com/udirno/lyric-lens',
    blogUrl: 'https://medium.com/@udirno/lyriclens-4857aafca3ef',
    accentColor: 'bg-gray-400',
  },
  {
    name: 'Portfolio Website',
    description: 'Iterative AI-assisted development workflow — built and deployed a Next.js portfolio using Cursor and Claude Code, treating the site itself as a systems design exercise.',
    tags: ['Next.js', 'TypeScript', 'Cursor', 'AI-Assisted Dev', 'Deployment'],
    githubUrl: 'https://github.com/udirno/portfolio',
    accentColor: 'bg-gray-600',
  },
  {
    name: 'Gmail Promo Agent',
    description: 'Designed a local-first pipeline using Claude to parse email threads, extract promotional codes, and surface them into a searchable dashboard — zero data leaves the machine.',
    tags: ['Claude API', 'Gmail API', 'Python', 'Local-First Architecture', 'Dashboard'],
    githubUrl: 'https://github.com/udirno/gmail-promo-agent',
    blogUrl: 'https://medium.com/@udirno/how-i-built-a-gmail-promo-agent-with-claude-in-one-day-378562474170',
    accentColor: 'bg-gray-500',
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div
                  key={project.name}
                  className="group flex flex-col border border-gray-800 dark:border-gray-200 transition-all duration-200 hover:shadow-lg hover:scale-[1.01]"
                >
                  {/* Accent bar */}
                  <div className={`h-0.5 ${project.accentColor} dark:${project.accentColor}`} />

                  {/* Content */}
                  <div className="p-6 space-y-4 flex flex-col flex-1">
                    {/* Title */}
                    <h3 className="text-xl font-serif font-medium text-white dark:text-black transition-colors duration-200">
                      {project.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 dark:text-gray-600 text-sm leading-relaxed transition-colors duration-200">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="font-mono text-xs text-gray-500 dark:text-gray-500 transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 text-sm pt-2 mt-auto">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-emerald-500 dark:text-red-600 hover:opacity-80 transition-all duration-200"
                        >
                          GitHub
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-emerald-500 dark:text-red-600 hover:opacity-80 transition-all duration-200"
                        >
                          Try It
                        </a>
                      )}
                      {project.blogUrl && (
                        <a
                          href={project.blogUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-emerald-500 dark:text-red-600 hover:opacity-80 transition-all duration-200"
                        >
                          Blog
                        </a>
                      )}
                      {project.certificateUrl && (
                        <a
                          href={project.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-emerald-500 dark:text-red-600 hover:opacity-80 transition-all duration-200"
                        >
                          Certificate
                        </a>
                      )}
                    </div>
                  </div>
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
