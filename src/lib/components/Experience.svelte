<script lang="ts">
  import { experience } from '$lib/content';
  import Row from './Row.svelte';

  const featured = experience.filter((e) => e.featured);
  const earlier = experience.filter((e) => !e.featured);

  let showEarlier = false;
</script>

<section id="experience">
  <h2>Experience</h2>
  <div class="hr"></div>

  {#each featured as job}
    <Row period={job.period} current={job.current ?? false} note={job.note ?? ''}>
      <span slot="label">{job.role} <span class="at">at {job.org}</span></span>
      {#each job.bullets as bullet}
        <li>{bullet}</li>
      {/each}
    </Row>
  {/each}

  {#if showEarlier}
    {#each earlier as job}
      <Row period={job.period} current={job.current ?? false} note={job.note ?? ''}>
        <span slot="label">{job.role} <span class="at">at {job.org}</span></span>
        {#each job.bullets as bullet}
          <li>{bullet}</li>
        {/each}
      </Row>
    {/each}
  {/if}

  {#if earlier.length}
    <button
      class="more"
      class:op={showEarlier}
      type="button"
      on:click={() => (showEarlier = !showEarlier)}
      aria-expanded={showEarlier}
    >
      <span class="x" aria-hidden="true">+</span>
      <span>{showEarlier ? 'Fewer roles' : 'Earlier roles'}</span>
    </button>
  {/if}
</section>
