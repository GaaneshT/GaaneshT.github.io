<script lang="ts">
  import { identity, focusAreas } from '$lib/content';
  import { reveal } from '$lib/actions/reveal';
  import PromptHeading from './PromptHeading.svelte';
</script>

<section
  id="about"
  use:reveal={{ distance: 24 }}
  class="space-y-6"
>
  <PromptHeading path="whoami" command="--verbose" />

  <div class="grid gap-6 rounded-3xl border border-ghost-200/60 bg-white/85 p-6 shadow-xl backdrop-blur-xl dark:border-ink-600/60 dark:bg-ink-900/60 sm:p-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
    <div class="space-y-4" use:reveal={{ delay: 60, distance: 18 }}>
      {#each identity.about as paragraph}
        <p class="text-pretty text-base leading-relaxed text-ink-700 dark:text-ghost-200">{paragraph}</p>
      {/each}
    </div>

    <div class="grid gap-3" use:reveal={{ delay: 120, distance: 20 }}>
      {#each focusAreas as focus}
        <article class="group relative overflow-hidden rounded-2xl border border-ghost-200/70 bg-white/95 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-neon-cyan/40 hover:shadow-md dark:border-ink-600/70 dark:bg-ink-800/60">
          <div class="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-neon-cyan/0 via-neon-cyan/60 to-neon-cyan/0 opacity-0 transition group-hover:opacity-100"></div>
          <h3 class="font-mono text-sm font-semibold text-ink-900 dark:text-white">
            <span class="text-neon-cyan">›</span> {focus.title}
          </h3>
          <p class="mt-1.5 text-sm text-ink-600 dark:text-ghost-300">{focus.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
