<script lang="ts">
  import { identity, navLinks } from '$lib/content';
</script>

<div class="bar">
  <a href="#top" class="me">{identity.name}</a>
  <nav class="nav" aria-label="Primary">
    {#each navLinks as link}
      {#if link.external}
        <a href={link.url} target="_blank" rel="noopener noreferrer">
          {link.label} <span class="ext" aria-hidden="true">&#8599;</span>
        </a>
      {:else}
        <a href={link.url}>{link.label}</a>
      {/if}
    {/each}
  </nav>
</div>
