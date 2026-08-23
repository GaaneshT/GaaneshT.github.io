<script lang="ts">
  import { identity, leadLinks, earnedCerts, pendingCerts } from '$lib/content';
</script>

<div class="lead" id="top">
  <p class="hello">{identity.hello}</p>

  <p class="sub">
    {identity.sub.lead}<b>{identity.sub.strong}</b>{identity.sub.tail}
  </p>

  <p class="tags">
    {#each leadLinks as link, i}
      {#if i > 0}<i aria-hidden="true">/</i>{/if}
      <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
    {/each}
  </p>

  <p class="creds">
    {#each earnedCerts as cert, i}
      {#if i > 0}<i aria-hidden="true">·</i>{/if}
      <a href={cert.url} target="_blank" rel="noopener noreferrer" title={cert.name}>{cert.abbr}</a>
    {/each}
    {#if pendingCerts.length}
      <i aria-hidden="true">·</i>
      <span>working towards {pendingCerts.map((c) => c.abbr).join(', ')}</span>
    {/if}
  </p>
</div>
