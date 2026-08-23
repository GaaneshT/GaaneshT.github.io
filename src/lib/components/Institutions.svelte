<script lang="ts">
  import { institutions } from '$lib/content';
</script>

<div class="insts">
  <span class="k">Worked at</span>
  {#each institutions as name, i}
    {#if i > 0}<i aria-hidden="true">/</i>{/if}
    <b>{name}</b>
  {/each}
</div>
