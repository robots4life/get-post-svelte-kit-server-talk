<script>
	import { CodeBlock } from 'svhighlight';
	import 'highlight.js/styles/base16/dracula.css';

	let code1 = `
    src/routes/my-first-page/+page.js

export async function load() {
	return {
		greeting: 'hello from src/routes/my-first-page/+page.js'
	};
}
    `;
	let focusBlocks1 = [
		{ lines: '', text: 'remove blur' },
		{
			lines: '0',
			text: '1: create a new file +page.js in src/routes/my-first-page/'
		},
		{
			lines: '2',
			text: '2: define the async load function'
		},
		{
			lines: '3-5',
			text: '3: return data for the page'
		},
		{
			lines: '4',
			text: '4: pay attention to the key value pair of data being passed to the page'
		}
	];

	let code2 = `src/routes/my-first-page/+page.svelte

<script>
	export let data;
<\/script>

<h1>Hello and Welcome to my Site !</h1>
<h2>Peace & Love for Everyone :)</h2>
<h3>Do you like Ice Cream ?</h3>

<h1>{JSON.stringify(data)}</h1>
<h2>{data.greeting}</h2>`;
	let focusBlocks2 = [
		{ lines: '', text: 'remove blur' },
		{
			lines: '0',
			text: '1: go to the +page.svelte file in src/routes/my-first-page/'
		},
		{
			lines: '2-4',
			text: '2: create a script block at the top of the file'
		},
		{
			lines: '3',
			text: '3: export the data property in the script block'
		},
		{
			lines: '10-11',
			text: '4: add the loaded data to the markup'
		}
	];
</script>

<div class="min-h-screen">
	<h1>Load Data for a Page with SvelteKit</h1>
	<a
		class="block mb-8"
		target="_blank"
		rel="noreferrer"
		href="https://kit.svelte.dev/docs/routing#page-page-js"
		>https://kit.svelte.dev/docs/routing#page-page-js</a
	>
	<h2 class="mb-4">
		Often, a page will need to load some data before it can be rendered. For this, we add a
		+page.js module that exports a load function.
	</h2>
	<CodeBlock
		language="javascript"
		code="{code1}"
		focusBlocks="{focusBlocks1}"
		showFocusButtons="{true}"
		focusButtonClasses="bg-gray-600 cornsilk font-bold text-xl w-1/6 rounded-2xl p-4 mb-2"
		showHeader="{false}"
		showLineNumbers="{true}"
	/>
</div>

<div class="min-h-screen">
	<h1>Show the loaded Data on the Page with SvelteKit</h1>
	<a
		class="block mb-8"
		target="_blank"
		rel="noreferrer"
		href="https://kit.svelte.dev/docs/load#page-data"
		>https://kit.svelte.dev/docs/load#page-data</a
	>
	<h2 class="mb-4">
		To show the loaded data coming from the +page.js module we export the data property on the
		page.
	</h2>
	<CodeBlock
		language="svelte"
		code="{code2}"
		focusBlocks="{focusBlocks2}"
		showFocusButtons="{true}"
		focusButtonClasses="bg-gray-600 cornsilk font-bold text-xl w-1/6 rounded-2xl p-4 mb-2"
		showHeader="{false}"
		showLineNumbers="{true}"
	/>
	<button class="bg-gray-500 cornsilk font-bold text-xl w-1/4 rounded-2xl p-2 mt-4"
		><a class="block" href="/my-first-page">/my-first-page</a></button
	>
</div>
