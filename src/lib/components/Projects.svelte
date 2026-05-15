<script lang="ts">
  import { projects } from '$lib/content';
  import { reveal } from '$lib/actions/reveal';
  import PromptHeading from './PromptHeading.svelte';
</script>

<section id="projects" use:reveal={{ distance: 24 }} class="space-y-6">
  <PromptHeading path="projects" command="git log --oneline">
    {projects.length} entries
  </PromptHeading>

  <div class="grid gap-5 md:grid-cols-2" use:reveal={{ delay: 60, distance: 20 }}>
    {#each projects as project, i}
      {@const delay = Math.min(i, 5) * 70}
      <article
        use:reveal={{ delay: 80 + delay, distance: 20 }}
        class="group relative overflow-hidden rounded-2xl border border-ghost-200/70 bg-white/90 p-5 shadow-lg transition hover:-translate-y-1 hover:border-neon-cyan/50 hover:shadow-xl dark:border-ink-600/60 dark:bg-ink-800/60"
      >
        <div class="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-rose opacity-70"></div>

        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0">
            <h3 class="text-lg font-semibold text-ink-900 dark:text-white">
              {#if project.url}
                <a href={project.url} target="_blank" rel="noopener noreferrer" class="transition hover:text-neon-cyan">{project.name} ↗</a>
              {:else}
                {project.name}
              {/if}
            </h3>
            <p class="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ghost-500 dark:text-ghost-400">{project.duration}</p>
          </div>
        </div>

        <p class="mt-3 text-pretty text-sm leading-relaxed text-ink-600 dark:text-ghost-300">{project.description}</p>

        {#if project.tech?.length}
          <div class="mt-4 flex flex-wrap gap-1.5">
            {#each project.tech as tag}
              <span class="rounded-md border border-ghost-200/70 bg-ghost-50 px-2 py-0.5 font-mono text-[10px] text-ghost-500 dark:border-ink-600/70 dark:bg-ink-900/60 dark:text-ghost-300">{tag}</span>
            {/each}
          </div>
        {/if}
      </article>
    {/each}
  </div>
</section>
