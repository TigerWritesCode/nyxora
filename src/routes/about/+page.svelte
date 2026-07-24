<script lang="ts">
	import ContactCTA from '$lib/components/ContactCTA.svelte';
	import { localeState } from '$lib/i18n/locale.svelte';
	import { ui } from '$lib/i18n/translations';

	const T = $derived(ui[localeState.current]);
</script>

<svelte:head>
	<title>{T.about.title}</title>
</svelte:head>

<section class="hero">
	<div class="hero__inner">
		<p class="eyebrow">{T.about.eyebrow}</p>
		<h1 class="sightline hero__title">
			{T.about.h1}
		</h1>
		<p class="hero__intro">
			{T.about.intro}
		</p>
		<p class="eyebrow hero__tagline">{T.about.tagline}</p>
	</div>
</section>

<section class="grid-section">
	<div class="grid-section__col">
		<p class="eyebrow">{T.about.storyEyebrow}</p>
		<h2 class="grid-section__heading">{T.about.storyTitle}</h2>
		<p class="grid-section__body">
			{T.about.storyBody}
		</p>
	</div>
	<div class="grid-section__col">
		<p class="eyebrow">{T.about.missionEyebrow}</p>
		<h2 class="grid-section__heading">{T.about.missionTitle}</h2>
		<p class="grid-section__body">
			{T.about.missionBody}
		</p>
	</div>
	<div class="grid-section__col">
		<p class="eyebrow">{T.about.approachEyebrow}</p>
		<h2 class="grid-section__heading">{T.about.approachTitle}</h2>
		<p class="grid-section__body">
			{T.about.approachBody}
		</p>
	</div>
</section>

<section class="values">
	<div class="values__inner">
		<p class="eyebrow">{T.about.valuesEyebrow}</p>
		<h2 class="values__title">
			{T.about.valuesTitle}
		</h2>

		<div class="values__grid">
			{#each T.about.values as v (v.title)}
				<div class="values__card">
					<h3 class="values__card-title">{v.title}</h3>
					<p class="values__card-body">{v.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<ContactCTA title={T.about.ctaTitle} subtitle={T.about.ctaSubtitle} />

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
			padding-bottom: 7rem;
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

	.hero__intro {
		margin-top: 2rem;
		max-width: 42rem;
		font-size: 1.125rem;
		line-height: 1.6;
		color: color-mix(in srgb, var(--color-ink) 60%, transparent);
	}

	.hero__tagline {
		margin-top: 1.5rem;
	}

	.grid-section {
		@include container;
		padding-block: 6rem;

		@include lg {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 4rem;
		}
	}

	.grid-section__col:not(:first-child) {
		margin-top: 3rem;

		@include lg {
			margin-top: 0;
		}
	}

	.grid-section__heading {
		margin-top: 1rem;
		font-size: 1.5rem;
		font-weight: 700;
		letter-spacing: -0.02em;
		color: var(--color-ink);
	}

	.grid-section__body {
		margin-top: 1rem;
		font-size: 0.875rem;
		line-height: 1.6;
		color: color-mix(in srgb, var(--color-ink) 60%, transparent);
	}

	.values {
		border-top: 1px solid var(--color-line);
		background-color: var(--color-mist);
	}

	.values__inner {
		@include container;
		padding-block: 6rem;
	}

	.values__title {
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

	.values__grid {
		margin-top: 3.5rem;
		display: grid;
		gap: 1.5rem;
		grid-template-columns: 1fr;

		@include sm {
			grid-template-columns: repeat(2, 1fr);
		}

		@include lg {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	.values__card {
		border-top: 2px solid var(--color-gold);
		background-color: var(--color-paper);
		padding: 1.75rem;
	}

	.values__card-title {
		font-weight: 600;
		color: var(--color-ink);
	}

	.values__card-body {
		margin-top: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.6;
		color: color-mix(in srgb, var(--color-ink) 60%, transparent);
	}
</style>
