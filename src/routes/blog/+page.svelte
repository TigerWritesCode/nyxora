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

<section class="hero">
	<div class="hero__inner">
		<p class="eyebrow">{T.blog.eyebrow}</p>
		<h1 class="hero__title">
			{T.blog.h1}
		</h1>
		<p class="hero__subtitle">
			{T.blog.subtitle}
		</p>
	</div>
</section>

<section class="blog">
	<div class="blog__list">
		{#each blogPosts as post (post.title.en)}
			<article class="reticle blog__card">
				<div class="blog__meta">
					<span class="eyebrow">{post.tag[locale]}</span>
					<span class="blog__date">{formatDate(post.date)}</span>
				</div>
				<h2 class="blog__title">{post.title[locale]}</h2>
				<p class="blog__excerpt">{post.excerpt[locale]}</p>
				<span class="blog__read">
					{T.blog.readArticle}
				</span>
			</article>
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

	.hero__subtitle {
		margin-top: 1.5rem;
		max-width: 36rem;
		color: color-mix(in srgb, var(--color-ink) 60%, transparent);
	}

	.blog {
		@include container;
		padding-block: 5rem;
	}

	.blog__list {
		display: grid;
		gap: 1.5rem;

		@include sm {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.blog__card {
		border: 1px solid var(--color-line);
		background-color: var(--color-paper);
		padding: 2rem;
		transition: border-color 150ms ease;

		&:hover {
			border-color: var(--color-gold);
		}
	}

	.blog__meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 0.75rem;
	}

	.blog__date {
		color: color-mix(in srgb, var(--color-ink) 40%, transparent);
	}

	.blog__title {
		margin-top: 1rem;
		font-size: 1.25rem;
		font-weight: 600;
		line-height: 1.3;
		color: var(--color-ink);
	}

	.blog__excerpt {
		margin-top: 0.75rem;
		font-size: 0.875rem;
		line-height: 1.6;
		color: color-mix(in srgb, var(--color-ink) 55%, transparent);
	}

	.blog__read {
		margin-top: 1.5rem;
		display: inline-block;
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-ink);
		text-decoration: underline;
		text-decoration-color: var(--color-gold);
		text-underline-offset: 4px;
	}
</style>
