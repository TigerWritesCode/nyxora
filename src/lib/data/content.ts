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

export const products: Product[] = [
	{
		slug: 'quadra-diode-4w',
		name: 'Quadra Diode 4W',
		categorySlug: 'laser-hair-removal',
		brand: 'Nixora Select',
		description: {
			en: 'A four-wavelength diode platform built for high-volume clinics, combining depth and precision in a single handpiece.',
			ka: 'ოთხტალღოვანი დიოდური პლატფორმა, შექმნილი მაღალი დატვირთვის კლინიკებისთვის, რომელიც აერთიანებს სიღრმესა და სიზუსტეს ერთ ხელსაწყოში.'
		},
		highlights: {
			en: [
				'1200W high-power diode laser',
				'Four wavelengths — 755 / 808 / 940 / 1064 nm',
				'Sapphire contact cooling',
				'10.4" medical-grade touchscreen'
			],
			ka: [
				'1200 W მაღალი სიმძლავრის დიოდური ლაზერი',
				'ოთხი ტალღის სიგრძე — 755 / 808 / 940 / 1064 ნმ',
				'საფირონის კონტაქტური გაგრილება',
				'10.4 დიუმიანი სამედიცინო კლასის სენსორული ეკრანი'
			]
		},
		featured: true
	},
	{
		slug: 'lumera-rf-tighten',
		name: 'Lumera RF',
		categorySlug: 'skin-rejuvenation',
		brand: 'Nixora Select',
		description: {
			en: 'Fractional RF platform for resurfacing, tightening and fine-line protocols.',
			ka: 'ფრაქციული RF პლატფორმა კანის განახლების, გამკვრივებისა და წვრილი ნაოჭების პროცედურებისთვის.'
		},
		highlights: {
			en: ['Bipolar RF matrix tip', 'Adjustable depth control', 'Integrated cooling', 'Protocol presets'],
			ka: [
				'ბიპოლარული RF მატრიცული ნაკერი',
				'სიღრმის რეგულირებადი კონტროლი',
				'ინტეგრირებული გაგრილება',
				'პროცედურის წინასწარ დაყენებული პარამეტრები'
			]
		}
	},
	{
		slug: 'contura-hifu',
		name: 'Contura HIFU',
		categorySlug: 'skin-rejuvenation',
		brand: 'Aventis Medical',
		description: {
			en: 'Focused ultrasound system for non-surgical lifting and contouring.',
			ka: 'ფოკუსირებული ულტრაბგერითი სისტემა არაქირურგიული აწევისა და კონტურირებისთვის.'
		},
		highlights: {
			en: ['4 cartridge depths', 'Real-time visualization', 'Quiet-drive transducer'],
			ka: ['4 კარტრიჯის სიღრმე', 'რეალურ დროში ვიზუალიზაცია', 'დაბალხმაურიანი გადამწოდი']
		}
	},
	{
		slug: 'sculpta-ems',
		name: 'Sculpta EMS',
		categorySlug: 'body-contouring',
		brand: 'Aventis Medical',
		description: {
			en: 'Electromagnetic muscle stimulation for body sculpting sessions.',
			ka: 'ელექტრომაგნიტური კუნთების სტიმულაცია სხეულის მოდელირების სეანსებისთვის.'
		},
		highlights: {
			en: ['Dual-applicator sessions', '7 intensity tiers', 'Ergonomic applicator arms'],
			ka: ['ორმაგი აპლიკატორის სეანსები', 'ინტენსივობის 7 დონე', 'ერგონომიული აპლიკატორის მკლავები']
		}
	},
	{
		slug: 'orbis-imaging',
		name: 'Orbis Imaging Unit',
		categorySlug: 'dental-equipment',
		brand: 'Praxis Dental',
		description: {
			en: 'Compact digital imaging system for diagnostic-grade dental workflows.',
			ka: 'კომპაქტური ციფრული ვიზუალიზაციის სისტემა დიაგნოსტიკური დონის სტომატოლოგიური სამუშაო პროცესებისთვის.'
		},
		highlights: {
			en: ['Low-dose sensor array', 'Chairside display', 'Cloud-ready export'],
			ka: ['დაბალდოზიანი სენსორული მასივი', 'სავარძელთან განთავსებული ეკრანი', 'ღრუბლოვან სერვისებთან თავსებადი ექსპორტი']
		}
	},
	{
		slug: 'vantis-derma',
		name: 'Vantis Derma Scanner',
		categorySlug: 'medical-devices',
		brand: 'Nixora Select',
		description: {
			en: 'Dermatological diagnostic scanner for clinical documentation and tracking.',
			ka: 'დერმატოლოგიური დიაგნოსტიკური სკანერი კლინიკური დოკუმენტაციისა და მონიტორინგისთვის.'
		},
		highlights: {
			en: ['Polarized + UV imaging modes', 'Patient history tracking', 'Clinic-network sync'],
			ka: ['პოლარიზებული და UV ვიზუალიზაციის რეჟიმები', 'პაციენტის ისტორიის მონიტორინგი', 'კლინიკების ქსელთან სინქრონიზაცია']
		}
	}
];

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
