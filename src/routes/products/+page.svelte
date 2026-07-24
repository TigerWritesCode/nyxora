<script lang="ts">
	import ContactCTA from '$lib/components/ContactCTA.svelte';
	import { products } from '$lib/data/content';
	import { localeState } from '$lib/i18n/locale.svelte';
	import { ui } from '$lib/i18n/translations';

	const T = $derived(ui[localeState.current]);
	const locale = $derived(localeState.current);
</script>

<svelte:head>
	<title>{T.products.title}</title>
</svelte:head>

<section class="hero">
	<div class="hero__inner">
		<p class="eyebrow">{T.products.eyebrow}</p>
		<h1 class="hero__title">
			{T.products.h1}
		</h1>
		<p class="hero__subtitle">
			{T.products.subtitle}
		</p>
	</div>
</section>

<section class="catalog">
	<div class="catalog__grid">
		{#each products as p (p.slug)}
			<a href={`/products/${p.slug}`} class="reticle catalog__card">
				<div class="catalog__image">
					{#if p.image}
						<img src={p.image} alt={p.name} class="catalog__photo" loading="lazy" />
					{:else}
						<div class="catalog__placeholder">
							<div class="catalog__placeholder-ring">
								<span class="catalog__placeholder-dot"></span>
							</div>
						</div>
					{/if}
				</div>
				<div class="catalog__content">
					<p class="eyebrow">{p.tagline[locale]}</p>
					<h3 class="catalog__name">{p.name}</h3>
					<p class="catalog__desc">{p.description[locale]}</p>
					<span class="catalog__cta">
						{T.common.requestInformationArrow}
					</span>
				</div>
			</a>
		{/each}
	</div>

	{#if products.length === 0}
		<p class="catalog__empty">{T.products.empty}</p>
	{/if}
</section>

<ContactCTA />

<style lang="scss">
	@use '$lib/styles/breakpoints' as *;

	.hero {
		border-bottom: 1px solid var(--color-line);
	}

	.hero__inner {
		@include container;
		padding-top: 1.5rem;
		padding-bottom: 5rem;

		@include lg {
			padding-top: 2rem;
			padding-bottom: 6rem;
		}
	}

	.hero__title {
		margin-top: 1.25rem;
		max-width: 42rem;
		font-size: 2.25rem;
		font-weight: 700;
		line-height: 1.2;
		letter-spacing: -0.02em;
		color: var(--color-ink);

		@include lg {
			font-size: 3rem;
		}
	}

	.hero__subtitle {
		margin-top: 1.5rem;
		max-width: 36rem;
		color: color-mix(in srgb, var(--color-ink) 60%, transparent);
	}

	.catalog {
		@include container;
		padding-block: 3.5rem;
	}

	.catalog__grid {
		display: grid;
		gap: 1.5rem;

		@include sm {
			grid-template-columns: repeat(2, 1fr);
		}

		@include lg {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.catalog__card {
		display: block;
		border: 1px solid var(--color-line);
		background-color: var(--color-paper);
		transition: border-color 150ms ease;

		&:hover {
			border-color: var(--color-gold);
		}
	}

	.catalog__image {
		aspect-ratio: 4 / 3;
		border-bottom: 1px solid var(--color-line);
		background-color: var(--color-mist);
	}

	.catalog__photo {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	.catalog__placeholder {
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: center;
		padding: 2rem;
	}

	.catalog__placeholder-ring {
		display: flex;
		height: 7rem;
		width: 7rem;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		border: 1px solid color-mix(in srgb, var(--color-gold) 40%, transparent);
	}

	.catalog__placeholder-dot {
		height: 0.5rem;
		width: 0.5rem;
		border-radius: 9999px;
		background-color: var(--color-gold);
	}

	.catalog__content {
		padding: 1.5rem;
	}

	.catalog__name {
		margin-top: 0.5rem;
		font-size: 1.125rem;
		font-weight: 600;
		color: var(--color-ink);
	}

	.catalog__desc {
		margin-top: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.6;
		color: color-mix(in srgb, var(--color-ink) 55%, transparent);
	}

	.catalog__cta {
		margin-top: 1.25rem;
		display: inline-block;
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-ink);
		text-decoration: underline;
		text-decoration-color: var(--color-gold);
		text-underline-offset: 4px;
	}

	.catalog__empty {
		margin-top: 3rem;
		color: color-mix(in srgb, var(--color-ink) 50%, transparent);
	}
</style>
