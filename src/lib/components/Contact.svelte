<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import { identity, links, copy } from '$lib/content';
  import { reveal } from '$lib/actions/reveal';

  const cvPath = `${base}/Gaanesh-CV.pdf`;

  // Stays hidden until a CV is dropped into static/.
  let hasCv = false;

  onMount(async () => {
    try {
      const res = await fetch(cvPath, { method: 'HEAD' });
      hasCv = res.ok;
    } catch {
      hasCv = false;
    }
  });
</script>

<section class="end" id="contact">
  <div class="reach" use:reveal>
    <span class="face">
      <img src={identity.portrait} alt="Portrait of {identity.name}" width="104" height="104" />
    </span>
    <div>
      <p class="q">Want to <span class="hl">talk?</span></p>
      <p style="margin-bottom:0">{copy.contactLine}</p>
    </div>
  </div>

  <div class="actions" use:reveal>
    <a class="pri" href="mailto:{identity.email}">Email me</a>
    {#if hasCv}
      <a href={cvPath}>Download CV</a>
    {/if}
    <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
  </div>
</section>
