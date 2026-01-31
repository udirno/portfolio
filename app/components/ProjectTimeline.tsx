'use client';
import { Post } from '@/lib/mdx';

interface ProjectTimelineProps {
  posts: Post[];
}

export function ProjectTimeline({ posts }: ProjectTimelineProps) {
  if (posts.length === 0) return null;

  // Group posts by year
  const postsByYear = posts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear().toString();
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {} as Record<string, Post[]>);

  // Sort years descending
  const years = Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a));

  // Format date as "MMM DD"
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const day = date.getDate();
    return `${month} ${day}`;
  };

  return (
    <section className="px-4 pb-0 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {years.map(year => (
          <div key={year} className="mb-16">
            <h2 className="text-sm font-mono text-emerald-500 dark:text-red-600 transition-colors duration-200 mb-8">
              {year}
            </h2>
            <div className="space-y-12">
              {postsByYear[year].map(post => (
                <article key={post.slug} className="grid grid-cols-[80px_1fr] gap-8">
                  {/* Date column */}
                  <time
                    dateTime={post.date}
                    className="font-mono text-sm text-gray-500 dark:text-gray-500 transition-colors duration-200 pt-1"
                  >
                    {formatDate(post.date)}
                  </time>

                  {/* Content column */}
                  <div>
                    {post.mediumUrl ? (
                      <a
                        href={post.mediumUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                      >
                        <h3 className="text-2xl sm:text-3xl font-serif font-normal text-emerald-500 dark:text-red-600 underline decoration-emerald-500/30 dark:decoration-red-600/30 group-hover:decoration-emerald-500 dark:group-hover:decoration-red-600 group-hover:opacity-80 transition-all duration-200">
                          {post.title}
                        </h3>
                      </a>
                    ) : (
                      <h3 className="text-2xl sm:text-3xl font-serif font-normal text-emerald-500 dark:text-red-600 transition-colors duration-200">
                        {post.title}
                      </h3>
                    )}
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
