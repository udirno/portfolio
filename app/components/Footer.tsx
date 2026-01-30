export function Footer() {
  return (
    <footer className="border-t border-gray-800 dark:border-gray-200 py-8 px-4 sm:py-12 sm:px-6 transition-colors duration-200">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-wrap gap-4 sm:gap-6 text-sm">
          <a
            href="https://github.com/udirno"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-emerald-500 dark:text-red-600 hover:opacity-80 transition-all duration-200"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/udirno"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-emerald-500 dark:text-red-600 hover:opacity-80 transition-all duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://linktr.ee/udirno"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-emerald-500 dark:text-red-600 hover:opacity-80 transition-all duration-200"
          >
            Linktree
          </a>
        </div>
      </div>
    </footer>
  );
}
