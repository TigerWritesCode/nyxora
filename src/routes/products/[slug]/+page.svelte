<script lang="ts">
	import { page } from '$app/state';
	import ContactCTA from '$lib/components/ContactCTA.svelte';
	import { categories, products } from '$lib/data/content';
	import { localeState } from '$lib/i18n/locale.svelte';
	import { ui } from '$lib/i18n/translations';

	const T = $derived(ui[localeState.current]);
	const locale = $derived(localeState.current);

	const product = $derived(products.find((p) => p.slug === page.params.slug));
</script>

<svelte:head>
	<title>{product ? `${product.name} — NIXORA GEORGIA` : `${T.productDetail.notFound} — NIXORA GEORGIA`}</title>
</svelte:head>

{#if product}
	<section class="border-b border-line bg-obsidian text-paper">
		<div class="mx-auto grid max-w-content items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
			<div>
				<a href="/products" class="text-sm text-paper/50 hover:text-gold">{T.productDetail.backToCatalog}</a>
				<p class="eyebrow mt-6">{categories.find((c) => c.slug === product.categorySlug)?.name[locale]}</p>
				<h1 class="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">{product.name}</h1>
				<p class="mt-6 max-w-md leading-relaxed text-paper/60">{product.description[locale]}</p>
				<p class="mt-6 text-xs font-medium uppercase tracking-wide text-paper/40">
					{T.productDetail.distributedBy} {product.brand}
				</p>
				<a
					href="/contact"
					class="mt-10 inline-flex items-center justify-center bg-gold px-7 py-3.5 text-sm font-semibold text-obsidian transition-colors hover:bg-gold-soft"
				>
					{T.common.requestInformation}
				</a>
			</div>
			<div class="aspect-square border border-paper/10 bg-[#0f0f0f]">
				{#if product.image}
					<img src={product.image} alt={product.name} class="h-full w-full object-cover" />
				{:else}
					<div class="flex h-full items-center justify-center">
						<div class="flex h-40 w-40 items-center justify-center rounded-full border border-gold/40">
							<span class="h-2.5 w-2.5 rounded-full bg-gold"></span>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</section>

	<section class="mx-auto max-w-content px-6 py-20 lg:px-10">
		<p class="eyebrow">{T.productDetail.technicalHighlights}</p>
		<h2 class="mt-4 text-2xl font-bold tracking-tight text-ink">{T.productDetail.specification}</h2>
		<dl class="mt-8 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
			{#each product.highlights[locale] as h (h)}
				<div class="bg-paper p-6">
					<dd class="font-mono text-sm text-ink/80">{h}</dd>
				</div>
			{/each}
		</dl>
	</section>

	<ContactCTA
		title={`${T.productDetail.interestedIn} ${product.name}?`}
		subtitle={T.productDetail.ctaSubtitle}
	/>
{:else}
	<section class="mx-auto max-w-content px-6 py-32 text-center lg:px-10">
		<p class="eyebrow">{T.productDetail.notFound}</p>
		<h1 class="mt-4 text-3xl font-bold tracking-tight text-ink">{T.productDetail.notFoundTitle}</h1>
		<a href="/products" class="mt-8 inline-block text-sm font-semibold text-ink underline decoration-gold underline-offset-4">
			{T.productDetail.backToCatalog}
		</a>
	</section>
{/if}
