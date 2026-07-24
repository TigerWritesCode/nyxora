<script lang="ts">
	import ContactCTA from '$lib/components/ContactCTA.svelte';
	import { localeState } from '$lib/i18n/locale.svelte';
	import { ui } from '$lib/i18n/translations';

	const T = $derived(ui[localeState.current]);

	let openIndex = $state<number | null>(0);

	function toggle(i: number) {
		openIndex = openIndex === i ? null : i;
	}
</script>

<svelte:head>
	<title>{T.faq.title}</title>
</svelte:head>

<section class="hero">
	<div class="hero__inner">
		<p class="eyebrow">{T.faq.eyebrow}</p>
		<h1 class="hero__title">
			{T.faq.h1}
		</h1>
	</div>
</section>

<section class="faq">
	<div class="faq__list">
		{#each T.faq.items as item, i (item.q)}
			<div class="faq__item">
				<button class="faq__question" onclick={() => toggle(i)} aria-expanded={openIndex === i}>
					<span class="faq__question-text">{item.q}</span>
					<span class="faq__icon" class:is-open={openIndex === i}> + </span>
				</button>
				{#if openIndex === i}
					<p class="faq__answer">{item.a}</p>
				{/if}
			</div>
		{/each}
	</div>
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

	.faq {
		@include container;
		padding-block: 5rem;
	}

	.faq__list {
		margin-inline: auto;
		max-width: 42rem;
		border-block: 1px solid var(--color-line);
	}

	.faq__item:not(:first-child) {
		border-top: 1px solid var(--color-line);
	}

	.faq__question {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		padding-block: 1.5rem;
		text-align: left;
	}

	.faq__question-text {
		font-weight: 500;
		color: var(--color-ink);
	}

	.faq__icon {
		flex-shrink: 0;
		font-size: 1.25rem;
		font-weight: 300;
		color: var(--color-gold);
		transition: transform 300ms ease;

		&.is-open {
			transform: rotate(45deg);
		}
	}

	.faq__answer {
		padding-bottom: 1.5rem;
		padding-right: 2.5rem;
		font-size: 0.875rem;
		line-height: 1.6;
		color: color-mix(in srgb, var(--color-ink) 60%, transparent);
	}
</style>
