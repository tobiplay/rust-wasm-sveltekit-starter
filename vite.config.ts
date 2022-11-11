import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, searchForWorkspaceRoot } from 'vite';

import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
	plugins: [sveltekit(), wasm(), topLevelAwait()],
	server: {
		fs: {
			// You should be able to work with any files that are
			// in the SvelteKit src directory themselves. Vite should
			// be able to resolve them from the workspace root directly.
			//
			// If Vite struggles to resolve them, you may want to allow the
			// server to access the entire workspace. Uncomment below and add the
			// paths to the pkg that contains the compiled WASM files.
			//
			// allow: [
			// 	// We have to search the workspace root because the Vite config
			// 	// is in a subdirectory of the workspace root:
			// 	searchForWorkspaceRoot(process.cwd()),
			//
			// 	// Our custom path to be allowed by the Vite server:
			// 	'<path to pkg>'
			// ]
		}
	}
});
