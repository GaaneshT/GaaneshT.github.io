<!--
  Page-wide ambient backdrop — sits behind everything, pointer-events disabled.
  Cyber-noir flavour: subtle grid, soft glow blobs, and a slow scanline pass.
-->
<div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
  <!-- Base canvas tint -->
  <div class="absolute inset-0 bg-gradient-to-b from-ghost-50 via-ghost-50 to-white dark:from-ink-950 dark:via-ink-950 dark:to-ink-900"></div>

  <!-- Grid -->
  <div class="absolute inset-0 fx-grid opacity-70 dark:opacity-100"></div>

  <!-- Soft accent glows -->
  <div class="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-neon-cyan/20 blur-[140px] animate-glow dark:bg-neon-cyan/15"></div>
  <div class="absolute top-[40%] right-[-10%] hidden h-[420px] w-[420px] rounded-full bg-neon-violet/15 blur-[160px] animate-glow lg:block dark:bg-neon-violet/20"></div>
  <div class="absolute bottom-[-10%] left-[-10%] hidden h-[460px] w-[460px] rounded-full bg-neon-rose/10 blur-[160px] animate-glow lg:block dark:bg-neon-rose/15"></div>

  <!-- Slow vertical scanline pass (very subtle) -->
  <div class="absolute inset-0 hidden dark:block">
    <div class="h-[40%] w-full bg-gradient-to-b from-transparent via-neon-cyan/[0.04] to-transparent animate-scan"></div>
  </div>

  <!-- Top vignette to ground the nav -->
  <div class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink-950/40 to-transparent dark:from-ink-950/80"></div>
</div>
