<script lang="ts">
	import { page } from '$app/state';
	import ContactCTA from '$lib/components/ContactCTA.svelte';
	import { products } from '$lib/data/content';
	import { localeState } from '$lib/i18n/locale.svelte';
	import { ui } from '$lib/i18n/translations';

	const T = $derived(ui[localeState.current]);
	const locale = $derived(localeState.current);

	const product = $derived(products.find((p) => p.slug === page.params.slug));
</script>

<svelte:head>
	<title>{product ? `${product.name} — NYXORA GEORGIA` : `${T.productDetail.notFound} — NYXORA GEORGIA`}</title>
</svelte:head>

{#if product}
	<section class="detail-hero">
		<div class="detail-hero__inner">
			<div>
				<a href="/products" class="detail-hero__back">{T.productDetail.backToCatalog}</a>
				<p class="eyebrow detail-hero__tagline">{product.tagline[locale]}</p>
				<h1 class="detail-hero__title">{product.name}</h1>
				<p class="detail-hero__desc">{product.description[locale]}</p>
				<a href="/contact" class="detail-hero__cta">
					{T.common.requestInformation}
				</a>
			</div>
			<div class="detail-hero__image">
				{#if product.image}
					<img src={product.image} alt={product.name} class="detail-hero__photo" />
				{:else}
					<div class="detail-hero__placeholder">
						<div class="detail-hero__placeholder-ring">
							<span class="detail-hero__placeholder-dot"></span>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</section>

	<section class="specs">
		<p class="eyebrow">{T.productDetail.technicalHighlights}</p>
		<h2 class="specs__title">{T.productDetail.specification}</h2>
		<dl class="specs__grid">
			{#each product.highlights[locale] as h (h)}
				<div class="specs__item">
					<dd class="specs__value">{h}</dd>
				</div>
			{/each}
		</dl>
	</section>

	<ContactCTA title={`${T.productDetail.interestedIn} ${product.name}?`} subtitle={T.productDetail.ctaSubtitle} />
{:else}
	<section class="not-found">
		<p class="eyebrow">{T.productDetail.notFound}</p>
		<h1 class="not-found__title">{T.productDetail.notFoundTitle}</h1>
		<a href="/products" class="not-found__link">
			{T.productDetail.backToCatalog}
		</a>
	</section>
{/if}

<style lang="scss">
	@use '$lib/styles/breakpoints' as *;

	.detail-hero {
		border-bottom: 1px solid var(--color-line);
		background-color: var(--color-obsidian);
		color: var(--color-paper);
	}

	.detail-hero__inner {
		@include container;
		display: grid;
		align-items: center;
		gap: 3rem;
		padding-top: 1.5rem;
		padding-bottom: 5rem;

		@include lg {
			grid-template-columns: repeat(2, 1fr);
			gap: 4rem;
			padding-top: 2rem;
			padding-bottom: 6rem;
		}
	}

	.detail-hero__back {
		font-size: 0.875rem;
		color: color-mix(in srgb, var(--color-paper) 50%, transparent);

		&:hover {
			color: var(--color-gold);
		}
	}

	.detail-hero__tagline {
		margin-top: 1.5rem;
	}

	.detail-hero__title {
		margin-top: 1rem;
		font-size: 2.25rem;
		font-weight: 700;
		letter-spacing: -0.02em;

		@include lg {
			font-size: 3rem;
		}
	}

	.detail-hero__desc {
		margin-top: 1.5rem;
		max-width: 28rem;
		line-height: 1.6;
		color: color-mix(in srgb, var(--color-paper) 60%, transparent);
	}

	.detail-hero__cta {
		margin-top: 2.5rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background-color: var(--color-gold);
		padding: 0.875rem 1.75rem;
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-obsidian);
		transition: background-color 150ms ease;

		&:hover {
			background-color: var(--color-gold-soft);
		}
	}

	.detail-hero__image {
		aspect-ratio: 1 / 1;
		border: 1px solid color-mix(in srgb, var(--color-paper) 10%, transparent);
		background-color: #0f0f0f;
	}

	.detail-hero__photo {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	.detail-hero__placeholder {
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: center;
	}

	.detail-hero__placeholder-ring {
		display: flex;
		height: 10rem;
		width: 10rem;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		border: 1px solid color-mix(in srgb, var(--color-gold) 40%, transparent);
	}

	.detail-hero__placeholder-dot {
		height: 0.625rem;
		width: 0.625rem;
		border-radius: 9999px;
		background-color: var(--color-gold);
	}

	.specs {
		@include container;
		padding-block: 5rem;
	}

	.specs__title {
		margin-top: 1rem;
		font-size: 1.5rem;
		font-weight: 700;
		letter-spacing: -0.02em;
		color: var(--color-ink);
	}

	.specs__grid {
		margin-top: 2rem;
		display: grid;
		gap: 1px;
		overflow: hidden;
		border: 1px solid var(--color-line);
		background-color: var(--color-line);

		@include sm {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.specs__item {
		background-color: var(--color-paper);
		padding: 1.5rem;
	}

	.specs__value {
		font-family: var(--font-mono);
		font-size: 0.875rem;
		color: color-mix(in srgb, var(--color-ink) 80%, transparent);
	}

	.not-found {
		@include container;
		padding-block: 8rem;
		text-align: center;
	}

	.not-found__title {
		margin-top: 1rem;
		font-size: 1.875rem;
		font-weight: 700;
		letter-spacing: -0.02em;
		color: var(--color-ink);
	}

	.not-found__link {
		margin-top: 2rem;
		display: inline-block;
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-ink);
		text-decoration: underline;
		text-decoration-color: var(--color-gold);
		text-underline-offset: 4px;
	}
</style>
