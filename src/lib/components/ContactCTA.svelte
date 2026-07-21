<script lang="ts">
	import { localeState } from '$lib/i18n/locale.svelte';
	import { ui } from '$lib/i18n/translations';

	const T = $derived(ui[localeState.current]);

	let { title, subtitle }: { title?: string; subtitle?: string } = $props();

	const resolvedTitle = $derived(title ?? T.contactCTA.title);
	const resolvedSubtitle = $derived(subtitle ?? T.contactCTA.subtitle);
</script>

<section class="bg-obsidian">
	<div
		class="mx-auto flex max-w-content flex-col items-start justify-between gap-8 px-6 py-20 lg:flex-row lg:items-center lg:px-10 lg:py-24"
	>
		<div class="max-w-xl">
			<p class="eyebrow">{T.contactCTA.eyebrow}</p>
			<h2 class="mt-4 text-3xl font-bold tracking-tight text-paper lg:text-4xl">{resolvedTitle}</h2>
			<p class="mt-4 text-paper/60">{resolvedSubtitle}</p>
		</div>
		<a
			href="/contact"
			class="inline-flex shrink-0 items-center justify-center bg-gold px-8 py-4 text-sm font-semibold tracking-wide text-obsidian transition-colors hover:bg-gold-soft"
		>
			{T.nav.contactSales}
		</a>
	</div>
</section>
