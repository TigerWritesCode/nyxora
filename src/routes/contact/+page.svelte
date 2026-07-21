<script lang="ts">
	import { localeState } from '$lib/i18n/locale.svelte';
	import { ui } from '$lib/i18n/translations';

	const T = $derived(ui[localeState.current]);

	let submitted = $state(false);

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		submitted = true;
	}
</script>

<svelte:head>
	<title>{T.contact.title}</title>
</svelte:head>

<section class="border-b border-line">
	<div class="mx-auto max-w-content px-6 py-20 lg:px-10 lg:py-24">
		<p class="eyebrow">{T.contact.eyebrow}</p>
		<h1 class="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-ink lg:text-5xl">
			{T.contact.h1}
		</h1>
		<p class="mt-6 max-w-xl text-ink/60">
			{T.contact.subtitle}
		</p>
	</div>
</section>

<section class="mx-auto max-w-content px-6 py-20 lg:grid lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:px-10">
	<div>
		<p class="eyebrow">{T.contact.infoEyebrow}</p>
		<dl class="mt-6 space-y-6">
			<div>
				<dt class="text-xs font-medium uppercase tracking-wide text-ink/40">{T.contact.office}</dt>
				<dd class="mt-1.5 text-ink">{T.contact.city}</dd>
			</div>
			<div>
				<dt class="text-xs font-medium uppercase tracking-wide text-ink/40">{T.contact.email}</dt>
				<dd class="mt-1.5"><a href="mailto:sales@nixora.ge" class="text-ink hover:text-gold">sales@nixora.ge</a></dd>
			</div>
			<div>
				<dt class="text-xs font-medium uppercase tracking-wide text-ink/40">{T.contact.phone}</dt>
				<dd class="mt-1.5"><a href="tel:+995000000000" class="text-ink hover:text-gold">+995 00 000 000</a></dd>
			</div>
			<div>
				<dt class="text-xs font-medium uppercase tracking-wide text-ink/40">{T.contact.hours}</dt>
				<dd class="mt-1.5 text-ink">{T.contact.hoursValue}</dd>
			</div>
		</dl>

		<div class="mt-10 aspect-[4/3] w-full border border-line bg-mist">
			<iframe
				title="Nixora Georgia location"
				class="h-full w-full grayscale"
				loading="lazy"
				src="https://www.google.com/maps?q=Tbilisi,Georgia&output=embed"
			></iframe>
		</div>
	</div>

	<div class="mt-14 lg:mt-0">
		{#if submitted}
			<div class="border border-gold bg-mist p-10 text-center">
				<p class="eyebrow">{T.contact.messageSent}</p>
				<h2 class="mt-3 text-xl font-semibold text-ink">{T.contact.thankYou}</h2>
				<p class="mt-2 text-sm text-ink/60">{T.contact.thankYouBody}</p>
			</div>
		{:else}
			<form class="grid gap-5" onsubmit={handleSubmit}>
				<div class="grid gap-5 sm:grid-cols-2">
					<label class="block">
						<span class="text-xs font-medium uppercase tracking-wide text-ink/50">{T.contact.form.name}</span>
						<input required type="text" name="name" class="mt-2 w-full border border-line bg-paper px-4 py-3 text-sm text-ink focus:border-gold" />
					</label>
					<label class="block">
						<span class="text-xs font-medium uppercase tracking-wide text-ink/50">{T.contact.form.company}</span>
						<input required type="text" name="company" class="mt-2 w-full border border-line bg-paper px-4 py-3 text-sm text-ink focus:border-gold" />
					</label>
				</div>
				<div class="grid gap-5 sm:grid-cols-2">
					<label class="block">
						<span class="text-xs font-medium uppercase tracking-wide text-ink/50">{T.contact.form.email}</span>
						<input required type="email" name="email" class="mt-2 w-full border border-line bg-paper px-4 py-3 text-sm text-ink focus:border-gold" />
					</label>
					<label class="block">
						<span class="text-xs font-medium uppercase tracking-wide text-ink/50">{T.contact.form.phone}</span>
						<input type="tel" name="phone" class="mt-2 w-full border border-line bg-paper px-4 py-3 text-sm text-ink focus:border-gold" />
					</label>
				</div>
				<label class="block">
					<span class="text-xs font-medium uppercase tracking-wide text-ink/50">{T.contact.form.message}</span>
					<textarea required name="message" rows="5" class="mt-2 w-full border border-line bg-paper px-4 py-3 text-sm text-ink focus:border-gold"></textarea>
				</label>

				<button type="submit" class="mt-2 inline-flex items-center justify-center bg-obsidian px-8 py-4 text-sm font-semibold text-paper transition-colors hover:bg-gold hover:text-obsidian">
					{T.contact.form.send}
				</button>
			</form>
		{/if}
	</div>
</section>
