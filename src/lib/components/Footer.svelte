<script lang="ts">
	import { localeState } from '$lib/i18n/locale.svelte';
	import { ui } from '$lib/i18n/translations';

	const T = $derived(ui[localeState.current]);
	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="footer__inner">
		<div class="footer__grid">
			<div>
				<p class="footer__brand-name">
					NYXORA <span class="footer__brand-accent">GEORGIA</span>
				</p>
				<p class="footer__tagline">
					{T.footer.tagline}
				</p>
			</div>

			<div>
				<p class="eyebrow">{T.footer.company}</p>
				<ul class="footer__list">
					<li><a href="/about">{T.nav.about}</a></li>
					<li><a href="/partners">{T.nav.partners}</a></li>
					<li><a href="/blog">{T.nav.blog}</a></li>
				</ul>
			</div>

			<div>
				<p class="eyebrow">{T.footer.catalog}</p>
				<ul class="footer__list">
					<li><a href="/products">{T.nav.products}</a></li>
					<li><a href="/faq">{T.nav.faq}</a></li>
					<li><a href="/contact">{T.footer.requestInformation}</a></li>
				</ul>
			</div>

			<div>
				<p class="eyebrow">{T.footer.contact}</p>
				<ul class="footer__list">
					<li>{T.footer.city}</li>
					<li><a href="mailto:info@nyxoralasers.com">info@nyxoralasers.com</a></li>
					<li><a href="tel:+995592477474">+995 592 47 74 74</a></li>
				</ul>
			</div>
		</div>

		<div class="footer__bottom">
			<p>© {year} NYXORA GEORGIA. {T.footer.rights}</p>
			<a href="https://leadsoft.ge" target="_blank" rel="noopener noreferrer" class="footer__credit">
				Made by Leadsoft
			</a>
		</div>
	</div>
</footer>

<style lang="scss">
	@use '$lib/styles/breakpoints' as *;

	.footer {
		border-top: 1px solid var(--color-line);
		background-color: var(--color-mist);
	}

	.footer__inner {
		@include container;
		padding-block: 4rem;
	}

	.footer__grid {
		display: grid;
		gap: 3rem;

		@include lg {
			grid-template-columns: 1.4fr 1fr 1fr 1fr;
		}
	}

	.footer__brand-name {
		font-family: var(--font-display);
		font-size: 1.125rem;
		font-weight: 800;
		letter-spacing: -0.02em;
		color: var(--color-ink);
	}

	.footer__brand-accent {
		color: var(--color-gold);
	}

	.footer__tagline {
		margin-top: 1rem;
		max-width: 20rem;
		font-size: 0.875rem;
		line-height: 1.6;
		color: color-mix(in srgb, var(--color-ink) 60%, transparent);
	}

	.footer__list {
		display: flex;
		flex-direction: column;
		gap: 0.625rem;
		margin-top: 1rem;
		font-size: 0.875rem;
		color: color-mix(in srgb, var(--color-ink) 70%, transparent);

		a:hover {
			color: var(--color-gold);
		}
	}

	.footer__bottom {
		margin-top: 4rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		border-top: 1px solid var(--color-line);
		padding-top: 1.5rem;
		font-size: 0.75rem;
		color: color-mix(in srgb, var(--color-ink) 50%, transparent);

		@include sm {
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}
	}

	.footer__credit:hover {
		color: var(--color-gold);
	}
</style>
