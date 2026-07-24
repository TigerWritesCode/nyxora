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

<section class="hero">
	<div class="hero__inner">
		<p class="eyebrow">{T.partners.eyebrow}</p>
		<h1 class="hero__title">
			{T.partners.h1}
		</h1>
		<p class="hero__subtitle">
			{T.partners.subtitle}
		</p>
	</div>
</section>

<section class="grid-section">
	<div class="grid-section__list">
		{#each partners as p (p.name)}
			<div class="grid-section__card">
				<p class="eyebrow">{p.type[locale]}</p>
				<h3 class="grid-section__name">{p.name}</h3>
			</div>
		{/each}
	</div>
</section>

<ContactCTA title={T.partners.ctaTitle} subtitle={T.partners.ctaSubtitle} />

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

	.grid-section {
		@include container;
		padding-block: 5rem;
	}

	.grid-section__list {
		display: grid;
		gap: 1px;
		overflow: hidden;
		border: 1px solid var(--color-line);
		background-color: var(--color-line);

		@include sm {
			grid-template-columns: repeat(2, 1fr);
		}

		@include lg {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.grid-section__card {
		background-color: var(--color-paper);
		padding: 2rem;
	}

	.grid-section__name {
		margin-top: 0.75rem;
		font-size: 1.125rem;
		font-weight: 600;
		color: var(--color-ink);
	}
</style>
