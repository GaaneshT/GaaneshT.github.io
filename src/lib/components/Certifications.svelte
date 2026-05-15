<script lang="ts">
  import { certifications } from '$lib/content';
  import { reveal } from '$lib/actions/reveal';
  import PromptHeading from './PromptHeading.svelte';

  const maxVisible = 6;
  let collapsed = true;
  $: visible = collapsed ? certifications.slice(0, maxVisible) : certifications;
</script>

<section id="certifications" use:reveal={{ distance: 24 }} class="space-y-6">
  <PromptHeading path="certs" command="ls -la">
    {certifications.length} earned
  </PromptHeading>

  <div class="grid gap-3 md:grid-cols-2 lg:grid-cols-3" use:reveal={{ delay: 60, distance: 18 }}>
    {#each visible as cert, i}
      {@const delay = Math.min(i, 6) * 50}
      <article
        use:reveal={{ delay: 80 + delay, distance: 18 }}
        class="group flex items-center gap-3 rounded-2xl border border-ghost-200/70 bg-white/90 p-4 shadow-md transition hover:-translate-y-0.5 hover:border-neon-cyan/40 hover:shadow-xl dark:border-ink-600/60 dark:bg-ink-800/60"
      >
        <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-ghost-200/60 bg-white p-1.5 shadow-sm dark:border-ink-600 dark:bg-ink-900/80">
          <img src={cert.logo} alt={cert.name} class="h-full w-full object-contain" loading="lazy" />
        </div>
        <div class="min-w-0">
          <h3 class="font-mono text-xs font-semibold text-neon-cyan">{cert.short}</h3>
          <p class="truncate text-sm font-medium text-ink-900 dark:text-white">{cert.name.split(' · ')[1] ?? cert.name}</p>
          <p class="font-mono text-[10px] text-ghost-500 dark:text-ghost-400">{cert.date}</p>
        </div>
      </article>
    {/each}
  </div>

  {#if certifications.length > maxVisible}
    <button
      class="rounded-full border border-ghost-200/70 bg-white/90 px-4 py-2 font-mono text-xs font-semibold text-ink-900 transition hover:-translate-y-0.5 hover:border-neon-cyan/50 dark:border-ink-600/60 dark:bg-ink-800/60 dark:text-ghost-100"
      on:click={() => (collapsed = !collapsed)}
    >
      {collapsed ? `↓ show ${certifications.length - maxVisible} more` : '↑ collapse'}
    </button>
  {/if}
</section>
