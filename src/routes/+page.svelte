<script lang="ts">
	import DeviceArt from '$lib/components/DeviceArt.svelte';
	import ContactCTA from '$lib/components/ContactCTA.svelte';
	import { products, industries } from '$lib/data/content';
	import { localeState } from '$lib/i18n/locale.svelte';
	import { ui } from '$lib/i18n/translations';

	const T = $derived(ui[localeState.current]);
	const locale = $derived(localeState.current);

	const flagship = products.find((p) => p.featured) ?? products[0];
</script>

<svelte:head>
	<title>{T.home.title}</title>
</svelte:head>

{#snippet heroText(size: 'desktop' | 'mobile')}
	<p class="eyebrow">{T.home.eyebrow}</p>
	<h1 class="sightline hero-text__title hero-text__title--{size}">
		{T.home.h1}
	</h1>
	<p class="hero-text__subtitle">
		{T.home.subtitle}
	</p>
	<div class="hero-text__actions">
		<a href="/contact" class="hero-text__btn hero-text__btn--solid">
			{T.home.ctaQuote}
		</a>
		<a href="/products" class="hero-text__btn hero-text__btn--outline">
			{T.home.exploreProducts}
		</a>
	</div>
{/snippet}

<!-- Hero -->
<section class="hero">
	<!-- Desktop (≥1024px): glow bleeds full viewport width, but the content itself stays
	     inside the site's normal boxed layout — product cluster right-aligned within that box. -->
	<div class="hero__glow" style="background: radial-gradient(ellipse 60% 90% at 82% 50%, rgba(201, 162, 39, 0.22), transparent 70%);"></div>
	<div class="hero__desktop" style="min-height: calc(100vh - 113px);">
		<div>
			{@render heroText('desktop')}
		</div>
		<div class="hero__desktop-photo">
			<img
				src="/images/banner-lg.svg"
				alt="NYXORA ELITE, ELITE PRO and ELITE PRO X laser hair removal platforms"
				class="hero__desktop-photo-img"
			/>
		</div>
	</div>

	<!-- Mobile/tablet (<1024px): stacked photo + text, filling the screen like the desktop version -->
	<div class="hero__mobile" style="min-height: calc(100vh - 113px);">
		<div class="reticle hero__mobile-photo">
			<img
				src="/images/banner-s.svg"
				alt="NYXORA ELITE, ELITE PRO and ELITE PRO X laser hair removal platforms"
				class="hero__mobile-photo-img"
			/>
		</div>
		<div class="hero__mobile-text">
			{@render heroText('mobile')}
		</div>
	</div>
</section>

<!-- Why choose NYXORA -->
<section class="why">
	<p class="eyebrow">{T.home.whyEyebrow}</p>
	<h2 class="why__title">
		{T.home.whyTitle}
	</h2>

	<div class="why__grid">
		{#each T.home.whyItems as item (item.title)}
			<div class="why__card">
				<div class="why__card-bar"></div>
				<h3 class="why__card-title">{item.title}</h3>
				<p class="why__card-body">{item.body}</p>
			</div>
		{/each}
	</div>
</section>

<!-- Platform lineup -->
<section class="lineup">
	<div class="lineup__inner">
		<div class="lineup__header">
			<div>
				<p class="eyebrow">{T.home.catalogEyebrow}</p>
				<h2 class="lineup__title">{T.home.catalogTitle}</h2>
			</div>
			<a href="/products" class="lineup__link">
				{T.home.viewFullCatalog}
			</a>
		</div>

		<div class="lineup__grid">
			{#each products as p (p.slug)}
				<a href={`/products/${p.slug}`} class="reticle lineup__card">
					<span class="lineup__card-bar"></span>
					<h3 class="lineup__card-title">{p.name}</h3>
					<p class="lineup__card-tagline">{p.tagline[locale]}</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Featured machine -->
<section class="featured">
	<div class="featured__inner">
		<div class="featured__image">
			{#if flagship.image}
				<img src={flagship.image} alt={flagship.name} class="featured__photo" />
			{:else}
				<DeviceArt variant="dark" />
			{/if}
		</div>

		<div class="featured__text">
			<p class="eyebrow">{T.home.featuredEyebrow}</p>
			<h2 class="featured__title">{flagship.name}</h2>
			<p class="featured__desc">{flagship.description[locale]}</p>

			<dl class="featured__specs">
				{#each flagship.highlights[locale] as h (h)}
					<div class="featured__spec">
						<dd class="featured__spec-value">{h}</dd>
					</div>
				{/each}
			</dl>

			<a href={`/products/${flagship.slug}`} class="featured__cta">
				{T.common.requestInformation}
			</a>
		</div>
	</div>
</section>

<!-- Industries -->
<section class="industries">
	<p class="eyebrow">{T.home.industriesEyebrow}</p>
	<h2 class="industries__title">
		{T.home.industriesTitle}
	</h2>

	<div class="industries__grid">
		{#each industries as ind (ind.name.en)}
			<div class="industries__card">
				<h3 class="industries__card-title">{ind.name[locale]}</h3>
				<p class="industries__card-body">{ind.description[locale]}</p>
			</div>
		{/each}
	</div>
</section>

<ContactCTA />

<style lang="scss">
	@use '$lib/styles/breakpoints' as *;

	// --- Shared hero text snippet ---
	.hero-text__title {
		margin-top: 1.25rem;
		font-weight: 700;
		line-height: 1.08;
		letter-spacing: -0.02em;
		color: var(--color-ink);

		&--desktop {
			font-size: 2.25rem;

			@include xl {
				font-size: 3rem;
			}
		}

		&--mobile {
			font-size: 2.25rem;
		}
	}

	.hero-text__subtitle {
		margin-top: 0.75rem;
		max-width: 32rem;
		font-size: 0.875rem;
		line-height: 1.6;
		color: color-mix(in srgb, var(--color-ink) 60%, transparent);

		@include sm {
			margin-top: 2rem;
			font-size: 1rem;
		}

		@include md {
			font-size: 1.125rem;
		}
	}

	.hero-text__actions {
		margin-top: 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;

		@include sm {
			margin-top: 2.5rem;
		}
	}

	.hero-text__btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.875rem 1.75rem;
		font-size: 0.875rem;
		font-weight: 600;
		transition:
			background-color 150ms ease,
			color 150ms ease,
			border-color 150ms ease;

		&--solid {
			background-color: var(--color-obsidian);
			color: var(--color-paper);

			&:hover {
				background-color: var(--color-gold);
				color: var(--color-obsidian);
			}
		}

		&--outline {
			border: 1px solid var(--color-line);
			color: var(--color-ink);

			&:hover {
				border-color: var(--color-gold);
				color: var(--color-gold);
			}
		}
	}

	// --- Hero section ---
	.hero {
		position: relative;
		border-bottom: 1px solid var(--color-line);
		overflow: hidden;
	}

	.hero__glow {
		display: none;
		pointer-events: none;
		position: absolute;
		inset: 0;
		z-index: -10;

		@include lg {
			display: block;
		}
	}

	.hero__desktop {
		display: none;
		margin-inline: auto;
		max-width: var(--container-content);

		@include lg {
			display: grid;
			grid-template-columns: 1fr auto;
			align-items: center;
			gap: 4rem;
			padding-inline: 2.5rem;
			padding-block: 2.5rem;
		}
	}

	.hero__desktop-photo {
		aspect-ratio: 5 / 4;
		width: 480px;
		overflow: hidden;

		@include xl {
			width: 560px;
		}
	}

	.hero__desktop-photo-img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		object-position: right;
	}

	.hero__mobile {
		display: flex;
		flex-direction: column;
		padding-inline: 1.5rem;

		@include lg {
			display: none;
		}
	}

	.hero__mobile-photo {
		width: 100%;
		flex: 1;
		overflow: hidden;
		padding-top: 0.75rem;

		@include sm {
			padding-top: 1.5rem;
		}
	}

	.hero__mobile-photo-img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	.hero__mobile-text {
		display: flex;
		flex: 2;
		flex-direction: column;
		justify-content: center;
		padding-block: 0.75rem;

		@include sm {
			padding-block: 1.5rem;
		}
	}

	// --- Why choose NYXORA ---
	.why {
		@include container;
		padding-block: 6rem;
	}

	.why__title {
		margin-top: 1rem;
		max-width: 36rem;
		font-size: 1.875rem;
		font-weight: 700;
		letter-spacing: -0.02em;
		color: var(--color-ink);

		@include lg {
			font-size: 2.25rem;
		}
	}

	.why__grid {
		margin-top: 3.5rem;
		display: grid;
		gap: 1px;
		overflow: hidden;
		border: 1px solid var(--color-line);
		background-color: var(--color-line);

		@include sm {
			grid-template-columns: repeat(2, 1fr);
		}

		@include lg {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	.why__card {
		background-color: var(--color-paper);
		padding: 2rem;
		transition: background-color 150ms ease;

		&:hover {
			background-color: var(--color-mist);
		}

		&:hover .why__card-bar {
			width: 3.5rem;
		}
	}

	.why__card-bar {
		height: 1px;
		width: 2rem;
		background-color: var(--color-gold);
		transition: width 300ms ease;
	}

	.why__card-title {
		margin-top: 1.5rem;
		font-size: 1.125rem;
		font-weight: 600;
		color: var(--color-ink);
	}

	.why__card-body {
		margin-top: 0.75rem;
		font-size: 0.875rem;
		line-height: 1.6;
		color: color-mix(in srgb, var(--color-ink) 60%, transparent);
	}

	// --- Platform lineup ---
	.lineup {
		border-top: 1px solid var(--color-line);
		background-color: var(--color-mist);
	}

	.lineup__inner {
		@include container;
		padding-block: 6rem;
	}

	.lineup__header {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 1rem;

		@include lg {
			flex-direction: row;
			align-items: flex-end;
		}
	}

	.lineup__title {
		margin-top: 1rem;
		font-size: 1.875rem;
		font-weight: 700;
		letter-spacing: -0.02em;
		color: var(--color-ink);

		@include lg {
			font-size: 2.25rem;
		}
	}

	.lineup__link {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-ink);
		text-decoration: underline;
		text-decoration-color: var(--color-gold);
		text-underline-offset: 4px;
	}

	.lineup__grid {
		margin-top: 3.5rem;
		display: grid;
		gap: 1.5rem;

		@include sm {
			grid-template-columns: repeat(2, 1fr);
		}

		@include lg {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.lineup__card {
		display: flex;
		aspect-ratio: 4 / 3;
		flex-direction: column;
		justify-content: flex-end;
		overflow: hidden;
		border: 1px solid var(--color-line);
		background-color: var(--color-obsidian);
		padding: 1.75rem;
		transition: border-color 150ms ease;

		&:hover {
			border-color: var(--color-gold);
		}

		&:hover .lineup__card-bar {
			width: 3.5rem;
			opacity: 1;
		}
	}

	.lineup__card-bar {
		display: block;
		margin-bottom: 0.75rem;
		height: 1px;
		width: 2rem;
		background-color: var(--color-gold);
		opacity: 0.7;
		transition:
			width 300ms ease,
			opacity 300ms ease;
	}

	.lineup__card-title {
		font-size: 1.125rem;
		font-weight: 600;
		color: var(--color-paper);
	}

	.lineup__card-tagline {
		margin-top: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.6;
		color: color-mix(in srgb, var(--color-paper) 50%, transparent);
	}

	// --- Featured machine ---
	.featured {
		border-top: 1px solid var(--color-line);
		background-color: var(--color-obsidian);
		color: var(--color-paper);
	}

	.featured__inner {
		@include container;
		display: grid;
		align-items: center;
		gap: 3rem;
		padding-block: 6rem;

		@include lg {
			grid-template-columns: repeat(2, 1fr);
			gap: 4rem;
			padding-block: 7rem;
		}
	}

	.featured__image {
		order: 2;
		aspect-ratio: 1 / 1;
		width: 100%;
		overflow: hidden;

		@include lg {
			order: 1;
		}
	}

	.featured__photo {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	.featured__text {
		order: 1;

		@include lg {
			order: 2;
		}
	}

	.featured__title {
		margin-top: 1rem;
		font-size: 1.875rem;
		font-weight: 700;
		letter-spacing: -0.02em;

		@include lg {
			font-size: 2.25rem;
		}
	}

	.featured__desc {
		margin-top: 1.25rem;
		max-width: 28rem;
		line-height: 1.6;
		color: color-mix(in srgb, var(--color-paper) 60%, transparent);
	}

	.featured__specs {
		margin-top: 2.25rem;
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;

		@include sm {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.featured__spec {
		border-left: 1px solid color-mix(in srgb, var(--color-gold) 40%, transparent);
		padding-left: 1rem;
	}

	.featured__spec-value {
		font-family: var(--font-mono);
		font-size: 0.875rem;
		color: color-mix(in srgb, var(--color-paper) 80%, transparent);
	}

	.featured__cta {
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

	// --- Industries ---
	.industries {
		@include container;
		padding-block: 6rem;
	}

	.industries__title {
		margin-top: 1rem;
		max-width: 36rem;
		font-size: 1.875rem;
		font-weight: 700;
		letter-spacing: -0.02em;
		color: var(--color-ink);

		@include lg {
			font-size: 2.25rem;
		}
	}

	.industries__grid {
		margin-top: 3.5rem;
		display: grid;
		gap: 1.5rem;

		@include sm {
			grid-template-columns: repeat(2, 1fr);
		}

		@include lg {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	.industries__card {
		border-top: 2px solid var(--color-gold);
		padding-top: 1.25rem;
	}

	.industries__card-title {
		font-weight: 600;
		color: var(--color-ink);
	}

	.industries__card-body {
		margin-top: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.6;
		color: color-mix(in srgb, var(--color-ink) 55%, transparent);
	}
</style>
