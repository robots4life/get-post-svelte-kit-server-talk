<script>
	import { CodeBlock } from 'svhighlight';

	import 'highlight.js/styles/base16/dracula.css';

	let jsonData;
	async function logJSONData() {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos');
		jsonData = await response.json();
		console.log(jsonData);
		return jsonData;
	}
	function clearJSONData() {
		jsonData = undefined;
	}

	let code1 = `
	async function logJSONData() {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos');
	const jsonData = await response.json();
	console.log(jsonData);
}
    `;
	let focusBlocks1 = [
		{ lines: '', text: 'Remove Blur' },
		{ lines: '0', scrollLine: 1, text: '1: define async function' },
		{ lines: '1', scrollLine: 1, text: '2: await fetch resource' },
		{ lines: '2', scrollLine: 1, text: '3: await fetch JSON response' },
		{ lines: '3', scrollLine: 1, text: '4: log JSON data' }
	];

	let textData;
	async function logTEXTData() {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos');
		textData = await response.text();
		console.log(textData);
	}
	function clearTEXTData() {
		textData = undefined;
	}

	let code2 = `
	async function logTEXTData() {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos');
	const textData = await response.text();
	console.log(textData);
}
    `;
	let focusBlocks2 = [
		{ lines: '', text: 'Remove Blur' },
		{ lines: '0', scrollLine: 1, text: '1: define async function' },
		{ lines: '1', scrollLine: 1, text: '2: await fetch resource' },
		{ lines: '2', scrollLine: 1, text: '3: await fetch TEXT response' },
		{ lines: '3', scrollLine: 1, text: '4: log TEXT data' }
	];
</script>

<div class="min-h-screen">
	<h1>Using the Fetch API</h1>
	<a
		class="block mb-8"
		target="_blank"
		rel="noreferrer"
		href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
		>https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch</a
	>

	<h2>Getting back JSON data</h2>
	<a
		class="block mb-8"
		target="_blank"
		rel="noreferrer"
		href="https://developer.mozilla.org/en-US/docs/Web/API/Response/json"
		>https://developer.mozilla.org/en-US/docs/Web/API/Response/json</a
	>

	<CodeBlock
		language="javascript"
		code="{code1}"
		focusBlocks="{focusBlocks1}"
		showFocusButtons="{true}"
		focusButtonClasses="bg-gray-600 cornsilk font-bold text-xl w-1/6 rounded-2xl p-2 mb-2"
		showHeader="{false}"
		showLineNumbers="{true}"
	/>
	<button
		class="bg-gray-600 cornsilk font-bold text-xl w-1/6 rounded-2xl p-2 mt-4"
		on:click="{logJSONData}">logJSONData</button
	>
	<button
		class="bg-gray-600 cornsilk font-bold text-xl w-1/6 rounded-2xl p-2 mt-4"
		on:click="{clearJSONData}">clearJSONData</button
	>
	<p>jsonData {JSON.stringify(jsonData) ?? ''}</p>
</div>

<div class="min-h-screen">
	<h1>Using the Fetch API</h1>
	<a
		class="block mb-8"
		target="_blank"
		rel="noreferrer"
		href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
		>https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch</a
	>

	<h2>Getting back TEXT data</h2>
	<a
		class="block mb-8"
		target="_blank"
		rel="noreferrer"
		href="https://developer.mozilla.org/en-US/docs/Web/API/Response/text"
		>https://developer.mozilla.org/en-US/docs/Web/API/Response/text</a
	>
	<CodeBlock
		language="javascript"
		code="{code2}"
		focusBlocks="{focusBlocks2}"
		showFocusButtons="{true}"
		focusButtonClasses="bg-gray-600 cornsilk font-bold text-xl w-1/6 rounded-2xl p-2 mb-2"
		showHeader="{false}"
		showLineNumbers="{true}"
	/>
	<button
		class="bg-gray-600 cornsilk font-bold text-xl w-1/6 rounded-2xl p-2 mt-4"
		on:click="{logTEXTData}">logTEXTData</button
	>
	<button
		class="bg-gray-600 cornsilk font-bold text-xl w-1/6 rounded-2xl p-2 mt-4"
		on:click="{clearTEXTData}">clearTEXTData</button
	>
	<p>textData {JSON.stringify(textData) ?? ''}</p>
</div>
