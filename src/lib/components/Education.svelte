<script lang="ts">
  import { education } from '$lib/content';
  import { reveal } from '$lib/actions/reveal';
</script>

<section id="education" use:reveal>
  <h2>Education</h2>
  <div class="hr"></div>

  {#each education as item}
    <div class="edu">
      <div>
        <span class="s">{item.school}</span>
        <span class="g">{item.degree}</span>
        {#if item.note}<span class="n">{item.note}</span>{/if}
      </div>
      <span class="p">{item.period}</span>
    </div>
  {/each}
</section>
