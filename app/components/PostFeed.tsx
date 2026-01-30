'use client';
import { Post } from '@/lib/mdx';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface PostFeedProps {
  posts: Post[];
}

export function PostFeed({ posts }: PostFeedProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Group posts by year
  const postsByYear = posts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear().toString();
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {} as Record<string, Post[]>);

  // Sort years descending
  const years = Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a));

  // Determine title color based on theme
  const titleColor = mounted && theme === 'light' ? '#DC2626' : '#10b981';

  return (
    <section className="px-4 pb-12 sm:px-6 sm:pb-16 md:pb-24">
      <div className="max-w-3xl mx-auto">
        {years.map(year => (
          <div key={year} className="mb-24">
            <h2 className="text-xl sm:text-2xl font-serif font-semibold mb-8">{year}</h2>
            <div className="space-y-16">
              {postsByYear[year].map(post => (
                <article key={post.slug}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-4 mb-2">
                    {post.mediumUrl ? (
                      <a
                        href={post.mediumUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg sm:text-xl font-serif font-medium text-red-600 dark:text-emerald-500 hover:underline transition-colors"
                      >
                        {post.title}
                      </a>
                    ) : (
                      <span
                        className="text-lg sm:text-xl font-serif font-medium transition-colors"
                        style={{ color: titleColor }}
                      >
                        {post.title}
                      </span>
                    )}
                    <time
                      dateTime={post.date}
                      className="font-mono text-xs sm:text-sm tabular-nums text-gray-600 dark:text-gray-400 whitespace-nowrap"
                    >
                      {post.date}
                    </time>
                  </div>
                  {post.excerpt && (
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {post.excerpt}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 items-center">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-gray-500 dark:text-gray-500"
                      >
                        #{tag.toLowerCase().replace(/\s+/g, '')}
                      </span>
                    ))}
                    <span className="text-xs font-mono text-gray-400 dark:text-gray-600">
                      · {post.readingTime} min
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
