<script lang="ts">
  import { identity, links, copy } from '$lib/content';
  import { reveal } from '$lib/actions/reveal';

  // The CV button is rendered from content.ts rather than probed at runtime.
  // The previous version issued a HEAD request on every visit and logged a 404
  // because no PDF exists. Drop a file into static/ and set identity.cv to
  // bring the button back.
</script>

<section class="end" id="contact">
  <div class="reach" use:reveal>
    <span class="face">
      <img
        src={identity.avatar}
        alt="Portrait of {identity.name}"
        width="104"
        height="104"
        loading="lazy"
        decoding="async"
      />
    </span>
    <div>
      <p class="q">Want to <span class="hl">talk?</span></p>
      <p style="margin-bottom:0">{copy.contactLine}</p>
    </div>
  </div>

  <div class="actions" use:reveal>
    <a class="pri" href="mailto:{identity.email}">Email me</a>
    {#if identity.cv}
      <a href={identity.cv}>Download CV</a>
    {/if}
    <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
  </div>
</section>
