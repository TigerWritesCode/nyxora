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

<section class="border-b border-line">
	<div class="mx-auto max-w-content px-6 py-20 lg:px-10 lg:py-24">
		<p class="eyebrow">{T.faq.eyebrow}</p>
		<h1 class="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-ink lg:text-5xl">
			{T.faq.h1}
		</h1>
	</div>
</section>

<section class="mx-auto max-w-content px-6 py-20 lg:px-10">
	<div class="mx-auto max-w-2xl divide-y divide-line border-y border-line">
		{#each T.faq.items as item, i (item.q)}
			<div>
				<button
					class="flex w-full items-center justify-between gap-6 py-6 text-left"
					onclick={() => toggle(i)}
					aria-expanded={openIndex === i}
				>
					<span class="font-medium text-ink">{item.q}</span>
					<span
						class="shrink-0 text-xl font-light text-gold transition-transform duration-300"
						class:rotate-45={openIndex === i}
					>
						+
					</span>
				</button>
				{#if openIndex === i}
					<p class="pb-6 pr-10 text-sm leading-relaxed text-ink/60">{item.a}</p>
				{/if}
			</div>
		{/each}
	</div>
</section>

<ContactCTA />
