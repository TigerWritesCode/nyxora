<script lang="ts">
	import { page } from '$app/state';
	import ContactCTA from '$lib/components/ContactCTA.svelte';
	import { categories, products } from '$lib/data/content';
	import { localeState } from '$lib/i18n/locale.svelte';
	import { ui } from '$lib/i18n/translations';

	const T = $derived(ui[localeState.current]);
	const locale = $derived(localeState.current);

	const activeCategory = $derived(page.url.searchParams.get('category'));

	const filtered = $derived(
		activeCategory ? products.filter((p) => p.categorySlug === activeCategory) : products
	);
</script>

<svelte:head>
	<title>{T.products.title}</title>
</svelte:head>

<section class="border-b border-line">
	<div class="mx-auto max-w-content px-6 py-20 lg:px-10 lg:py-24">
		<p class="eyebrow">{T.products.eyebrow}</p>
		<h1 class="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-ink lg:text-5xl">
			{T.products.h1}
		</h1>
		<p class="mt-6 max-w-xl text-ink/60">
			{T.products.subtitle}
		</p>
	</div>
</section>

<section class="mx-auto max-w-content px-6 py-14 lg:px-10">
	<div class="flex flex-wrap gap-2.5">
		<a
			href="/products"
			class="border px-4 py-2 text-sm font-medium transition-colors"
			class:border-obsidian={!activeCategory}
			class:bg-obsidian={!activeCategory}
			class:text-paper={!activeCategory}
			class:border-line={activeCategory}
			class:text-ink={activeCategory}
		>
			{T.products.all}
		</a>
		{#each categories as cat (cat.slug)}
			<a
				href={`/products?category=${cat.slug}`}
				class="border px-4 py-2 text-sm font-medium transition-colors"
				class:border-obsidian={activeCategory === cat.slug}
				class:bg-obsidian={activeCategory === cat.slug}
				class:text-paper={activeCategory === cat.slug}
				class:border-line={activeCategory !== cat.slug}
				class:text-ink={activeCategory !== cat.slug}
			>
				{cat.name[locale]}
			</a>
		{/each}
	</div>

	<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each filtered as p (p.slug)}
			<a href={`/products/${p.slug}`} class="reticle group border border-line bg-paper transition-colors hover:border-gold">
				<div class="border-b border-line bg-mist p-8">
					<div class="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-gold/40">
						<span class="h-2 w-2 rounded-full bg-gold"></span>
					</div>
				</div>
				<div class="p-6">
					<p class="eyebrow">{categories.find((c) => c.slug === p.categorySlug)?.name[locale]}</p>
					<h3 class="mt-2 text-lg font-semibold text-ink">{p.name}</h3>
					<p class="mt-2 text-sm leading-relaxed text-ink/55">{p.description[locale]}</p>
					<p class="mt-4 text-xs font-medium uppercase tracking-wide text-ink/40">{p.brand}</p>
					<span class="mt-5 inline-block text-sm font-semibold text-ink underline decoration-gold underline-offset-4">
						{T.common.requestInformationArrow}
					</span>
				</div>
			</a>
		{/each}
	</div>

	{#if filtered.length === 0}
		<p class="mt-12 text-ink/50">{T.products.empty}</p>
	{/if}
</section>

<ContactCTA />
