<script lang="ts">
  import { onMount } from 'svelte';
  import { identity, profileImage, socialLinks, stats } from '$lib/content';
  import { reveal } from '$lib/actions/reveal';

  // Typed lines for the terminal hero
  const lines = [
    { prompt: '$', cmd: 'whoami' },
    { out: identity.name },
    { out: `${identity.title} · ${identity.location}` },
    { prompt: '$', cmd: 'cat status.txt' },
    { out: identity.subtitle },
    { prompt: '$', cmd: 'echo $TAGLINE' },
    { out: identity.punchline },
    { prompt: '$', cmd: '_' }
  ];

  let visibleCount = 0;
  let mounted = false;
  const reducedMotion =
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  onMount(() => {
    mounted = true;
    if (reducedMotion) {
      visibleCount = lines.length;
      return;
    }
    let i = 0;
    const tick = () => {
      visibleCount = ++i;
      if (i < lines.length) setTimeout(tick, 380);
    };
    setTimeout(tick, 250);
  });
</script>

<section
  id="hero"
  use:reveal={{ distance: 32 }}
  class="relative overflow-hidden rounded-3xl border border-ghost-200/60 bg-white/85 p-6 shadow-2xl backdrop-blur-xl transition-colors dark:border-ink-600/60 dark:bg-ink-900/70 sm:p-8 md:p-10"
