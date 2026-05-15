<script lang="ts">
  import { onMount } from 'svelte';
  import { fallbackPosts, fetchPosts, BLOG_ORIGIN, type Post } from '$lib/posts';
  import { reveal } from '$lib/actions/reveal';
  import PromptHeading from './PromptHeading.svelte';

  let posts: Post[] = fallbackPosts;
  let live = false;

  onMount(async () => {
    const controller = new AbortController();
    const fresh = await fetchPosts(controller.signal);
    if (fresh && fresh.length) {
      posts = fresh;
      live = fresh !== fallbackPosts;
    }
  });

  const formatDate = (iso: string) => {
    if (!iso) return '';
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
  };
</script>

<section id="writing" use:reveal={{ distance: 24 }} class="space-y-6">
  <PromptHeading path="writing" command={`tail -n ${posts.length} blog.gaanesh.com`}>
    {#if live}<span class="text-neon-green">● live</span> from blog.gaanesh.com{:else}from blog.gaanesh.com{/if}
  </PromptHeading>

  <div class="grid gap-5 md:grid-cols-2" use:reveal={{ delay: 60, distance: 20 }}>
    {#each posts.slice(0, 4) as post, i}
      {@const delay = Math.min(i, 4) * 70}
      <a
        use:reveal={{ delay: 80 + delay, distance: 20 }}
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        class="group relative flex flex-col overflow-hidden rounded-2xl border border-ghost-200/70 bg-white/90 p-5 shadow-lg transition hover:-translate-y-1 hover:border-neon-cyan/50 hover:shadow-xl dark:border-ink-600/60 dark:bg-ink-800/60"
      >
        <div class="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-rose opacity-70 transition group-hover:opacity-100"></div>

        <div class="flex items-start justify-between gap-3 font-mono text-[11px] text-ghost-500 dark:text-ghost-400">
          <time datetime={post.date}>{formatDate(post.date)}</time>
          {#if post.readingTime}<span>{post.readingTime} min read</span>{/if}
        </div>

        <h3 class="mt-2 text-lg font-semibold text-balance text-ink-900 transition group-hover:text-neon-cyan dark:text-white">{post.title}</h3>
        <p class="mt-2 flex-1 text-pretty text-sm leading-relaxed text-ink-600 dark:text-ghost-300">{post.excerpt}</p>

        <div class="mt-4 flex flex-wrap items-center justify-between gap-3">
          {#if post.categories?.length}
            <div class="flex flex-wrap gap-1.5">
              {#each post.categories as cat}
                <span class="rounded-full border border-ghost-200/60 bg-ghost-50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-ghost-500 dark:border-ink-600/70 dark:bg-ink-900/60 dark:text-ghost-400">{cat}</span>
              {/each}
            </div>
          {:else}
            <span></span>
          {/if}
          <span class="font-mono text-xs text-neon-cyan transition group-hover:translate-x-0.5">read ↗</span>
        </div>
      </a>
    {/each}
  </div>

  <a
    href={BLOG_ORIGIN}
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center gap-2 self-start rounded-full border border-ghost-200/70 bg-white/90 px-4 py-2 font-mono text-xs font-semibold text-ink-900 transition hover:-translate-y-0.5 hover:border-neon-cyan/50 dark:border-ink-600/60 dark:bg-ink-800/60 dark:text-ghost-100"
  >
    <i class="fa-solid fa-feather text-[10px]" aria-hidden="true"></i>
    full archive on blog.gaanesh.com
    <span aria-hidden="true">↗</span>
  </a>
</section>
