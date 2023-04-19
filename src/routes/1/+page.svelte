<script>
	import { CodeBlock } from 'svhighlight';

	import 'highlight.js/styles/base16/dracula.css';

	let code = `
	async function logJSONData() {
	const response = await fetch('http://example.com/movies.json');
	const jsonData = await response.json();
	console.log(jsonData);
}
    `;

	let focusBlocks = [
		{ lines: '', text: 'Remove Blur' },
		{ lines: '0', scrollLine: 1, text: '1: define async function' },
		{ lines: '1', scrollLine: 1, text: '2: await fetch resource' },
		{ lines: '2', scrollLine: 1, text: '3: await fetch response' },
		{ lines: '3', scrollLine: 1, text: '4: log data' }
	];
</script>

<h1>Using the Fetch API</h1>

<a
	class="block mb-8"
	target="_blank"
	rel="noreferrer"
	href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
	>https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch</a
>

<CodeBlock
	language="javascript"
	code="{code}"
	focusBlocks="{focusBlocks}"
	showFocusButtons="{true}"
	focusButtonClasses="bg-gray-600 text-white font-bold text-xl w-1/6 rounded-2xl mb-4"
	showHeader="{false}"
	showLineNumbers="{true}"
/>
