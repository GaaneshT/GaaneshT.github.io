// Blog post integration with blog.gaanesh.com
//
// Strategy:
//   1. Ship a curated fallback so the Writing section is never empty and works
//      without JS or when the feed is unreachable.
//   2. On mount, fetch the prerendered manifest at
//      https://blog.gaanesh.com/posts.json and overlay it. The blog repo ships
//      that endpoint via src/routes/posts.json/+server.ts.

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO 8601, e.g. "2025-09-28"
  readingTime?: number | string | null;
  categories?: string[];
  url: string;
};

export const BLOG_ORIGIN = 'https://blog.gaanesh.com';
export const POSTS_MANIFEST = `${BLOG_ORIGIN}/posts.json`;

/** Curated fallback. Keep roughly in sync with what is published on the blog. */
export const fallbackPosts: Post[] = [
  {
    slug: 'ai-red-teaming',
    title: 'OSAI: Did AI Actually Make Me Better at Red Teaming?',
    excerpt:
      'Notes from the OffSec AI Red Teamer (OSAI) exam: where AI assistants helped most when I was stuck, and where they never replaced operator judgment.',
    date: '2026-08-07',
    readingTime: 10,
    categories: ['OSAI', 'AI Security'],
    url: `${BLOG_ORIGIN}/ai-red-teaming/`
  },
  {
    slug: 'cddc26-payment',
    title: 'payment - CDDC 2026',
    excerpt:
      'From zero to RCE on a custom-allocator C++ server: an Overwrite-UAF, a hand-rolled slab page-recycle attack, and a wrap-defence that only validates the start of a read.',
    date: '2026-05-18',
    readingTime: 25,
    categories: ['CTF', 'Pwn'],
    url: `${BLOG_ORIGIN}/cddc26-payment/`
  },
  {
    slug: 'new-beginnings',
    title: 'Now that things are ending, was it worth it?',
    excerpt: 'Final semester thoughts: grinding, FOMO, and learning to find balance.',
    date: '2025-09-28',
    readingTime: 8,
    categories: ['NUS', 'Reflections'],
    url: `${BLOG_ORIGIN}/new-beginnings/`
  },
  {
    slug: 'uni-life',
    title: "What I've been up to in NUS",
    excerpt: 'From CSA to NUS, a glimpse into my life.',
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

/** "Sep 28, 2025" */
export const formatDate = (iso: string | null | undefined): string => {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};
