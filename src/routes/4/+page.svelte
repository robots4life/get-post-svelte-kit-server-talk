<script>
	import { CodeBlock } from 'svhighlight';
	import 'highlight.js/styles/base16/dracula.css';

	let code1 = `/.env
    
SECRET_API_KEY=1234567890`;
	let focusBlocks1 = [
		{ lines: '', text: 'Remove Blur' },
		{
			lines: '0',
			text: '1: create a new file .env in the root directory of your project'
		},
		{
			lines: '2',
			text: '2: add the SECRET_API_KEY to this .env file'
		}
	];

	let code2 = `src/routes/my-second-page/+page.server.js

import { SECRET_API_KEY } from '$env/static/private';

export async function load() {
	console.log(SECRET_API_KEY);

	return {
		greeting: 'hello from src/routes/4/+page.server.js',
		neverDoThis: 'never supply secret environment variables to the page :)',
		secretAPIKey: SECRET_API_KEY
	};
}`;

	let focusBlocks2 = [
		{ lines: '', text: 'Remove Blur' },
		{ lines: '0', text: '1. create a new file +page.server.js in src/routes/my-second-page/' },
		{
			lines: '2',
			text: '2. read the secret API key'
		},
		{
			lines: '4',
			text: '3. define the async load function'
		},
		{ lines: '5', text: '4. log the SECRET_API_KEY to the terminal' },
		{ lines: '7-10', text: '5. return data for the page' },
		{ lines: '8', text: '6. the greeting will be available on data.greeting' },
		{ lines: '9', text: '7. never supply secret environment variables to the page :)' },
		{
			lines: '10',
			text: '8. you will be able to see the SECRET_API_KEY on the page if you do this'
		}
	];

	let code3 = `src/routes/my-second-page/+page.svelte
    
<script>
	export let data;
<\/script>

<h1>{data.greeting}</h1>
<h1>{data.neverDoThis}</h1>
<h1>{data.secretAPIKey}</h1>`;

	let focusBlocks3 = [
		{ lines: '', text: 'Remove Blur' },
		{ lines: '0', text: '1. create a new file +page.svelte in src/routes/my-second-page/' },
		{ lines: '2-4', text: '2. create a script block at the top of the file' },
		{
			lines: '3',
			text: '3: export the data property in the script block'
		},
		{
			lines: '6-8',
			text: '4: add the loaded data to the markup'
		}
	];
</script>

<div class="min-h-screen">
	<h1>Load Data Server-Side for a Page with SvelteKit</h1>
	<a
		class="block mb-8"
		target="_blank"
		rel="noreferrer"
		href="https://kit.svelte.dev/docs/routing#page-page-server-js"
		>https://kit.svelte.dev/docs/routing#page-page-server-js</a
	>
	<h2 class="mb-4">
		Not all page data can be loaded in the browser. Sometimes you will need to run your load
		function on the server only.<br /><br />Use cases for this are when your load function needs
		to fetch data from a database or you need to access private environment variables like API
		keys.
		<br /><br />Let's see how this is done..
	</h2>
</div>
<div class="min-h-screen">
	<h1>1.<br /><br />Create an .env file with a secret API key in the project root</h1>
	<CodeBlock
		language="javascript"
		code="{code1}"
		focusBlocks="{focusBlocks1}"
		showFocusButtons="{true}"
		focusButtonClasses="bg-gray-600 cornsilk font-bold text-xl w-1/5 rounded-2xl p-4 mb-2"
		showHeader="{false}"
		showLineNumbers="{true}"
	/>
</div>
<div class="min-h-screen">
	<h1>
		2.<br /><br />Create a +page.server.js file in src/routes/my-second-page/
	</h1>
	<a
		class="block mb-8"
		target="_blank"
		rel="noreferrer"
		href="https://kit.svelte.dev/docs/modules#$env-static-private"
		>https://kit.svelte.dev/docs/modules#$env-static-private</a
	>
	<CodeBlock
		language="javascript"
		code="{code2}"
		focusBlocks="{focusBlocks2}"
		showFocusButtons="{true}"
		focusButtonClasses="bg-gray-600 cornsilk font-bold text-xl w-1/5 rounded-2xl p-4 mb-2"
		showHeader="{false}"
		showLineNumbers="{true}"
	/>
</div>
<div class="min-h-screen">
	<h1>3.<br /><br />Create a new file +page.svelte in src/routes/my-second-page/</h1>
	<CodeBlock
		language="javascript"
		code="{code3}"
		focusBlocks="{focusBlocks3}"
		showFocusButtons="{true}"
		focusButtonClasses="bg-gray-600 cornsilk font-bold text-xl w-1/5 rounded-2xl p-4 mb-2"
		showHeader="{false}"
		showLineNumbers="{true}"
	/>
	<button class="bg-gray-500 cornsilk font-bold text-xl w-1/4 rounded-2xl p-2 mt-4"
		><a class="block" href="/my-second-page">/my-second-page</a></button
	>
</div>
<div class="min-h-screen">
	<h1>
		4.<br /><br />Understand the difference between Universal and Server-Side load functions
	</h1>
	<h2>
		The load function in +page.js is <strong>Universal</strong> and runs first on the server and
		then in the client/browser.
	</h2>
	<h2>
		The load function in +page.server.js is <strong>Server-Side</strong> and runs only on the server.
	</h2>
	<a
		class="block mb-8"
		target="_blank"
		rel="noreferrer"
		href="https://kit.svelte.dev/docs/load#universal-vs-server"
		>https://kit.svelte.dev/docs/load#universal-vs-server</a
	>
	<a
		class="block mb-8"
		target="_blank"
		rel="noreferrer"
		href="https://kit.svelte.dev/docs/load#universal-vs-server-when-does-which-load-function-run"
		>https://kit.svelte.dev/docs/load#universal-vs-server-when-does-which-load-function-run</a
	>
	<h2>
		Open Dev Tools and the Terminal and load /my-first-page and /my-second-page to see the
		difference.
	</h2>
	<button class="bg-gray-500 cornsilk font-bold text-xl w-1/4 rounded-2xl p-2 mt-4"
		><a class="block" href="/my-first-page">/my-first-page</a></button
	>
	<button class="bg-gray-500 cornsilk font-bold text-xl w-1/4 rounded-2xl p-2 mt-4"
		><a class="block" href="/my-second-page">/my-second-page</a></button
	>
</div>
