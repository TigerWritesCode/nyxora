<script lang="ts">
	import ContactCTA from '$lib/components/ContactCTA.svelte';
	import { blogPosts } from '$lib/data/content';
	import { localeState } from '$lib/i18n/locale.svelte';
	import { ui } from '$lib/i18n/translations';

	const T = $derived(ui[localeState.current]);
	const locale = $derived(localeState.current);

	function formatDate(iso: string) {
		const dateLocale = locale === 'ka' ? 'ka-GE' : 'en-US';
		return new Intl.DateTimeFormat(dateLocale, { month: 'long', year: 'numeric' }).format(new Date(iso));
	}
</script>

<svelte:head>
	<title>{T.blog.title}</title>
</svelte:head>

<section class="border-b border-line">
	<div class="mx-auto max-w-content px-6 py-20 lg:px-10 lg:py-24">
		<p class="eyebrow">{T.blog.eyebrow}</p>
		<h1 class="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-ink lg:text-5xl">
			{T.blog.h1}
		</h1>
		<p class="mt-6 max-w-xl text-ink/60">
			{T.blog.subtitle}
		</p>
	</div>
</section>

<section class="mx-auto max-w-content px-6 py-20 lg:px-10">
	<div class="grid gap-6 sm:grid-cols-2">
		{#each blogPosts as post (post.title.en)}
			<article class="reticle group border border-line bg-paper p-8 transition-colors hover:border-gold">
				<div class="flex items-center justify-between text-xs">
					<span class="eyebrow">{post.tag[locale]}</span>
					<span class="text-ink/40">{formatDate(post.date)}</span>
				</div>
				<h2 class="mt-4 text-xl font-semibold leading-snug text-ink">{post.title[locale]}</h2>
				<p class="mt-3 text-sm leading-relaxed text-ink/55">{post.excerpt[locale]}</p>
				<span class="mt-6 inline-block text-sm font-semibold text-ink underline decoration-gold underline-offset-4">
					{T.blog.readArticle}
				</span>
			</article>
		{/each}
	</div>
</section>

<ContactCTA />
