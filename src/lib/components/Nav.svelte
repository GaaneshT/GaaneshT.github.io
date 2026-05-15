<script lang="ts">
  import { onMount } from 'svelte';
  import { navLinks, identity } from '$lib/content';
  import { reveal } from '$lib/actions/reveal';

  export let onOpenPalette: () => void = () => {};

  let isOpen = false;
  let theme: 'dark' | 'light' = 'dark';
  let mounted = false;

  const applyTheme = (t: 'dark' | 'light') => {
    if (typeof document === 'undefined') return;
    document.documentElement.classList.toggle('dark', t === 'dark');
    document.body.classList.toggle('dark', t === 'dark');
  };

  const toggleTheme = () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    applyTheme(theme);
    try { localStorage.setItem('theme', theme); } catch {}
  };

  onMount(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') {
        theme = saved;
      } else {
        const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true;
        theme = prefersDark ? 'dark' : 'light';
      }
    } catch {}
    applyTheme(theme);
    mounted = true;
  });
</script>

<nav
  use:reveal={{ delay: 100, distance: 12 }}
  class="fixed left-1/2 top-4 z-40 w-[min(96%,1100px)] -translate-x-1/2 border border-ghost-200/60 bg-white/85 px-4 py-2 backdrop-blur-md shadow-lg transition-colors dark:border-ink-600/60 dark:bg-ink-900/70 sm:px-5 {isOpen ? 'rounded-2xl' : 'rounded-full'}"
  aria-label="Primary"
>
  <div class="flex items-center justify-between gap-3">
    <a
      href="#top"
      class="group flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-ghost-500 transition-colors hover:text-ink-900 dark:hover:text-white"
    >
      <span class="inline-flex h-6 w-6 items-center justify-center rounded-md bg-ink-900 text-neon-cyan font-bold leading-none ring-1 ring-neon-cyan/30 dark:bg-ink-700">
        ~
      </span>
      <span class="hidden sm:inline">{identity.handle}@{identity.host}</span>
      <span class="hidden sm:inline text-neon-cyan animate-blink">▌</span>
    </a>

    <div class="hidden md:flex items-center gap-1">
      {#each navLinks as link}
        <a
          href={`#${link.id}`}
          class="rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-ghost-500 transition-colors hover:bg-ghost-100/60 hover:text-ink-900 dark:hover:bg-ink-700/60 dark:hover:text-white"
        >
          {link.label}
        </a>
      {/each}
    </div>

    <div class="flex items-center gap-1.5">
      <button
        on:click={onOpenPalette}
        class="hidden sm:inline-flex items-center gap-2 rounded-full border border-ghost-200/70 bg-white/80 px-3 py-1.5 text-xs font-medium text-ghost-500 shadow-sm transition hover:border-neon-cyan/40 hover:text-ink-900 dark:border-ink-600/70 dark:bg-ink-800/70 dark:hover:text-white"
        aria-label="Open command palette"
      >
        <i class="fa-solid fa-magnifying-glass text-[10px]" aria-hidden="true"></i>
        <span class="hidden lg:inline">Search</span>
        <span class="kbd">⌘K</span>
      </button>

      <button
        on:click={toggleTheme}
        class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ghost-200/70 bg-white/80 text-ghost-500 transition hover:text-ink-900 dark:border-ink-600/70 dark:bg-ink-800/70 dark:hover:text-white"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {#if mounted}
          <i class="fa-solid {theme === 'dark' ? 'fa-moon' : 'fa-sun'} text-sm" aria-hidden="true"></i>
        {/if}
      </button>

      <button
        on:click={() => (isOpen = !isOpen)}
        class="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-ghost-200/70 bg-white/80 text-ghost-500 transition hover:text-ink-900 dark:border-ink-600/70 dark:bg-ink-800/70 dark:hover:text-white"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        <i class="fa-solid {isOpen ? 'fa-xmark' : 'fa-bars'}" aria-hidden="true"></i>
      </button>
    </div>
  </div>

  {#if isOpen}
    <div class="md:hidden mt-3 flex flex-col gap-1">
      {#each navLinks as link}
        <a
          href={`#${link.id}`}
          on:click={() => (isOpen = false)}
          class="rounded-lg px-3 py-2 font-mono text-sm text-ghost-500 transition hover:bg-ghost-100/60 hover:text-ink-900 dark:hover:bg-ink-700/60 dark:hover:text-white"
        >
          ~/<span class="text-neon-cyan">{link.label}</span>
        </a>
      {/each}
    </div>
  {/if}
</nav>
