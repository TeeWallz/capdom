import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { isoImport } from 'vite-plugin-iso-import'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess({})],
	vitePlugin: [isoImport()],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			"@/*": "./src/lib/*",
			"$/*": "./src/lib/*",
			"$lib/*": "./src/lib/*",
		},

	},
	optimizeDeps: { exclude: ['layercake', 'svelte-leafletjs'] },
};

export default config;
