import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// Optional fallback for dynamic routes
			fallback: '200.html'
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/GaaneshT.github.io' : ''
		}
	}
};

export default config;
