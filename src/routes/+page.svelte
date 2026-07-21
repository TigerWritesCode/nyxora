<script lang="ts">
	import DeviceArt from '$lib/components/DeviceArt.svelte';
	import ContactCTA from '$lib/components/ContactCTA.svelte';
	import { categories, products, industries, brands } from '$lib/data/content';
	import { localeState } from '$lib/i18n/locale.svelte';
	import { ui } from '$lib/i18n/translations';

	const T = $derived(ui[localeState.current]);
	const locale = $derived(localeState.current);

	const flagship = products.find((p) => p.featured) ?? products[0];
</script>

<svelte:head>
	<title>{T.home.title}</title>
</svelte:head>

<!-- Hero -->
<section class="border-b border-line">
	<div
		class="mx-auto grid max-w-content items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-28"
	>
		<div>
			<p class="eyebrow">{T.home.eyebrow}</p>
			<h1 class="sightline mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-ink lg:text-6xl">
				{T.home.h1}
			</h1>
			<p class="mt-8 max-w-lg text-lg leading-relaxed text-ink/60">
				{T.home.subtitle}
			</p>
			<div class="mt-10 flex flex-wrap gap-4">
				<a
					href="/contact"
					class="inline-flex items-center justify-center bg-obsidian px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-gold hover:text-obsidian"
				>
					{T.nav.contactSales}
				</a>
				<a
					href="/products"
					class="inline-flex items-center justify-center border border-line px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-gold hover:text-gold"
				>
					{T.home.exploreProducts}
				</a>
			</div>
		</div>

		<div class="reticle aspect-square w-full max-w-md justify-self-center lg:justify-self-end">
			<DeviceArt />
		</div>
	</div>
</section>

<!-- Why choose Nixora -->
<section class="mx-auto max-w-content px-6 py-24 lg:px-10">
	<p class="eyebrow">{T.home.whyEyebrow}</p>
	<h2 class="mt-4 max-w-xl text-3xl font-bold tracking-tight text-ink lg:text-4xl">
		{T.home.whyTitle}
	</h2>

	<div class="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
		{#each T.home.whyItems as item (item.title)}
			<div class="group bg-paper p-8 transition-colors hover:bg-mist">
				<div class="h-px w-8 bg-gold transition-all duration-300 group-hover:w-14"></div>
				<h3 class="mt-6 text-lg font-semibold text-ink">{item.title}</h3>
				<p class="mt-3 text-sm leading-relaxed text-ink/60">{item.body}</p>
			</div>
		{/each}
	</div>
</section>

<!-- Product categories -->
<section class="border-t border-line bg-mist">
	<div class="mx-auto max-w-content px-6 py-24 lg:px-10">
		<div class="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
			<div>
				<p class="eyebrow">{T.home.catalogEyebrow}</p>
				<h2 class="mt-4 text-3xl font-bold tracking-tight text-ink lg:text-4xl">{T.home.catalogTitle}</h2>
			</div>
			<a href="/products" class="text-sm font-semibold text-ink underline decoration-gold underline-offset-4">
				{T.home.viewFullCatalog}
			</a>
		</div>

		<div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each categories as cat (cat.slug)}
				<a
					href={`/products?category=${cat.slug}`}
					class="reticle group flex aspect-[4/3] flex-col justify-end overflow-hidden border border-line bg-obsidian p-7 transition-colors hover:border-gold"
				>
					<span
						class="mb-3 h-px w-8 bg-gold opacity-70 transition-all duration-300 group-hover:w-14 group-hover:opacity-100"
					></span>
					<h3 class="text-lg font-semibold text-paper">{cat.name[locale]}</h3>
					<p class="mt-2 text-sm leading-relaxed text-paper/50">{cat.description[locale]}</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Featured machine -->
<section class="border-t border-line bg-obsidian text-paper">
	<div class="mx-auto grid max-w-content items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-28">
		<div class="order-2 aspect-square w-full lg:order-1">
			<DeviceArt variant="dark" />
		</div>

		<div class="order-1 lg:order-2">
			<p class="eyebrow">{T.home.featuredEyebrow}</p>
			<h2 class="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">{flagship.name}</h2>
			<p class="mt-5 max-w-md leading-relaxed text-paper/60">{flagship.description[locale]}</p>

			<dl class="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
				{#each flagship.highlights[locale] as h (h)}
					<div class="border-l border-gold/40 pl-4">
						<dd class="font-mono text-sm text-paper/80">{h}</dd>
					</div>
				{/each}
			</dl>

			<a
				href={`/products/${flagship.slug}`}
				class="mt-10 inline-flex items-center justify-center bg-gold px-7 py-3.5 text-sm font-semibold text-obsidian transition-colors hover:bg-gold-soft"
			>
				{T.common.requestInformation}
			</a>
		</div>
	</div>
</section>

<!-- Industries -->
<section class="mx-auto max-w-content px-6 py-24 lg:px-10">
	<p class="eyebrow">{T.home.industriesEyebrow}</p>
	<h2 class="mt-4 max-w-xl text-3xl font-bold tracking-tight text-ink lg:text-4xl">
		{T.home.industriesTitle}
	</h2>

	<div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
		{#each industries as ind (ind.name.en)}
			<div class="border-t-2 border-gold pt-5">
				<h3 class="font-semibold text-ink">{ind.name[locale]}</h3>
				<p class="mt-2 text-sm leading-relaxed text-ink/55">{ind.description[locale]}</p>
			</div>
		{/each}
	</div>
</section>

<!-- Brands -->
<section class="border-y border-line bg-mist">
	<div class="mx-auto max-w-content px-6 py-20 lg:px-10">
		<p class="eyebrow text-center">{T.home.brandsEyebrow}</p>
		<div class="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-4">
			{#each brands as b (b.name)}
				<div class="flex items-center justify-center border border-line bg-paper px-6 py-8 text-center">
					<span class="font-display text-sm font-semibold tracking-tight text-ink/70">{b.name}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<ContactCTA />
