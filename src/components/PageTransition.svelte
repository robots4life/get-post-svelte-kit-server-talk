<script>
	// Page Transition
	// https://github.com/joysofcode/sveltekit-for-beginners/commit/62db9036917eed853b3fac0957b97079fbd0e3e8?diff=unified
	// https://github.com/joysofcode/sveltekit-for-beginners/blob/62db9036917eed853b3fac0957b97079fbd0e3e8/src/lib/shared/transition.svelte
	import { fly, fade } from 'svelte/transition';
	// both fly and fade have duration and delay keys for the respective values
	// additionally fly has x and y axis parameters
	export let key;
	export let duration;
</script>

{#key key}
	<!-- <div in:fly="{{ y: -250, duration, delay: duration }}" out:fly="{{ y: 250, duration }}">
		<slot />
	</div> -->
	<div in:fade="{{ duration, delay: duration }}" out:fade="{{ duration }}">
		<slot />
	</div>
{/key}
