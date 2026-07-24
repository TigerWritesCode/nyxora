<script lang="ts">
	import { localeState } from '$lib/i18n/locale.svelte';
	import { ui } from '$lib/i18n/translations';

	const T = $derived(ui[localeState.current]);

	let { title, subtitle }: { title?: string; subtitle?: string } = $props();

	const resolvedTitle = $derived(title ?? T.contactCTA.title);
	const resolvedSubtitle = $derived(subtitle ?? T.contactCTA.subtitle);
</script>

<section class="contact-cta">
	<div class="contact-cta__inner">
		<div class="contact-cta__text">
			<p class="eyebrow">{T.contactCTA.eyebrow}</p>
			<h2 class="contact-cta__title">{resolvedTitle}</h2>
			<p class="contact-cta__subtitle">{resolvedSubtitle}</p>
		</div>
		<a href="/contact" class="contact-cta__button">
			{T.nav.contactSales}
		</a>
	</div>
</section>

<style lang="scss">
	@use '$lib/styles/breakpoints' as *;

	.contact-cta {
		background-color: var(--color-obsidian);
	}

	.contact-cta__inner {
		@include container;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		gap: 2rem;
		padding-block: 5rem;

		@include lg {
			flex-direction: row;
			align-items: center;
			padding-block: 6rem;
		}
	}

	.contact-cta__text {
		max-width: 36rem;
	}

	.contact-cta__title {
		margin-top: 1rem;
		font-size: 1.875rem;
		font-weight: 700;
		letter-spacing: -0.02em;
		color: var(--color-paper);

		@include lg {
			font-size: 2.25rem;
		}
	}

	.contact-cta__subtitle {
		margin-top: 1rem;
		color: color-mix(in srgb, var(--color-paper) 60%, transparent);
	}

	.contact-cta__button {
		flex-shrink: 0;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background-color: var(--color-gold);
		padding: 1rem 2rem;
		font-size: 0.875rem;
		font-weight: 600;
		letter-spacing: 0.02em;
		color: var(--color-obsidian);
		transition: background-color 150ms ease;

		&:hover {
			background-color: var(--color-gold-soft);
		}
	}
</style>
