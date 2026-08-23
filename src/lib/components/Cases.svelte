<script lang="ts">
  import { cases } from '$lib/content';
  import { reveal } from '$lib/actions/reveal';
</script>

<section id="selected" class="big">
  <h2>Selected work</h2>

  <div class="cases">
    {#each cases as item}
      <article class="case" use:reveal>
        <div class="ch">
          <h3>
            {#if item.url}
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title} <span class="go" aria-hidden="true">&#8599;</span>
              </a>
            {:else}
              {item.title}
            {/if}
          </h3>
          <span class="where">{item.where} · {item.when}</span>
        </div>

        <p class="ctx">{item.context}</p>

        <ul>
          {#each item.did as line}
            <li>{line}</li>
          {/each}
        </ul>

        {#if item.metrics.length}
          <div class="mx">
            {#each item.metrics as metric}
              <div>
                <div class="v">{metric.value}</div>
                <div class="l">{metric.label}</div>
              </div>
            {/each}
          </div>
        {/if}

        {#if item.note}
          <p class="nda">{item.note}</p>
        {/if}
      </article>
    {/each}
  </div>
</section>
