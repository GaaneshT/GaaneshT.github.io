<script lang="ts">
  import { testimonials } from '$lib/content';
  import { reveal } from '$lib/actions/reveal';
  import PromptHeading from './PromptHeading.svelte';
</script>

<section id="testimonials" use:reveal={{ distance: 24 }} class="space-y-6">
  <PromptHeading path="voices" command="grep -r 'gaanesh' ./team-notes/" />

  <div class="grid gap-5 md:grid-cols-2" use:reveal={{ delay: 60, distance: 20 }}>
    {#each testimonials as t, i}
      {@const delay = Math.min(i, 5) * 80}
      <article
        use:reveal={{ delay: 80 + delay, distance: 20 }}
        class="flex h-full flex-col gap-4 rounded-2xl border border-ghost-200/70 bg-white/90 p-5 shadow-lg transition hover:-translate-y-0.5 hover:border-neon-cyan/40 hover:shadow-xl dark:border-ink-600/60 dark:bg-ink-800/60"
      >
        <div class="flex items-center gap-3">
          {#if t.imageUrl}
            <img src={t.imageUrl} alt={t.name} class="h-12 w-12 rounded-full border border-ghost-200/70 object-cover dark:border-ink-600" loading="lazy" />
          {/if}
          <div class="min-w-0">
            <h3 class="text-sm font-semibold text-ink-900 dark:text-white">{t.name}</h3>
            <p class="font-mono text-[11px] text-ghost-500 dark:text-ghost-400">{t.position}</p>
          </div>
        </div>

        <p class="relative flex-1 whitespace-pre-line text-sm leading-relaxed text-ink-600 dark:text-ghost-200">
          <span class="absolute -left-1 -top-3 font-mono text-2xl text-neon-cyan/60">“</span>
          {t.text}
        </p>

        <div class="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-ghost-500 dark:text-ghost-400">
          {#if t.relationship}<span>{t.relationship}</span>{/if}
          {#if t.date}<span>{t.date}</span>{/if}
        </div>
      </article>
    {/each}
  </div>
</section>
