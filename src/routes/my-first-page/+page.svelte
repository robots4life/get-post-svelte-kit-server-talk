<script>
	import { afterNavigate } from '$app/navigation';
	import { base } from '$app/paths';
	let previousPage = base;

	afterNavigate(({ from }) => {
		previousPage = from?.url.pathname || previousPage;
		// console.log(previousPage);
	});
	export let data;
	delete data.url;
</script>

<h1>Hello and Welcome to my Site !</h1>
<h2>Peace & Love for Everyone :)</h2>
<h3>Do you like Ice Cream ?</h3>

{#if previousPage == '/3/'}
	<h1>{JSON.stringify(data)}</h1>
	<h2>{data.greeting}</h2>
{/if}

{#if previousPage == '/2/' || previousPage == ''}
	<button class="bg-gray-500 cornsilk font-bold text-xl w-1/4 rounded-2xl p-2 mt-4"
		><a class="block" href="/2">/2</a></button
	>
{/if}
{#if previousPage == '/3/'}
	<button class="bg-gray-500 cornsilk font-bold text-xl w-1/4 rounded-2xl p-2 mt-4"
		><a class="block" href="/3">/3</a></button
	>
{/if}
