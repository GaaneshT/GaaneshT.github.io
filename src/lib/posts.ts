// Blog post integration with blog.gaanesh.com
//
// Strategy:
//   1. We ship a curated fallback list so the section is never empty and
//      always works without JS / when the feed is unreachable.
//   2. On mount we fetch the prerendered manifest at https://blog.gaanesh.com/posts.json
//      and overlay it — newer/server data wins. The blog repo ships that endpoint
//      via src/routes/posts.json/+server.ts.

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;            // ISO 8601 e.g. "2025-09-28"
  readingTime?: number | string | null;
  categories?: string[];
  url: string;
};

export const BLOG_ORIGIN = 'https://blog.gaanesh.com';
export const POSTS_MANIFEST = `${BLOG_ORIGIN}/posts.json`;

/**
 * Curated fallback — keep this in sync with what's published on the blog.
 * The runtime fetch will overlay this if the manifest is reachable.
 */
export const fallbackPosts: Post[] = [
  {
    slug: 'new-beginnings',
    title: 'Now that things are ending, was it worth it?',
    excerpt: 'Final semester thoughts: grinding, FOMO, and learning to find balance.',
    date: '2025-09-28',
    readingTime: 8,
    categories: ['NUS', 'Reflections', 'Personal Growth'],
    url: `${BLOG_ORIGIN}/new-beginnings/`
  },
  {
    slug: 'uni-life',
    title: 'What I’ve been up to in NUS',
    excerpt: 'From CSA to NUS — a glimpse into my life.',
    date: '2025-03-31',
    readingTime: 10,
    categories: ['NUS', 'Certifications'],
    url: `${BLOG_ORIGIN}/uni-life/`
  }
];

export async function fetchPosts(signal?: AbortSignal): Promise<Post[]> {
  try {
    const res = await fetch(POSTS_MANIFEST, { signal, cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = (await res.json()) as { posts?: Post[] };
    if (!Array.isArray(data.posts) || data.posts.length === 0) throw new Error('empty');
    return data.posts;
  } catch {
    return fallbackPosts;
  }
}
