<script lang="ts">
	let { variant = 'light' }: { variant?: 'light' | 'dark' } = $props();
</script>

<svg viewBox="0 0 560 560" class="h-full w-full" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Aesthetic device illustration">
	<defs>
		<radialGradient id="glow" cx="50%" cy="38%" r="60%">
			<stop offset="0%" stop-color="#C9A227" stop-opacity="0.35" />
			<stop offset="100%" stop-color="#C9A227" stop-opacity="0" />
		</radialGradient>
		<linearGradient id="body" x1="0%" y1="0%" x2="100%" y2="100%">
			<stop offset="0%" stop-color="#232323" />
			<stop offset="100%" stop-color="#111111" />
		</linearGradient>
	</defs>

	<circle cx="280" cy="230" r="230" fill="url(#glow)" />

	<!-- device body -->
	<rect x="140" y="120" width="280" height="340" rx="36" fill="url(#body)" />
	<rect x="140" y="120" width="280" height="340" rx="36" fill="none" stroke="#C9A227" stroke-width="1" opacity="0.5" />

	<!-- screen -->
	<rect x="172" y="156" width="216" height="130" rx="8" fill="#0B0B0B" stroke="#C9A227" stroke-width="1" opacity="0.8" />
	<line x1="190" y1="180" x2="330" y2="180" stroke="#C9A227" stroke-width="1.5" opacity="0.9" />
	<line x1="190" y1="200" x2="300" y2="200" stroke="#5A5A5A" stroke-width="1" />
	<line x1="190" y1="216" x2="280" y2="216" stroke="#5A5A5A" stroke-width="1" />
	<circle cx="200" cy="250" r="3" fill="#C9A227" />
	<line x1="212" y1="250" x2="360" y2="250" stroke="#3A3A3A" stroke-width="1" />

	<!-- gold accent ring / handpiece -->
	<circle cx="280" cy="360" r="46" fill="none" stroke="#C9A227" stroke-width="2" />
	<circle cx="280" cy="360" r="34" fill="none" stroke="#C9A227" stroke-width="1" opacity="0.5" />
	<circle cx="280" cy="360" r="6" fill="#C9A227" />

	<!-- calibration ticks -->
	{#each Array(12) as _, i}
		<line
			x1={280 + Math.cos((i * 30 * Math.PI) / 180) * 58}
			y1={360 + Math.sin((i * 30 * Math.PI) / 180) * 58}
			x2={280 + Math.cos((i * 30 * Math.PI) / 180) * 64}
			y2={360 + Math.sin((i * 30 * Math.PI) / 180) * 64}
			stroke="#C9A227"
			stroke-width="1"
			opacity="0.6"
		/>
	{/each}

	<!-- base -->
	<rect x="205" y="452" width="150" height="10" rx="3" fill="#1A1A1A" opacity="0.7" />
</svg>