>
  <!-- Inner ambient flourish -->
  <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-neon-cyan/[0.06] via-transparent to-neon-violet/[0.06]"></div>
  <div class="pointer-events-none absolute -right-24 top-10 hidden h-72 w-72 rounded-full bg-neon-cyan/10 blur-3xl md:block"></div>

  <div class="relative z-10 grid gap-10 md:grid-cols-[minmax(0,1fr)_320px] md:items-center">
    <!-- Terminal panel -->
    <div class="order-2 md:order-1" use:reveal={{ delay: 80, distance: 28 }}>
      <div class="overflow-hidden rounded-2xl border border-ghost-200/70 bg-ghost-50 shadow-inset-line dark:border-ink-600 dark:bg-ink-950/80">
        <!-- Window chrome -->
        <div class="flex items-center justify-between gap-3 border-b border-ghost-200/70 bg-white/60 px-3.5 py-2 font-mono text-[11px] text-ghost-500 dark:border-ink-600 dark:bg-ink-900/80 dark:text-ghost-400">
          <div class="flex items-center gap-1.5">
            <span class="h-2.5 w-2.5 rounded-full bg-neon-rose/70"></span>
            <span class="h-2.5 w-2.5 rounded-full bg-neon-amber/70"></span>
            <span class="h-2.5 w-2.5 rounded-full bg-neon-green/70"></span>
          </div>
          <span class="truncate">{identity.handle}@{identity.host}:~</span>
          <span class="inline-flex items-center gap-1.5"><span class="dot-live"></span> live</span>
        </div>

        <!-- Terminal body -->
        <div class="min-h-terminal px-4 py-3.5 font-mono text-[13px] leading-relaxed sm:text-sm">
          {#each lines.slice(0, visibleCount) as line, i (i)}
            {#if line.prompt}
              <div class="text-ghost-700 dark:text-ghost-200">
                <span class="text-neon-green">{identity.handle}</span><span class="text-ghost-400">@</span><span class="text-neon-violet">{identity.host}</span>
                <span class="text-ghost-400">:~$</span>
                <span class="ml-2 {i === visibleCount - 1 && line.cmd === '_' ? 'cursor' : ''} text-ink-900 dark:text-ghost-100">{line.cmd === '_' ? '' : line.cmd}</span>
              </div>
            {:else if line.out}
              <div class="pl-1 text-ink-900 dark:text-ghost-100 {i === 1 ? 'text-base sm:text-lg font-semibold tracking-tight glow-text' : ''}">
                {line.out}
              </div>
            {/if}
          {/each}
          {#if !mounted}
            <!-- Static SSR fallback so content is readable without JS -->
            <div class="text-ghost-700 dark:text-ghost-200"><span class="text-neon-green">{identity.handle}</span><span class="text-ghost-400">@</span><span class="text-neon-violet">{identity.host}</span><span class="text-ghost-400">:~$</span> <span class="ml-2 text-ink-900 dark:text-ghost-100">whoami</span></div>
            <div class="pl-1 text-base sm:text-lg font-semibold tracking-tight text-ink-900 dark:text-ghost-100">{identity.name}</div>
            <div class="pl-1 text-ink-900 dark:text-ghost-100">{identity.title} · {identity.location}</div>
            <div class="pl-1 text-ink-900 dark:text-ghost-100">{identity.subtitle}</div>
            <div class="pl-1 text-ink-900 dark:text-ghost-100">{identity.punchline}</div>
          {/if}
        </div>
      </div>

      <!-- CTAs -->
      <div class="mt-6 flex flex-wrap items-center gap-3" use:reveal={{ delay: 140, distance: 20 }}>
        <a
          href="https://blog.gaanesh.com"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink-900 px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-ink-700 dark:bg-ghost-100 dark:text-ink-900 dark:hover:bg-white"
        >
          <span aria-hidden="true" class="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition group-hover:opacity-80 animate-shimmer"></span>
          <i class="fa-solid fa-feather text-xs" aria-hidden="true"></i>
          Read the blog
        </a>
        <a
          href="https://tools.gaanesh.com"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-full border border-ghost-200/70 bg-white/90 px-5 py-2 text-sm font-medium text-ink-900 shadow-sm transition hover:-translate-y-0.5 hover:border-neon-cyan/50 dark:border-ink-600/70 dark:bg-ink-800/70 dark:text-ghost-100"
        >
          <i class="fa-solid fa-screwdriver-wrench text-xs" aria-hidden="true"></i>
          tools.gaanesh.com
        </a>

        <div class="flex items-center gap-1.5 pl-1">
          {#each socialLinks.filter((s) => ['GitHub', 'LinkedIn', 'X'].includes(s.label)) as social}
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ghost-200/70 bg-white/90 text-ghost-500 transition hover:-translate-y-0.5 hover:border-neon-cyan/50 hover:text-ink-900 dark:border-ink-600/70 dark:bg-ink-800/70 dark:hover:text-white"
            >
              <i class={social.icon} aria-hidden="true"></i>
            </a>
          {/each}
        </div>
      </div>

      <!-- Stats row -->
      <div class="mt-6 grid grid-cols-3 gap-3" use:reveal={{ delay: 200, distance: 18 }}>
        {#each stats as stat}
          <div class="rounded-xl border border-ghost-200/70 bg-white/90 px-3 py-3 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-neon-cyan/40 dark:border-ink-600/70 dark:bg-ink-800/60">
            <p class="font-mono text-xl font-semibold text-ink-900 dark:text-white sm:text-2xl">{stat.value}</p>
            <p class="mt-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-ghost-500 dark:text-ghost-400 sm:text-[11px] sm:tracking-[0.2em]">{stat.label}</p>
          </div>
        {/each}
      </div>
    </div>

    <!-- Portrait -->
    <div class="order-1 flex justify-center md:order-2 md:justify-end" use:reveal={{ delay: 120, distance: 24 }}>
      <div class="group relative">
        <!-- Outer glow -->
        <div class="absolute -inset-3 rounded-3xl bg-gradient-to-br from-neon-cyan/30 via-neon-violet/20 to-neon-rose/20 opacity-60 blur-2xl transition group-hover:opacity-90"></div>
        <div class="relative h-64 w-64 max-w-full overflow-hidden rounded-3xl border border-ghost-200/70 bg-gradient-to-br from-ghost-100 to-white p-2 shadow-xl transition animate-float dark:border-ink-600 dark:from-ink-800 dark:to-ink-900 sm:h-72 sm:w-72">
          <div class="pointer-events-none absolute inset-0 fx-grid opacity-20"></div>
          <img
            src={profileImage}
            alt="Portrait of {identity.name}"
            class="relative h-full w-full rounded-2xl object-cover"
            loading="eager"
            decoding="async"
          />
          <!-- corner brackets for that terminal feel -->
          <span class="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-neon-cyan"></span>
          <span class="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-neon-cyan"></span>
          <span class="pointer-events-none absolute left-3 bottom-3 h-3 w-3 border-l border-b border-neon-cyan"></span>
          <span class="pointer-events-none absolute right-3 bottom-3 h-3 w-3 border-r border-b border-neon-cyan"></span>
        </div>
        <div class="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-ghost-500">// available · responds fast</div>
      </div>
    </div>
  </div>
</section>
