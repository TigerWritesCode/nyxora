<script lang="ts">
	import '../app.scss';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<div class="page">
	<Nav />
	<main class="page__main">
		{@render children()}
	</main>
	<Footer />
</div>

<style lang="scss">
	.page {
		display: flex;
		min-height: 100vh;
		flex-direction: column;
	}

	.page__main {
		flex: 1;
	}
</style>
