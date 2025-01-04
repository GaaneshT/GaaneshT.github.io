<!-- src/lib/Navbar.svelte -->
<script lang="ts">
	// Track whether the mobile menu is open
	let isOpen = false;

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<nav class="bg-gray-900 px-6 py-4 flex items-center justify-between">
  <!-- Left: Brand -->
  <a
    href="/"
    class="text-2xl font-bold text-white"
  >
    cd ~/home
  </a>

  <!-- Desktop Links (hidden on small screens) -->
  <div class="hidden md:flex space-x-6">
    <a
      href="/about"
      class="text-gray-300 hover:text-white transition-colors duration-200"
    >
      whoami
    </a>
    <a
      href="/blog"
      class="text-gray-300 hover:text-white transition-colors duration-200"
    >
      cd ./blog
    </a>
    <a
      href="/projects"
      class="text-gray-300 hover:text-white transition-colors duration-200"
    >
      ls ./projects
    </a>
    <a
      href="/contact"
      class="text-gray-300 hover:text-white transition-colors duration-200"
    >
      sudo ./hire_me
    </a>
  </div>

  <!-- Mobile Toggle (hamburger) -->
  <button
    type="button"
    class="inline-flex md:hidden items-center justify-center rounded-md p-2
           text-gray-400 hover:text-white hover:bg-gray-800
           focus:outline-none"
    on:click="{toggleMenu}"
    aria-controls="mobile-menu"
    aria-expanded="{isOpen}"
  >
    <!-- Icon: Hamburger or X -->
    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <!-- "Hamburger" icon (shown when menu is closed) -->
      <path
        class="{isOpen ? 'hidden' : 'block'}"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 8h16M4 16h16"
      />
      <!-- "X" icon (shown when menu is open) -->
      <path
        class="{isOpen ? 'block' : 'hidden'}"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>

  <!-- Mobile Menu (collapsible) -->
  {#if isOpen}
    <div class="md:hidden absolute top-16 left-0 w-full bg-gray-900" id="mobile-menu">
      <div class="flex flex-col space-y-2 py-4 px-6">
        <a
          href="/about"
          class="text-gray-300 hover:text-white transition-colors duration-200"
          on:click="{() => (isOpen = false)}"
        >
          whoami
        </a>
        <a
          href="/blog"
          class="text-gray-300 hover:text-white transition-colors duration-200"
          on:click="{() => (isOpen = false)}"
        >
          cd ./blog
        </a>
        <a
          href="/projects"
          class="text-gray-300 hover:text-white transition-colors duration-200"
          on:click="{() => (isOpen = false)}"
        >
          ls ./projects
        </a>
        <a
          href="/contact"
          class="text-gray-300 hover:text-white transition-colors duration-200"
          on:click="{() => (isOpen = false)}"
        >
          sudo ./hire_me
        </a>
      </div>
    </div>
  {/if}
</nav>
