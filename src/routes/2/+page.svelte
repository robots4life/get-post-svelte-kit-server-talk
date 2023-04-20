<script>
	import { CodeBlock } from 'svhighlight';
	import 'highlight.js/styles/base16/dracula.css';

	let code1 = `
    src/routes/my-first-page/+page.svelte

<h1>Hello and Welcome to my Site !</h1>
<h2>Peace & Love for Everyone :)</h2>
<h3>Do you like Ice Cream ?</h3>
    `;
	let focusBlocks1 = [
		{ lines: '', text: 'remove blur' },
		{
			lines: '0',
			text: '1: create a new file +page.svelte in src/routes/my-first-page/'
		},
		{
			lines: '2-4',
			text: '2: write some HTML markup to the +page.svelte file'
		}
	];
</script>

<div class="min-h-screen">
	<h1>Creating a Route & a Page with SvelteKit</h1>
	<a
		class="block mb-8"
		target="_blank"
		rel="noreferrer"
		href="https://kit.svelte.dev/docs/routing#page">https://kit.svelte.dev/docs/routing#page</a
	>
	<h2 class="mb-4">
		At the heart of SvelteKit is a filesystem-based router. The routes of your app — i.e. the
		URL paths that users can access — are defined by the directories in your codebase.
	</h2>
	<CodeBlock
		language="html"
		code="{code1}"
		focusBlocks="{focusBlocks1}"
		showFocusButtons="{true}"
		focusButtonClasses="bg-gray-600 cornsilk font-bold text-xl w-1/4 rounded-2xl p-4 mb-2"
		showHeader="{false}"
		showLineNumbers="{true}"
	/>
	<button class="bg-gray-500 cornsilk font-bold text-xl w-1/4 rounded-2xl p-2 my-4"
		><a class="block" href="/my-first-page">/my-first-page</a></button
	>
</div>
