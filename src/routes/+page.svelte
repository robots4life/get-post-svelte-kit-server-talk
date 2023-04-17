<script>
	import { PUBLIC_JSON_PLACEHOLDER_ENDPOINT } from '$env/static/public';
	console.log(PUBLIC_JSON_PLACEHOLDER_ENDPOINT);

	import { logIndexLib } from '$lib/indexLib.js';
	logIndexLib;

	export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<a target="_blank" rel="noreferrer" href="{PUBLIC_JSON_PLACEHOLDER_ENDPOINT}"
	>{PUBLIC_JSON_PLACEHOLDER_ENDPOINT}</a
>
<p>
	<code>data returned from server : {JSON.stringify(data)}</code>
</p>
