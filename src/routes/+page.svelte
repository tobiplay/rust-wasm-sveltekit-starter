<script lang="ts">
	import { onMount } from 'svelte';
	import init, { greet } from 'hello-wasm';

	onMount(async () => {
		// Once we await the init promise, we can call greet
		// as a regular function. This also allows us to access
		// the linear memory from WASM that's part of the module.
		let wasm = await init();

		greet();
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
