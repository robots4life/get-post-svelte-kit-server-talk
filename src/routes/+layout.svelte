<script>
	import '../app.css';
	import Nav from '$components/Nav.svelte';
	import PageTransition from '$components/PageTransition.svelte';
	export let data; // => {url: '/'}
	import Footer from '../components/Footer.svelte';
</script>

<div>
	<Nav />
	<PageTransition key="{data.url}" duration="{300}">
		<main class="">
			<slot />
		</main>
	</PageTransition>
</div>
<Footer />
