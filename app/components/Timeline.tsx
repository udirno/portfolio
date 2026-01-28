'use client';
import { Post } from '@/lib/mdx';

interface TimelineProps {
  posts: Post[];
}

export function Timeline({ posts }: TimelineProps) {
  if (posts.length === 0) return null;

  // Get date range
  const dates = posts.map(p => new Date(p.date)).sort((a, b) => a.getTime() - b.getTime());
  const earliest = dates[0];
  const latest = dates[dates.length - 1];

  // Calculate months difference
  const monthsDiff = (latest.getFullYear() - earliest.getFullYear()) * 12 +
                     (latest.getMonth() - earliest.getMonth()) + 1;

  // Create timeline with dots
  const timelineWidth = 40; // characters
  const positions = posts.map(post => {
    const postDate = new Date(post.date);
    const postMonths = (postDate.getFullYear() - earliest.getFullYear()) * 12 +
                       (postDate.getMonth() - earliest.getMonth());
    return Math.floor((postMonths / (monthsDiff - 1)) * (timelineWidth - 1));
  });

  // Build timeline string
  let timeline = Array(timelineWidth).fill('─');
  positions.forEach(pos => {
    timeline[pos] = '●';
  });

  // Format date labels
  const startLabel = earliest.toLocaleDateString('en-US', { month: 'short' });
  const endLabel = latest.toLocaleDateString('en-US', { month: 'short' });
  const yearRange = earliest.getFullYear() === latest.getFullYear()
    ? earliest.getFullYear().toString()
    : `${earliest.getFullYear()}-${latest.getFullYear()}`;

  return (
    <section className="px-6 pb-12">
      <div className="max-w-3xl mx-auto">
        <div className="font-mono text-sm">
          <div className="mb-1">Writing log</div>
          <div className="text-red-600 dark:text-emerald-500">
            [{timeline.join('')}] {yearRange}
          </div>
          <div className="mt-1 ml-1">
            {startLabel} {' '.repeat(Math.max(0, timelineWidth - startLabel.length - endLabel.length))} {endLabel}
          </div>
          <div className="mt-3 text-gray-600 dark:text-gray-400">
            {posts.length} {posts.length === 1 ? 'entry' : 'entries'} over {monthsDiff} {monthsDiff === 1 ? 'month' : 'months'}
          </div>
        </div>
      </div>
    </section>
  );
}
