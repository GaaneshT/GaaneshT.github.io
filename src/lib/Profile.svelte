<script lang="ts">
  // Top-level composition. Section components live in $lib/components/
  // Data lives in $lib/content.ts. Blog feed in $lib/posts.ts.
  // All animation hooks are in $lib/actions/reveal.ts.

  import Backdrop from './components/Backdrop.svelte';
  import Nav from './components/Nav.svelte';
  import CommandPalette from './components/CommandPalette.svelte';
  import Hero from './components/Hero.svelte';
  import About from './components/About.svelte';
  import Experience from './components/Experience.svelte';
  import Writing from './components/Writing.svelte';
  import Certifications from './components/Certifications.svelte';
  import Projects from './components/Projects.svelte';
  import Education from './components/Education.svelte';
  import Testimonials from './components/Testimonials.svelte';
  import Footer from './components/Footer.svelte';

  let paletteOpen = false;
</script>

<Backdrop />

<Nav onOpenPalette={() => (paletteOpen = true)} />

<CommandPalette bind:open={paletteOpen} />

<main id="top" class="relative mx-auto flex max-w-5xl flex-col gap-14 px-4 pb-24 pt-28 sm:gap-16 sm:px-6 md:pt-32 lg:px-0">
  <Hero />
  <About />
  <Experience />
  <Writing />
  <Certifications />
  <Projects />
  <Education />
  <Testimonials />
  <Footer />
</main>

<!-- Skip-to-content for keyboard users (rendered first in DOM-order via fixed positioning) -->
<a
  href="#top"
  class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink-900 focus:px-3 focus:py-1.5 focus:text-sm focus:text-white"
>
  Skip to content
</a>
