export type LocalizedString = { en: string; ka: string };

export type Category = {
	slug: string;
	name: LocalizedString;
	description: LocalizedString;
};

export const categories: Category[] = [
	{
		slug: 'laser-hair-removal',
		name: { en: 'Laser Hair Removal', ka: 'ლაზერული თმის მოცილება' },
		description: {
			en: 'High-power diode and multi-wavelength platforms for professional practices.',
			ka: 'მაღალი სიმძლავრის დიოდური და მრავალტალღოვანი პლატფორმები პროფესიონალური პრაქტიკისთვის.'
		}
	},
	{
		slug: 'skin-rejuvenation',
		name: { en: 'Skin Rejuvenation', ka: 'კანის განახლება' },
		description: {
			en: 'RF, HIFU and light-based systems for resurfacing and tightening protocols.',
			ka: 'RF, HIFU და სინათლეზე დაფუძნებული სისტემები კანის განახლებისა და გამკვრივების პროცედურებისთვის.'
		}
	},
	{
		slug: 'body-contouring',
		name: { en: 'Body Contouring', ka: 'სხეულის კონტურირება' },
		description: {
			en: 'Non-invasive fat reduction and muscle stimulation equipment.',
			ka: 'არაინვაზიური ცხიმის შემცირებისა და კუნთების სტიმულაციის აღჭურვილობა.'
		}
	},
	{
		slug: 'dental-equipment',
		name: { en: 'Dental Equipment', ka: 'სტომატოლოგიური აღჭურვილობა' },
		description: {
			en: 'Precision instruments and imaging systems for dental clinics.',
			ka: 'ზუსტი ხელსაწყოები და ვიზუალიზაციის სისტემები სტომატოლოგიური კლინიკებისთვის.'
		}
	},
	{
		slug: 'medical-devices',
		name: { en: 'Medical Devices', ka: 'სამედიცინო აპარატურა' },
		description: {
			en: 'Diagnostic and treatment devices for dermatology and general practice.',
			ka: 'დიაგნოსტიკური და სამკურნალო აპარატები დერმატოლოგიისა და ზოგადი პრაქტიკისთვის.'
		}
	},
	{
		slug: 'accessories',
		name: { en: 'Accessories', ka: 'აქსესუარები' },
		description: {
			en: 'Consumables, applicators and maintenance parts for existing installations.',
			ka: 'სახარჯი მასალები, აპლიკატორები და სამოვლო ნაწილები არსებული აღჭურვილობისთვის.'
		}
	}
];

export type Product = {
	slug: string;
	name: string;
	categorySlug: string;
	brand: string;
	description: LocalizedString;
	highlights: { en: string[]; ka: string[] };
	featured?: boolean;
};

type ProductFile = {
	slug: string;
	name: string;
	categorySlug: string;
	brand: string;
	featured?: boolean;
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
		categorySlug: p.categorySlug,
		brand: p.brand,
		featured: p.featured,
		description: { en: p.description_en, ka: p.description_ka },
		highlights: { en: p.highlights_en, ka: p.highlights_ka }
	}))
	.sort((a, b) => a.name.localeCompare(b.name));

export const industries: { name: LocalizedString; description: LocalizedString }[] = [
	{
		name: { en: 'Beauty Clinics', ka: 'სილამაზის კლინიკები' },
		description: {
			en: 'Full-suite aesthetic equipment for treatment rooms of any scale.',
			ka: 'სრული ესთეტიკური აღჭურვილობა ნებისმიერი ზომის საპროცედურო ოთახებისთვის.'
		}
	},
	{
		name: { en: 'Dental Clinics', ka: 'სტომატოლოგიური კლინიკები' },
		description: {
			en: 'Imaging and precision instruments for modern dental practices.',
			ka: 'ვიზუალიზაციისა და სიზუსტის ხელსაწყოები თანამედროვე სტომატოლოგიური პრაქტიკისთვის.'
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
		name: { en: 'Medical Centers', ka: 'სამედიცინო ცენტრები' },
		description: {
			en: 'Diagnostic and treatment devices for general and specialist care.',
			ka: 'დიაგნოსტიკური და სამკურნალო აპარატები ზოგადი და სპეციალიზებული მოვლისთვის.'
		}
	},
	{
		name: { en: 'Spa Clinics', ka: 'სპა კლინიკები' },
		description: {
			en: 'Non-invasive systems suited to premium wellness environments.',
			ka: 'არაინვაზიური სისტემები, მორგებული პრემიუმ საველნეს გარემოსთვის.'
		}
	}
];

export const brands: { name: string; description: LocalizedString }[] = [
	{
		name: 'Nixora Select',
		description: {
			en: 'Our house line of aesthetic platforms, engineered for consistency across multi-site clinics.',
			ka: 'ჩვენი საკუთარი ესთეტიკური პლატფორმების ხაზი, შექმნილი მრავალფილიალიან კლინიკებში თანმიმდევრულობისთვის.'
		}
	},
	{
		name: 'Aventis Medical',
		description: {
			en: 'European-engineered body contouring and skin tightening systems.',
			ka: 'ევროპული წარმოების სხეულის კონტურირებისა და კანის გამკვრივების სისტემები.'
		}
	},
	{
		name: 'Praxis Dental',
		description: {
			en: 'Diagnostic imaging and precision instrumentation for dental practices.',
			ka: 'დიაგნოსტიკური ვიზუალიზაცია და ზუსტი ინსტრუმენტები სტომატოლოგიური პრაქტიკისთვის.'
		}
	},
	{
		name: 'Corelux Systems',
		description: {
			en: 'Light-based and laser platforms for advanced skin treatment protocols.',
			ka: 'სინათლეზე დაფუძნებული და ლაზერული პლატფორმები კანის მოვლის მოწინავე პროცედურებისთვის.'
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
