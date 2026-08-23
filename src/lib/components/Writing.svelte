<script lang="ts">
  import { onMount } from 'svelte';
  import { fallbackPosts, fetchPosts, formatDate, BLOG_ORIGIN, type Post } from '$lib/posts';
  import { reveal } from '$lib/actions/reveal';

  let posts: Post[] = fallbackPosts;

  onMount(() => {
    const controller = new AbortController();
    let live = true;

    fetchPosts(controller.signal).then((fresh) => {
      if (live && fresh && fresh.length) posts = fresh;
    });

    return () => {
      live = false;
      controller.abort();
    };
  });
</script>

<section id="writing" use:reveal>
  <h2>Writing</h2>
  <div class="hr"></div>

  {#each posts.slice(0, 3) as post}
    <a class="post" href={post.url} target="_blank" rel="noopener noreferrer">
      <span class="d">{formatDate(post.date)}</span>
      <span class="t">
        {post.title}
        {#if post.excerpt}<em>{post.excerpt}</em>{/if}
      </span>
      {#if post.readingTime}<span class="r">{post.readingTime} min</span>{/if}
    </a>
  {/each}

  <a class="seeall" href={BLOG_ORIGIN} target="_blank" rel="noopener noreferrer">
    All writing <span aria-hidden="true">&rarr;</span>
  </a>
</section>
