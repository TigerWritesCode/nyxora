import { browser } from '$app/environment';

export type Locale = 'en' | 'ka';

const STORAGE_KEY = 'nyxora-locale';

export const localeState = $state<{ current: Locale }>({ current: 'en' });

if (browser) {
	const stored = localStorage.getItem(STORAGE_KEY);
	if (stored === 'en' || stored === 'ka') {
		localeState.current = stored;
	}
	document.documentElement.lang = localeState.current;
}

export function setLocale(locale: Locale) {
	localeState.current = locale;
	if (browser) {
		localStorage.setItem(STORAGE_KEY, locale);
		document.documentElement.lang = locale;
	}
}
