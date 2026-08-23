<script lang="ts">
  import { projects } from '$lib/content';
  import { reveal } from '$lib/actions/reveal';
  import Row from './Row.svelte';
</script>

<section id="projects" use:reveal>
  <h2>Projects</h2>
  <div class="hr"></div>

  {#each projects as project}
    <Row period={project.period}>
      <span slot="label">{project.name}</span>
      <li>{project.description}</li>
      <li>{project.tags.join(' · ')}</li>
      {#if project.url}
        <li>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            Visit {project.name} <span aria-hidden="true">&#8599;</span>
          </a>
        </li>
      {/if}
    </Row>
  {/each}
</section>
