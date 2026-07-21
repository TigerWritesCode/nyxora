# NIXORA GEORGIA — Website

A B2B corporate website for a Georgian distributor of professional aesthetic and medical equipment. Built with SvelteKit 5 (runes mode) and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Structure

- `src/routes/` — Home, About, Products (+ dynamic product pages), Brands, Partners, Blog, Contact, FAQ
- `src/lib/components/` — Nav, Footer, ContactCTA, DeviceArt (abstract device illustration)
- `src/lib/data/content.ts` — catalog, categories, industries, brands, FAQ content (swap in real data here)
- `src/app.css` — design tokens (colors, type) and the two signature motifs: `.sightline` (self-drawing gold hairline) and `.reticle` (corner-bracket hover frame)

## Before going live

- Replace `DeviceArt.svelte` placeholders with real product photography
- Replace placeholder partner/blog copy with real content
- Wire the contact form in `src/routes/contact/+page.svelte` to a real backend or form service
- Set a deployment adapter in `vite.config.ts` (currently `adapter-auto`) once you pick a host
