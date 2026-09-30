<script lang="ts">
  // Section components live in $lib/components/, content in $lib/content.ts,
  // the blog feed in $lib/posts.ts.

  import Bar from './components/Bar.svelte';
  import Lead from './components/Lead.svelte';
  import Cases from './components/Cases.svelte';
  import Experience from './components/Experience.svelte';
  import Projects from './components/Projects.svelte';
  import Writing from './components/Writing.svelte';
  import Education from './components/Education.svelte';
  import Contact from './components/Contact.svelte';
  import Footer from './components/Footer.svelte';
</script>

<a href="#selected" class="skip">Skip to content</a>

<div class="wrap">
  <Bar />
  <main>
    <Lead />
    <Cases />
    <Experience />
    <Projects />
    <Writing />
    <Education />
    <Contact />
  </main>
</div>

<Footer />

<style>
  .skip {
    position: absolute;
    left: -9999px;
  }
  .skip:focus {
    position: fixed;
    left: 16px;
    top: 16px;
    z-index: 50;
    background: var(--blue);
    color: #fff;
    padding: 10px 16px;
    border-radius: 3px;
    font-size: 15px;
  }
</style>
