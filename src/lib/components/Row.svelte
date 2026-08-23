<script lang="ts">
  // Expandable row, shared by Experience and Projects.
  //
  // The header is a <button> so the row is keyboard operable and announces its
  // state. Nested links are invalid inside a button, so a project's external
  // URL is rendered in the expanded body rather than on the title.

  export let period = '';
  export let current = false;
  export let note = '';

  let open = false;
  let body: HTMLDivElement | null = null;

  function toggle() {
    open = !open;
    if (!body) return;
    const inner = body.firstElementChild as HTMLElement | null;
    body.style.maxHeight = open && inner ? `${inner.scrollHeight}px` : '0';
  }
</script>

<div class="row" class:on={open} class:now={current}>
  <button class="rh" type="button" on:click={toggle} aria-expanded={open}>
    <span class="rtxt">
      <span class="rl"><slot name="label" /></span>
      {#if note}<span class="rtn">{note}</span>{/if}
    </span>
    <span class="per">{period}</span>
    <span class="pl" aria-hidden="true">+</span>
  </button>

  <div class="rb" bind:this={body}>
    <ul class="in"><slot /></ul>
  </div>
</div>
