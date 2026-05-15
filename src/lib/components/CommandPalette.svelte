<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { navLinks, socialLinks, identity } from '$lib/content';

  export let open = false;

  type Item = { id: string; label: string; hint: string; action: () => void; icon: string };

  const goTo = (hash: string) => () => {
    open = false;
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else window.location.hash = hash;
  };

  const openUrl = (url: string) => () => {
    open = false;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const copyEmail = () => {
    open = false;
    try {
      navigator.clipboard?.writeText(identity.email);
    } catch {
      window.location.href = `mailto:${identity.email}`;
    }
  };

  let items: Item[] = [];
  $: {
    items = [
      ...navLinks.map((l) => ({
        id: `nav:${l.id}`,
        label: `Jump to ~/${l.label}`,
        hint: 'Section',
        action: goTo(l.id),
        icon: 'fa-solid fa-arrow-right'
      })),
      ...socialLinks.map((s) => ({
        id: `link:${s.label}`,
        label: `Open ${s.label}`,
        hint: s.url.replace(/^https?:\/\//, ''),
        action: openUrl(s.url),
        icon: s.icon
      })),
      {
        id: 'copy-email',
        label: 'Copy email address',
        hint: identity.email,
        action: copyEmail,
        icon: 'fa-solid fa-envelope'
      }
    ];
  }

  let query = '';
  let inputEl: HTMLInputElement | null = null;
  let selectedIdx = 0;

  $: filtered = query.trim()
    ? items.filter((it) =>
        (it.label + ' ' + it.hint).toLowerCase().includes(query.trim().toLowerCase())
      )
    : items;

  $: if (selectedIdx >= filtered.length) selectedIdx = 0;

  function onKey(e: KeyboardEvent) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      open = !open;
      return;
    }
    if (!open) return;
    if (e.key === 'Escape') { e.preventDefault(); open = false; return; }
    if (e.key === 'ArrowDown') { e.preventDefault(); selectedIdx = Math.min(selectedIdx + 1, filtered.length - 1); return; }
    if (e.key === 'ArrowUp')   { e.preventDefault(); selectedIdx = Math.max(selectedIdx - 1, 0); return; }
    if (e.key === 'Enter')     { e.preventDefault(); filtered[selectedIdx]?.action(); return; }
  }

  $: if (open) {
    setTimeout(() => inputEl?.focus(), 30);
    query = '';
    selectedIdx = 0;
  }

  onMount(() => {
    window.addEventListener('keydown', onKey);
  });
  onDestroy(() => {
    if (typeof window !== 'undefined') window.removeEventListener('keydown', onKey);
  });
</script>

{#if open}
  <div
    role="dialog"
    aria-modal="true"
    aria-label="Command palette"
    class="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[14vh] backdrop-blur-md"
  >
    <button
      type="button"
      class="absolute inset-0 cursor-default bg-ink-950/60"
      aria-label="Close palette"
      on:click={() => (open = false)}
    ></button>

    <div
      class="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border border-ink-600/70 bg-ink-900/95 shadow-neon-cyan ring-1 ring-neon-cyan/10"
    >
      <div class="flex items-center gap-3 border-b border-ink-600/60 px-4 py-3">
        <i class="fa-solid fa-terminal text-neon-cyan" aria-hidden="true"></i>
        <input
          bind:this={inputEl}
          bind:value={query}
          placeholder="Type a command — try 'experience' or 'github'"
          class="flex-1 bg-transparent font-mono text-sm text-ghost-100 placeholder-ghost-500 outline-none"
          autocomplete="off"
          spellcheck="false"
        />
        <span class="kbd">Esc</span>
      </div>

      <ul class="max-h-[55vh] overflow-y-auto py-1">
        {#if filtered.length === 0}
          <li class="px-4 py-6 text-center font-mono text-sm text-ghost-500">no matches.</li>
        {/if}
        {#each filtered as item, i (item.id)}
          <li>
            <button
              type="button"
              on:click={item.action}
              on:mouseenter={() => (selectedIdx = i)}
              class="flex w-full items-center justify-between gap-4 px-4 py-2.5 text-left transition {selectedIdx === i ? 'bg-neon-cyan/10 text-white' : 'text-ghost-200 hover:bg-ink-800/80'}"
            >
              <span class="flex items-center gap-3 min-w-0">
                <i class="{item.icon} w-4 shrink-0 text-center text-xs text-neon-cyan" aria-hidden="true"></i>
                <span class="truncate font-mono text-sm">{item.label}</span>
              </span>
              <span class="truncate font-mono text-[11px] text-ghost-500">{item.hint}</span>
            </button>
          </li>
        {/each}
      </ul>

      <div class="flex items-center justify-between border-t border-ink-600/60 px-4 py-2 text-[10px] font-mono text-ghost-500">
        <span><span class="kbd">↑</span> <span class="kbd">↓</span> navigate</span>
        <span><span class="kbd">↵</span> select</span>
        <span><span class="kbd">esc</span> close</span>
      </div>
    </div>
  </div>
{/if}
