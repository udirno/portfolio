export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8 px-4 sm:py-12 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-wrap gap-4 sm:gap-6 text-sm">
          <a
            href="https://github.com/udirno"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-emerald-500 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/udirno"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-emerald-500 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://linktr.ee/udirno"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-emerald-500 transition-colors"
          >
            Linktree
          </a>
          <a
            href="mailto:hello@udirno.com"
            className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-emerald-500 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
