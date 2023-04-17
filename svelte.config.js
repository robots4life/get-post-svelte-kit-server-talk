import adapter from '@sveltejs/adapter-auto';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			'$root/*': './src/*',
			'$components/*': 'src/components/*',
			'$stores/*': 'src/stores/*'
		},

		// https://kit.svelte.dev/docs/configuration#csrf
		// turn off during development on https://project-name.loc
		// for production this should always be true
		csrf: {
			checkOrigin: false
			// checkOrigin: true
		}
	},
	preprocess: vitePreprocess()
};

export default config;
