<script lang="ts">
	import ContactCTA from '$lib/components/ContactCTA.svelte';
	import { localeState } from '$lib/i18n/locale.svelte';
	import { ui } from '$lib/i18n/translations';

	const T = $derived(ui[localeState.current]);
</script>

<svelte:head>
	<title>{T.about.title}</title>
</svelte:head>

<section class="border-b border-line">
	<div class="mx-auto max-w-content px-6 py-20 lg:px-10 lg:py-28">
		<p class="eyebrow">{T.about.eyebrow}</p>
		<h1 class="sightline mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-ink lg:text-5xl">
			{T.about.h1}
		</h1>
		<p class="mt-8 max-w-2xl text-lg leading-relaxed text-ink/60">
			{T.about.intro}
		</p>
	</div>
</section>

<section class="mx-auto max-w-content px-6 py-24 lg:grid lg:grid-cols-3 lg:gap-16 lg:px-10">
	<div>
		<p class="eyebrow">{T.about.storyEyebrow}</p>
		<h2 class="mt-4 text-2xl font-bold tracking-tight text-ink">{T.about.storyTitle}</h2>
		<p class="mt-4 text-sm leading-relaxed text-ink/60">
			{T.about.storyBody}
		</p>
	</div>
	<div class="mt-12 lg:mt-0">
		<p class="eyebrow">{T.about.missionEyebrow}</p>
		<h2 class="mt-4 text-2xl font-bold tracking-tight text-ink">{T.about.missionTitle}</h2>
		<p class="mt-4 text-sm leading-relaxed text-ink/60">
			{T.about.missionBody}
		</p>
	</div>
	<div class="mt-12 lg:mt-0">
		<p class="eyebrow">{T.about.approachEyebrow}</p>
		<h2 class="mt-4 text-2xl font-bold tracking-tight text-ink">{T.about.approachTitle}</h2>
		<p class="mt-4 text-sm leading-relaxed text-ink/60">
			{T.about.approachBody}
		</p>
	</div>
</section>

<section class="border-t border-line bg-mist">
	<div class="mx-auto max-w-content px-6 py-24 lg:px-10">
		<p class="eyebrow">{T.about.valuesEyebrow}</p>
		<h2 class="mt-4 max-w-xl text-3xl font-bold tracking-tight text-ink lg:text-4xl">
			{T.about.valuesTitle}
		</h2>

		<div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each T.about.values as v (v.title)}
				<div class="border-t-2 border-gold bg-paper p-7">
					<h3 class="font-semibold text-ink">{v.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-ink/60">{v.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<ContactCTA title={T.about.ctaTitle} subtitle={T.about.ctaSubtitle} />
