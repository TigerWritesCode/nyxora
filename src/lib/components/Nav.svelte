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

<header class="nav">
	<div class="nav__bar">
		<div class="nav__bar-inner">
			<a href="mailto:info@nyxoralasers.com" class="nav__email"> info@nyxoralasers.com </a>

			<div class="nav__shipping">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					class="nav__shipping-icon"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3 16.5V6.75A1.75 1.75 0 0 1 4.75 5h8.5A1.75 1.75 0 0 1 15 6.75v9.75M3 16.5h12M3 16.5a1.5 1.5 0 1 0 3 0m9-3h3.379a1 1 0 0 1 .78.375l2.121 2.652a1 1 0 0 1 .22.625V16.5m-6.5 0a1.5 1.5 0 1 0 3 0m-3 0h3m0 0a1.5 1.5 0 1 0 3 0"
					/>
				</svg>
				<span class="nav__shipping-text">{T.nav.shipping}</span>
			</div>

			<div class="nav__lang">
				<button
					class="nav__lang-btn"
					class:is-active={localeState.current === 'en'}
					onclick={() => setLocale('en')}
					aria-pressed={localeState.current === 'en'}
				>
					EN
				</button>
				<button
					class="nav__lang-btn"
					class:is-active={localeState.current === 'ka'}
					onclick={() => setLocale('ka')}
					aria-pressed={localeState.current === 'ka'}
				>
					ქარ
				</button>
			</div>
		</div>
	</div>

	<div class="nav__row">
		<a href="/" class="nav__logo"> NYXORA <span class="nav__logo-accent">GEORGIA</span> </a>

		<nav class="nav__links">
			{#each links as link (link.href)}
				<a href={link.href} class="nav__link" class:nav__link--active={isActive(link.href)}>
					{link.label}
					{#if isActive(link.href)}
						<span class="nav__link-underline"></span>
					{/if}
				</a>
			{/each}
		</nav>

		<div class="nav__contact-wrap">
			<a href="/contact" class="nav__contact-btn">
				{T.nav.contactSales}
			</a>
		</div>

		<button class="nav__toggle" aria-label="Toggle menu" aria-expanded={open} onclick={() => (open = !open)}>
			{#if open}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					class="nav__toggle-icon"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					class="nav__toggle-icon"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
				</svg>
			{/if}
		</button>
	</div>

	{#if open}
		<nav class="nav__mobile">
			{#each links as link (link.href)}
				<a href={link.href} class="nav__mobile-link" onclick={() => (open = false)}>
					{link.label}
				</a>
			{/each}

			<div class="nav__mobile-lang">
				<button
					class="nav__mobile-lang-btn"
					class:is-active={localeState.current === 'en'}
					onclick={() => setLocale('en')}
					aria-pressed={localeState.current === 'en'}
				>
					EN
				</button>
				<button
					class="nav__mobile-lang-btn"
					class:is-active={localeState.current === 'ka'}
					onclick={() => setLocale('ka')}
					aria-pressed={localeState.current === 'ka'}
				>
					ქართული
				</button>
			</div>

			<a href="/contact" class="nav__mobile-contact" onclick={() => (open = false)}>
				{T.nav.contactSales}
			</a>
		</nav>
	{/if}
</header>

<style lang="scss">
	@use '$lib/styles/breakpoints' as *;

	.nav {
		position: sticky;
		top: 0;
		z-index: 50;
		border-bottom: 1px solid var(--color-line);
		background-color: color-mix(in srgb, var(--color-paper) 90%, transparent);
		backdrop-filter: blur(8px);
	}

	.nav__bar {
		background-color: var(--color-gold);
	}

	.nav__bar-inner {
		margin-inline: auto;
		max-width: var(--container-content);
		display: grid;
		grid-template-columns: 1fr;
		align-items: center;
		padding: 0.5rem 1.5rem;
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--color-obsidian);

		@include lg {
			grid-template-columns: repeat(3, 1fr);
			padding-inline: 2.5rem;
		}
	}

	.nav__email {
		display: none;
		justify-self: start;

		&:hover {
			opacity: 0.7;
		}

		@include lg {
			display: block;
		}
	}

	.nav__shipping {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;

		@include lg {
			justify-self: center;
		}
	}

	.nav__shipping-icon {
		height: 1rem;
		width: 1rem;
	}

	.nav__shipping-text {
		text-transform: uppercase;
	}

	.nav__lang {
		display: none;
		align-items: center;
		justify-self: end;
		gap: 0.25rem;
		border: 1px solid color-mix(in srgb, var(--color-obsidian) 30%, transparent);

		@include lg {
			display: flex;
		}
	}

	.nav__lang-btn {
		padding: 0.25rem 0.625rem;
		transition: background-color 150ms ease, color 150ms ease;

		&.is-active {
			background-color: var(--color-obsidian);
			color: var(--color-paper);
		}
	}

	.nav__row {
		margin-inline: auto;
		max-width: var(--container-content);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 1.5rem;

		@include lg {
			padding-inline: 2.5rem;
		}
	}

	.nav__logo {
		flex-shrink: 0;
		font-family: var(--font-display);
		font-size: 1.125rem;
		font-weight: 800;
		letter-spacing: -0.02em;
		color: var(--color-ink);
	}

	.nav__logo-accent {
		color: var(--color-gold);
	}

	.nav__links {
		display: none;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;

		@include lg {
			display: flex;
			flex: 1;
		}

		@include xl {
			gap: 2rem;
		}
	}

	.nav__link {
		position: relative;
		white-space: nowrap;
		padding-block: 0.25rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: color-mix(in srgb, var(--color-ink) 80%, transparent);
		transition: color 150ms ease;

		&:hover {
			color: var(--color-ink);
		}

		&--active {
			color: var(--color-ink);
		}
	}

	.nav__link-underline {
		position: absolute;
		bottom: -0.25rem;
		left: 0;
		height: 1px;
		width: 100%;
		background-color: var(--color-gold);
	}

	.nav__contact-wrap {
		display: none;
		flex-shrink: 0;
		align-items: center;

		@include lg {
			display: flex;
		}
	}

	.nav__contact-btn {
		display: inline-block;
		background-color: var(--color-obsidian);
		padding: 0.625rem 1.25rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-paper);
		transition: background-color 150ms ease, color 150ms ease;

		&:hover {
			background-color: var(--color-gold);
			color: var(--color-obsidian);
		}
	}

	.nav__toggle {
		display: flex;
		align-items: center;
		justify-content: center;

		@include lg {
			display: none;
		}
	}

	.nav__toggle-icon {
		height: 1.5rem;
		width: 1.5rem;
		color: var(--color-ink);
	}

	.nav__mobile {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		border-top: 1px solid var(--color-line);
		padding: 1rem 1.5rem;

		@include lg {
			display: none;
		}
	}

	.nav__mobile-link {
		padding-block: 0.625rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: color-mix(in srgb, var(--color-ink) 80%, transparent);
	}

	.nav__mobile-lang {
		margin-top: 0.5rem;
		display: flex;
		align-items: center;
		gap: 0.25rem;
		border: 1px solid var(--color-line);
		font-size: 0.75rem;
		font-weight: 600;
	}

	.nav__mobile-lang-btn {
		flex: 1;
		padding: 0.5rem 0.625rem;
		color: var(--color-ink);
		transition: background-color 150ms ease, color 150ms ease;

		&.is-active {
			background-color: var(--color-obsidian);
			color: var(--color-paper);
		}
	}

	.nav__mobile-contact {
		margin-top: 0.75rem;
		background-color: var(--color-obsidian);
		padding: 0.75rem 1.25rem;
		text-align: center;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-paper);
	}
</style>
