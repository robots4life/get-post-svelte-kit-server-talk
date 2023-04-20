<script>
	import { CodeBlock } from 'svhighlight';
	import 'highlight.js/styles/base16/dracula.css';

	let code1 = `src/routes/api/+server.js
// GET Response
export const GET = async () => {

	const GETResponse = 'GET Response - Hello from +server.js in src/routes/api';

	const GETResponseJSONString = JSON.stringify({
		time: Date.now(),
		data: GETResponse
	});

	const options = {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	};

	// https://developer.mozilla.org/en-US/docs/Web/API/Response/Response
	return new Response(GETResponseJSONString, options);
};`;
	let focusBlocks1 = [
		{ lines: '', text: 'remove blur' },
		{ lines: '0', text: '1. create a new file +.server.js in src/routes/api/' },
		{ lines: '2', text: '2. export a GET function that corresponds to the HTTP verb GET' },
		{ lines: '4', text: '3. define a string "GETResponse" as data for the response' },
		{
			lines: '6',
			text: '4. define a stringified object as data for the response'
		},
		{ lines: '7', text: '5. include the current time as key value pair' },
		{ lines: '8', text: '6. include the "GETResponse" string as key value pair' },
		{ lines: '11', text: '7. define the options object for the response' },
		{ lines: '12', text: '8. define the status code in the options object' },
		{ lines: '13-15', text: '9. define the headers in the options object' },
		{ lines: '18-19', text: '10. return the response with the options' }
	];
</script>

<div class="min-h-screen">
	<h1>GET data from an API route with SvelteKit</h1>
	<h2>
		As well as pages, you can define routes with a +server.js file, sometimes referred to as an
		'API route', 'Endpoint', or a 'Server Endpoint'.<br /><br /> This gives you full control
		over the response.<br /><br />Your +server.js file exports functions corresponding to HTTP
		verbs like GET, POST, PATCH, PUT, DELETE, and OPTIONS that take a RequestEvent argument and
		return a Response object.
	</h2>
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
	<a
		class="block mb-8"
		target="_blank"
		rel="noreferrer"
		href="https://github.com/mdn/dom-examples/tree/main/fetch"
		>https://github.com/mdn/dom-examples/tree/main/fetch</a
	>
	<h2>Let's see how this is done..</h2>
</div>
<div class="min-h-screen">
	<h1>Create a new file +.server.js in src/routes/api/</h1>
	<CodeBlock
		language="javascript"
		code="{code1}"
		focusBlocks="{focusBlocks1}"
		showFocusButtons="{true}"
		focusButtonClasses="bg-gray-600 cornsilk font-bold text-xl w-1/5 rounded-2xl p-4 mb-2"
		showHeader="{false}"
		showLineNumbers="{true}"
	/>
	<a
		class="block my-8"
		target="_blank"
		rel="noreferrer"
		href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now"
		>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now</a
	>
	<a
		class="block mb-8"
		target="_blank"
		rel="noreferrer"
		href="https://developer.mozilla.org/en-US/docs/Web/API/Headers"
		>https://developer.mozilla.org/en-US/docs/Web/API/Headers</a
	>
	<button class="bg-gray-500 cornsilk font-bold text-xl w-1/4 rounded-2xl p-2 mt-4"
		><a class="block" href="/api">/src/routes/api</a></button
	>
</div>
