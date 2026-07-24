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

<section class="hero">
	<div class="hero__inner">
		<p class="eyebrow">{T.contact.eyebrow}</p>
		<h1 class="hero__title">
			{T.contact.h1}
		</h1>
		<p class="hero__subtitle">
			{T.contact.subtitle}
		</p>
	</div>
</section>

<section class="contact">
	<div class="contact__info">
		<p class="eyebrow">{T.contact.infoEyebrow}</p>
		<dl class="contact__list">
			<div>
				<dt class="contact__label">{T.contact.office}</dt>
				<dd class="contact__value">{T.contact.city}</dd>
			</div>
			<div>
				<dt class="contact__label">{T.contact.email}</dt>
				<dd class="contact__value"><a href="mailto:info@nyxoralasers.com">info@nyxoralasers.com</a></dd>
			</div>
			<div>
				<dt class="contact__label">{T.contact.phone}</dt>
				<dd class="contact__value"><a href="tel:+995592477474">+995 592 47 74 74</a></dd>
			</div>
			<div>
				<dt class="contact__label">{T.contact.hours}</dt>
				<dd class="contact__value">{T.contact.hoursValue}</dd>
			</div>
		</dl>

		<div class="contact__map">
			<iframe
				title="Nyxora Georgia location"
				class="contact__map-frame"
				loading="lazy"
				src="https://www.google.com/maps?q=Tbilisi,Georgia&output=embed"
			></iframe>
		</div>
	</div>

	<div class="contact__form-col">
		{#if submitted}
			<div class="contact__success">
				<p class="eyebrow">{T.contact.messageSent}</p>
				<h2 class="contact__success-title">{T.contact.thankYou}</h2>
				<p class="contact__success-body">{T.contact.thankYouBody}</p>
			</div>
		{:else}
			<form class="contact__form" onsubmit={handleSubmit}>
				<div class="contact__form-row">
					<label class="contact__field">
						<span class="contact__field-label">{T.contact.form.name}</span>
						<input required type="text" name="name" class="contact__input" />
					</label>
					<label class="contact__field">
						<span class="contact__field-label">{T.contact.form.company}</span>
						<input required type="text" name="company" class="contact__input" />
					</label>
				</div>
				<div class="contact__form-row">
					<label class="contact__field">
						<span class="contact__field-label">{T.contact.form.email}</span>
						<input required type="email" name="email" class="contact__input" />
					</label>
					<label class="contact__field">
						<span class="contact__field-label">{T.contact.form.phone}</span>
						<input type="tel" name="phone" class="contact__input" />
					</label>
				</div>
				<label class="contact__field">
					<span class="contact__field-label">{T.contact.form.message}</span>
					<textarea required name="message" rows="5" class="contact__input"></textarea>
				</label>

				<button type="submit" class="contact__submit">
					{T.contact.form.send}
				</button>
			</form>
		{/if}
	</div>
</section>

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

	.contact {
		@include container;
		padding-block: 5rem;

		@include lg {
			display: grid;
			grid-template-columns: 1fr 1.3fr;
			gap: 4rem;
		}
	}

	.contact__list {
		margin-top: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.contact__label {
		font-size: 0.75rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.02em;
		color: color-mix(in srgb, var(--color-ink) 40%, transparent);
	}

	.contact__value {
		margin-top: 0.375rem;
		color: var(--color-ink);

		a:hover {
			color: var(--color-gold);
		}
	}

	.contact__map {
		margin-top: 2.5rem;
		aspect-ratio: 4 / 3;
		width: 100%;
		border: 1px solid var(--color-line);
		background-color: var(--color-mist);
	}

	.contact__map-frame {
		height: 100%;
		width: 100%;
		filter: grayscale(1);
		border: none;
	}

	.contact__form-col {
		margin-top: 3.5rem;

		@include lg {
			margin-top: 0;
		}
	}

	.contact__success {
		border: 1px solid var(--color-gold);
		background-color: var(--color-mist);
		padding: 2.5rem;
		text-align: center;
	}

	.contact__success-title {
		margin-top: 0.75rem;
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--color-ink);
	}

	.contact__success-body {
		margin-top: 0.5rem;
		font-size: 0.875rem;
		color: color-mix(in srgb, var(--color-ink) 60%, transparent);
	}

	.contact__form {
		display: grid;
		gap: 1.25rem;
	}

	.contact__form-row {
		display: grid;
		gap: 1.25rem;

		@include sm {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.contact__field {
		display: block;
	}

	.contact__field-label {
		font-size: 0.75rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.02em;
		color: color-mix(in srgb, var(--color-ink) 50%, transparent);
	}

	.contact__input {
		margin-top: 0.5rem;
		width: 100%;
		border: 1px solid var(--color-line);
		background-color: var(--color-paper);
		padding: 0.75rem 1rem;
		font-size: 0.875rem;
		color: var(--color-ink);

		&:focus {
			border-color: var(--color-gold);
			outline: none;
		}
	}

	.contact__submit {
		margin-top: 0.5rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background-color: var(--color-obsidian);
		padding: 1rem 2rem;
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-paper);
		transition:
			background-color 150ms ease,
			color 150ms ease;

		&:hover {
			background-color: var(--color-gold);
			color: var(--color-obsidian);
		}
	}
</style>
