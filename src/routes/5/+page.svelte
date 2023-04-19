<script>
	import { CodeBlock } from 'svhighlight';
	import 'highlight.js/styles/base16/dracula.css';
</script>

<div class="min-h-screen">
	<h1>
		As well as pages, you can define routes with a +server.js file, sometimes referred to as an
		'API route' or an 'Endpoint', or a 'Server Endpoint'.<br /><br /> This gives you full
		control over the response.<br /><br />Your +server.js file exports functions corresponding
		to HTTP verbs like GET, POST, PATCH, PUT, DELETE, and OPTIONS that take a RequestEvent
		argument and return a Response object.
	</h1>
	<a
		class="block mb-8"
		target="_blank"
		rel="noreferrer"
		href="https://kit.svelte.dev/docs/routing#server"
		>https://kit.svelte.dev/docs/routing#server</a
	>

	<a
		class="block mb-8"
		target="_blank"
		rel="noreferrer"
		href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
		>https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API</a
	>
	<a
		class="block mb-8"
		target="_blank"
		rel="noreferrer"
		href="https://developer.mozilla.org/en-US/docs/Web/API/Request"
		>https://developer.mozilla.org/en-US/docs/Web/API/Request</a
	>
	<a
		class="block mb-8"
		target="_blank"
		rel="noreferrer"
		href="https://developer.mozilla.org/en-US/docs/Web/API/Response"
		>https://developer.mozilla.org/en-US/docs/Web/API/Response</a
	>
</div>
