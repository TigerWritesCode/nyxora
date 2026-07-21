<script lang="ts">
	import ContactCTA from '$lib/components/ContactCTA.svelte';
	import { partners } from '$lib/data/content';
	import { localeState } from '$lib/i18n/locale.svelte';
	import { ui } from '$lib/i18n/translations';

	const T = $derived(ui[localeState.current]);
	const locale = $derived(localeState.current);
</script>

<svelte:head>
	<title>{T.partners.title}</title>
</svelte:head>

<section class="border-b border-line">
	<div class="mx-auto max-w-content px-6 py-20 lg:px-10 lg:py-24">
		<p class="eyebrow">{T.partners.eyebrow}</p>
		<h1 class="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-ink lg:text-5xl">
			{T.partners.h1}
		</h1>
		<p class="mt-6 max-w-xl text-ink/60">
			{T.partners.subtitle}
		</p>
	</div>
</section>

<section class="mx-auto max-w-content px-6 py-20 lg:px-10">
	<div class="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
		{#each partners as p (p.name)}
			<div class="bg-paper p-8">
				<p class="eyebrow">{p.type[locale]}</p>
				<h3 class="mt-3 text-lg font-semibold text-ink">{p.name}</h3>
			</div>
		{/each}
	</div>
</section>

<ContactCTA title={T.partners.ctaTitle} subtitle={T.partners.ctaSubtitle} />
