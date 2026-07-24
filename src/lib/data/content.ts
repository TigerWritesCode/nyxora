export type LocalizedString = { en: string; ka: string };

export type Product = {
	slug: string;
	name: string;
	tagline: LocalizedString;
	description: LocalizedString;
	highlights: { en: string[]; ka: string[] };
	featured?: boolean;
	image?: string;
};

type ProductFile = {
	slug: string;
	name: string;
	tagline_en: string;
	tagline_ka: string;
	featured?: boolean;
	image?: string;
	description_en: string;
	description_ka: string;
	highlights_en: string[];
	highlights_ka: string[];
};

const productFiles = import.meta.glob<ProductFile>('./../content/products/*.json', {
	eager: true,
	import: 'default'
});

export const products: Product[] = Object.values(productFiles)
	.map((p) => ({
		slug: p.slug,
		name: p.name,
		tagline: { en: p.tagline_en, ka: p.tagline_ka },
		featured: p.featured,
		image: p.image,
		description: { en: p.description_en, ka: p.description_ka },
		highlights: { en: p.highlights_en, ka: p.highlights_ka }
	}))
	.sort((a, b) => a.name.localeCompare(b.name));

export const industries: { name: LocalizedString; description: LocalizedString }[] = [
	{
		name: { en: 'Beauty Clinics', ka: 'სილამაზის კლინიკები' },
		description: {
			en: 'Full-suite laser hair removal rooms for treatment menus of any scale.',
			ka: 'ლაზერული ეპილაციის სრული აღჭურვილობა ნებისმიერი ზომის საპროცედურო ოთახებისთვის.'
		}
	},
	{
		name: { en: 'Dermatology Clinics', ka: 'დერმატოლოგიური კლინიკები' },
		description: {
			en: 'Clinical-grade platforms for dermatology practices adding hair removal services.',
			ka: 'კლინიკური დონის პლატფორმები დერმატოლოგიური პრაქტიკებისთვის, რომლებიც ეპილაციის სერვისს მატებენ.'
		}
	},
	{
		name: { en: 'Laser Centers', ka: 'ლაზერული ცენტრები' },
		description: {
			en: 'High-throughput platforms built for dedicated laser studios.',
			ka: 'მაღალი წარმადობის პლატფორმები სპეციალიზებული ლაზერული სტუდიებისთვის.'
		}
	},
	{
		name: { en: 'Spa Clinics', ka: 'სპა კლინიკები' },
		description: {
			en: 'Quiet, low-maintenance platforms suited to premium wellness environments.',
			ka: 'ჩუმი, დაბალმოვლადი პლატფორმები, მორგებული პრემიუმ საველნეს გარემოსთვის.'
		}
	}
];

export type Partner = {
	name: string;
	type: LocalizedString;
};

type PartnerFile = {
	name: string;
	type_en: string;
	type_ka: string;
};

const partnerFiles = import.meta.glob<PartnerFile>('./../content/partners/*.json', {
	eager: true,
	import: 'default'
});

export const partners: Partner[] = Object.values(partnerFiles)
	.map((p) => ({ name: p.name, type: { en: p.type_en, ka: p.type_ka } }))
	.sort((a, b) => a.name.localeCompare(b.name));

export type BlogPost = {
	title: LocalizedString;
	excerpt: LocalizedString;
	tag: LocalizedString;
	date: string;
};

type BlogFile = {
	title_en: string;
	title_ka: string;
	excerpt_en: string;
	excerpt_ka: string;
	tag_en: string;
	tag_ka: string;
	date: string;
};

const blogFiles = import.meta.glob<BlogFile>('./../content/blog/*.json', {
	eager: true,
	import: 'default'
});

export const blogPosts: BlogPost[] = Object.values(blogFiles)
	.map((b) => ({
		title: { en: b.title_en, ka: b.title_ka },
		excerpt: { en: b.excerpt_en, ka: b.excerpt_ka },
		tag: { en: b.tag_en, ka: b.tag_ka },
		date: b.date
	}))
	.sort((a, b) => b.date.localeCompare(a.date));
