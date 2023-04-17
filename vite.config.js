import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	// devilbox
	// server: {
	// 	host: '0.0.0.0',
	// 	port: 3000,
	// 	strictPort: true,
	// 	hmr: {
	// 		clientPort: 443
	// 	}
	// },
	resolve: {
		alias: {
			$root: path.resolve('./src')
		}
	}
});
