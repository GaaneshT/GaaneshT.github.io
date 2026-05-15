<script lang="ts">
  import { experience, type Experience as Exp } from '$lib/content';
  import { reveal } from '$lib/actions/reveal';
  import PromptHeading from './PromptHeading.svelte';

  const sorted = [...experience].sort((a, b) => (b.sortKey ?? 0) - (a.sortKey ?? 0));
  const yearOf = (job: Exp) => Math.floor((job.sortKey ?? 0) / 100);

  const badgeFor = (job: Exp, idx: number) => {
    if (job.status === 'current') return { label: 'present', cls: 'bg-neon-green/15 text-neon-green ring-1 ring-neon-green/30' };
    if (job.status === 'upcoming') return { label: 'incoming', cls: 'bg-neon-amber/15 text-neon-amber ring-1 ring-neon-amber/30' };
    if (idx === 0) return { label: 'latest', cls: 'bg-neon-cyan/15 text-neon-cyan ring-1 ring-neon-cyan/30' };
    return null;
  };

  let expanded = new Set<number>();
  const toggle = (i: number) => {
    const next = new Set(expanded);
    if (next.has(i)) next.delete(i);
    else next.add(i);
    expanded = next;
  };
</script>

<section id="experience" use:reveal={{ distance: 16, threshold: 0 }} class="space-y-6">
  <PromptHeading path="experience" command="ls -la --tree">
    {sorted.length} entries · most recent first
  </PromptHeading>

  <div class="relative space-y-8">
    <!-- timeline rail -->
    <div class="pointer-events-none absolute left-3 top-3 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-neon-cyan/40 via-ghost-300/50 to-transparent md:block dark:via-ink-600/70"></div>

    {#each sorted as job, i}
      {@const badge = badgeFor(job, i)}
      {@const delay = Math.min(i, 4) * 45}
      {@const newYear = i === 0 || yearOf(sorted[i - 1]) !== yearOf(job)}
      <div class="relative md:pl-12" use:reveal={{ delay, distance: 16, threshold: 0 }}>
        {#if newYear}
          <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-ghost-200/60 bg-white/85 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-ghost-500 shadow-sm dark:border-ink-600/70 dark:bg-ink-800/70">
            <span class="h-1.5 w-1.5 rounded-full bg-neon-cyan"></span>
            {yearOf(job)}
          </div>
        {/if}

        <div class="flex flex-col gap-4 md:flex-row md:items-start">
          <!-- timeline node -->
          <div class="relative hidden md:block">
            <span class="absolute left-[-39px] top-3 block h-3 w-3 rounded-full border border-white bg-neon-cyan shadow-[0_0_0_5px_rgba(103,232,249,0.18)] dark:border-ink-950"></span>
          </div>

          <article class="relative w-full overflow-hidden rounded-2xl border border-ghost-200/70 bg-white/90 p-5 shadow-lg transition hover:-translate-y-0.5 hover:border-neon-cyan/40 hover:shadow-xl dark:border-ink-600/60 dark:bg-ink-800/60 sm:p-6">
            <div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div class="space-y-1.5 min-w-0">
                <div class="flex flex-wrap items-center gap-2">
                  <h3 class="text-lg font-semibold text-ink-900 dark:text-white">{job.role}</h3>
                  {#if badge}
                    <span class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] {badge.cls}">
                      {#if badge.label === 'present'}<span class="dot-live"></span>{/if}
                      {badge.label}
                    </span>
                  {/if}
                </div>
                <p class="font-mono text-xs uppercase tracking-[0.2em] text-ghost-500 dark:text-ghost-400">
                  {#if job.url}
                    <a href={job.url} target="_blank" rel="noopener noreferrer" class="hover:text-neon-cyan">{job.company} ↗</a>
                  {:else}
                    {job.company}
                  {/if}
                </p>
                <p class="font-mono text-xs text-ghost-500 dark:text-ghost-400">{job.duration}</p>
              </div>
              <div class="flex shrink-0 items-center justify-center">
                <img src={job.logo} alt="{job.company} logo" class="h-16 w-16 rounded-xl border border-ghost-200/70 bg-white/90 object-contain p-2.5 shadow-sm sm:h-20 sm:w-20 dark:border-ink-600 dark:bg-ink-900/80" loading="lazy" />
              </div>
            </div>

            <ul class="mt-4 space-y-1.5 text-sm leading-relaxed text-ink-600 dark:text-ghost-200">
              {#each (expanded.has(i) ? job.description : job.description.slice(0, 3)) as detail}
                <li class="flex items-start gap-2.5">
                  <span class="mt-2 inline-flex h-1 w-1.5 shrink-0 rounded-sm bg-neon-cyan"></span>
                  <span>{detail}</span>
                </li>
              {/each}
            </ul>

            {#if job.description.length > 3}
              <button
                class="mt-3 self-start font-mono text-xs font-semibold text-neon-cyan transition hover:opacity-80"
                on:click={() => toggle(i)}
              >
                {expanded.has(i) ? '↑ collapse' : `↓ show ${job.description.length - 3} more`}
              </button>
            {/if}
          </article>
        </div>
      </div>
    {/each}
  </div>
</section>
