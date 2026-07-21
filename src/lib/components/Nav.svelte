<script lang="ts">
	import { page } from '$app/state';
	import { localeState, setLocale } from '$lib/i18n/locale.svelte';
	import { ui } from '$lib/i18n/translations';

	const T = $derived(ui[localeState.current]);

	const links = $derived([
		{ href: '/about', label: T.nav.about },
		{ href: '/products', label: T.nav.products },
		{ href: '/partners', label: T.nav.partners },
		{ href: '/blog', label: T.nav.blog },
		{ href: '/faq', label: T.nav.faq }
	]);

	let open = $state(false);

	function isActive(href: string) {
		return href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href);
	}
</script>

<header class="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
	<div class="mx-auto flex max-w-content items-center justify-between px-6 py-4 lg:px-10">
		<a href="/" class="shrink-0 font-display text-lg font-extrabold tracking-tight text-ink">
			NIXORA <span class="text-gold">GEORGIA</span>
		</a>

		<nav class="hidden items-center justify-center gap-6 lg:flex lg:flex-1 xl:gap-8">
			{#each links as link (link.href)}
				<a
					href={link.href}
					class="relative whitespace-nowrap py-1 text-sm font-medium text-ink/80 transition-colors hover:text-ink"
					class:text-ink={isActive(link.href)}
				>
					{link.label}
					{#if isActive(link.href)}
						<span class="absolute -bottom-1 left-0 h-px w-full bg-gold"></span>
					{/if}
				</a>
			{/each}
		</nav>

		<div class="hidden shrink-0 items-center gap-4 lg:flex">
			<div class="flex items-center gap-1 border border-line text-xs font-semibold">
				<button
					class="px-2.5 py-1.5 transition-colors"
					class:bg-obsidian={localeState.current === 'en'}
					class:text-paper={localeState.current === 'en'}
					class:text-ink={localeState.current !== 'en'}
					onclick={() => setLocale('en')}
					aria-pressed={localeState.current === 'en'}
				>
					EN
				</button>
				<button
					class="px-2.5 py-1.5 transition-colors"
					class:bg-obsidian={localeState.current === 'ka'}
					class:text-paper={localeState.current === 'ka'}
					class:text-ink={localeState.current !== 'ka'}
					onclick={() => setLocale('ka')}
					aria-pressed={localeState.current === 'ka'}
				>
					ქარ
				</button>
			</div>

			<a
				href="/contact"
				class="inline-block rounded-none bg-obsidian px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-gold hover:text-obsidian"
			>
				{T.nav.contactSales}
			</a>
		</div>

		<button
			class="flex flex-col gap-1.5 lg:hidden"
			aria-label="Toggle menu"
			aria-expanded={open}
			onclick={() => (open = !open)}
		>
			<span class="block h-px w-6 bg-ink transition-transform" class:rotate-45={open} class:translate-y-2={open}
			></span>
			<span class="block h-px w-6 bg-ink transition-opacity" class:opacity-0={open}></span>
			<span
				class="block h-px w-6 bg-ink transition-transform"
				class:-rotate-45={open}
				class:-translate-y-2={open}
			></span>
		</button>
	</div>

	{#if open}
		<nav class="flex flex-col gap-1 border-t border-line px-6 py-4 lg:hidden">
			{#each links as link (link.href)}
				<a
					href={link.href}
					class="py-2.5 text-sm font-medium text-ink/80"
					onclick={() => (open = false)}
				>
					{link.label}
				</a>
			{/each}

			<div class="mt-2 flex items-center gap-1 border border-line text-xs font-semibold">
				<button
					class="flex-1 px-2.5 py-2 transition-colors"
					class:bg-obsidian={localeState.current === 'en'}
					class:text-paper={localeState.current === 'en'}
					class:text-ink={localeState.current !== 'en'}
					onclick={() => setLocale('en')}
					aria-pressed={localeState.current === 'en'}
				>
					EN
				</button>
				<button
					class="flex-1 px-2.5 py-2 transition-colors"
					class:bg-obsidian={localeState.current === 'ka'}
					class:text-paper={localeState.current === 'ka'}
					class:text-ink={localeState.current !== 'ka'}
					onclick={() => setLocale('ka')}
					aria-pressed={localeState.current === 'ka'}
				>
					ქართული
				</button>
			</div>

			<a
				href="/contact"
				class="mt-3 bg-obsidian px-5 py-3 text-center text-sm font-medium text-paper"
				onclick={() => (open = false)}
			>
				{T.nav.contactSales}
			</a>
		</nav>
	{/if}
</header>
