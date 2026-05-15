<script lang="ts">
  import { socialLinks, identity } from '$lib/content';
  import { reveal } from '$lib/actions/reveal';

  let copied = false;
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(identity.email);
      copied = true;
      setTimeout(() => (copied = false), 1500);
    } catch {
      window.location.href = `mailto:${identity.email}`;
    }
  };

  const year = new Date().getFullYear();
</script>

<footer use:reveal={{ distance: 24 }} class="rounded-3xl border border-ghost-200/70 bg-white/90 p-7 shadow-xl backdrop-blur-xl dark:border-ink-600/60 dark:bg-ink-900/70 sm:p-9">
  <div class="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:items-center">
    <div>
      <p class="font-mono text-xs uppercase tracking-[0.25em] text-neon-cyan">// signal</p>
      <h2 class="mt-2 text-2xl font-semibold text-ink-900 dark:text-white sm:text-3xl">Let’s talk.</h2>
      <p class="mt-3 max-w-md text-pretty text-sm text-ink-600 dark:text-ghost-300">
        Open to all things security! Just let me know~.
      </p>

      <div class="mt-5 flex flex-wrap items-center gap-2">
        <button
          on:click={copy}
          class="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-4 py-2 font-mono text-xs font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-ink-700 dark:bg-ghost-100 dark:text-ink-900 dark:hover:bg-white"
        >
          <i class="fa-solid {copied ? 'fa-check' : 'fa-envelope'} text-[10px]" aria-hidden="true"></i>
          {copied ? 'copied!' : identity.email}
        </button>
        {#each socialLinks as social}
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ghost-200/70 bg-white/90 text-ghost-500 transition hover:-translate-y-0.5 hover:border-neon-cyan/50 hover:text-ink-900 dark:border-ink-600/60 dark:bg-ink-800/70 dark:hover:text-white"
          >
            <i class={social.icon} aria-hidden="true"></i>
          </a>
        {/each}
      </div>
    </div>

    <div class="rounded-xl border border-ghost-200/60 bg-ghost-50/80 p-4 font-mono text-[11px] text-ghost-500 dark:border-ink-600/60 dark:bg-ink-950/70 dark:text-ghost-400">
      <p><span class="text-neon-green">{identity.handle}</span><span class="text-ghost-400">@</span><span class="text-neon-violet">{identity.host}</span><span class="text-ghost-400">:~$</span> <span class="text-ink-900 dark:text-ghost-100">uptime</span></p>
      <p class="mt-1">based in <span class="text-neon-cyan">{identity.location}</span></p>
      <p class="mt-3"><span class="text-neon-green">{identity.handle}</span><span class="text-ghost-400">@</span><span class="text-neon-violet">{identity.host}</span><span class="text-ghost-400">:~$</span> <span class="text-ink-900 dark:text-ghost-100">echo "© {year}"</span></p>
      <p class="mt-1"> {year} {identity.name} <span class="text-neon-cyan">▌</span></p>
    </div>
  </div>
</footer>
