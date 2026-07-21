<script lang="ts">
	import { localeState } from '$lib/i18n/locale.svelte';
	import { ui } from '$lib/i18n/translations';

	const T = $derived(ui[localeState.current]);
	const year = new Date().getFullYear();
</script>

<footer class="border-t border-line bg-mist">
	<div class="mx-auto max-w-content px-6 py-16 lg:px-10">
		<div class="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
			<div>
				<p class="font-display text-lg font-extrabold tracking-tight text-ink">
					NIXORA <span class="text-gold">GEORGIA</span>
				</p>
				<p class="mt-4 max-w-xs text-sm leading-relaxed text-ink/60">
					{T.footer.tagline}
				</p>
			</div>

			<div>
				<p class="eyebrow">{T.footer.company}</p>
				<ul class="mt-4 space-y-2.5 text-sm text-ink/70">
					<li><a href="/about" class="hover:text-gold">{T.nav.about}</a></li>
					<li><a href="/partners" class="hover:text-gold">{T.nav.partners}</a></li>
					<li><a href="/blog" class="hover:text-gold">{T.nav.blog}</a></li>
				</ul>
			</div>

			<div>
				<p class="eyebrow">{T.footer.catalog}</p>
				<ul class="mt-4 space-y-2.5 text-sm text-ink/70">
					<li><a href="/products" class="hover:text-gold">{T.nav.products}</a></li>
					<li><a href="/faq" class="hover:text-gold">{T.nav.faq}</a></li>
					<li><a href="/contact" class="hover:text-gold">{T.footer.requestInformation}</a></li>
				</ul>
			</div>

			<div>
				<p class="eyebrow">{T.footer.contact}</p>
				<ul class="mt-4 space-y-2.5 text-sm text-ink/70">
					<li>{T.footer.city}</li>
					<li><a href="mailto:sales@nixora.ge" class="hover:text-gold">sales@nixora.ge</a></li>
					<li><a href="tel:+995000000000" class="hover:text-gold">+995 00 000 000</a></li>
				</ul>
			</div>
		</div>

		<div
			class="mt-16 flex flex-col gap-4 border-t border-line pt-6 text-xs text-ink/50 sm:flex-row sm:items-center sm:justify-between"
		>
			<p>© {year} NIXORA GEORGIA. {T.footer.rights}</p>
			<p>{T.footer.distributorLine}</p>
		</div>
	</div>
</footer>
