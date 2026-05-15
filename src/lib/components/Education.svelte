<script lang="ts">
  import { education } from '$lib/content';
  import { reveal } from '$lib/actions/reveal';
  import PromptHeading from './PromptHeading.svelte';
</script>

<section id="education" use:reveal={{ distance: 24 }} class="space-y-6">
  <PromptHeading path="education" command="cat *.degree" />

  <div class="grid gap-5 md:grid-cols-2" use:reveal={{ delay: 60, distance: 20 }}>
    {#each education as edu, i}
      {@const delay = Math.min(i, 5) * 70}
      <article
        use:reveal={{ delay: 80 + delay, distance: 20 }}
        class="relative overflow-hidden rounded-2xl border border-ghost-200/70 bg-white/90 p-5 shadow-lg transition hover:-translate-y-0.5 hover:border-neon-violet/50 hover:shadow-xl dark:border-ink-600/60 dark:bg-ink-800/60"
      >
        <div class="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-neon-violet via-neon-cyan to-neon-cyan/30"></div>
        <div class="pl-3">
          <h3 class="text-base font-semibold text-ink-900 dark:text-white">{edu.institution}</h3>
          <p class="mt-1 text-sm text-ink-600 dark:text-ghost-300">{edu.degree}</p>
          {#if edu.grade}
            <p class="mt-1 inline-block rounded-md bg-neon-violet/15 px-2 py-0.5 font-mono text-[11px] font-semibold text-neon-violet">
              {edu.grade}
            </p>
          {/if}
          <p class="mt-3 inline-flex items-center gap-1.5 rounded-full border border-ghost-200/70 bg-white/90 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ghost-500 dark:border-ink-600/70 dark:bg-ink-900/60 dark:text-ghost-400">
            <span class="h-1.5 w-1.5 rounded-full bg-neon-cyan"></span>
            {edu.duration}
          </p>
        </div>
      </article>
    {/each}
  </div>
</section>
