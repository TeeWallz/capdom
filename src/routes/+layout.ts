import { browser } from '$app/environment'
import '$lib/i18n' // Import to initialize. Important :)
import { locale, waitLocale } from 'svelte-i18n'
import type { LayoutLoad } from './$types'

export const load: LayoutLoad = async (loadEvent) => {
    const { fetch } = loadEvent;

    // from static/houses.json
    const fetchTranslationsJson = await fetch("/translations.json");
    const translations = await fetchTranslationsJson.json();

    if (browser) {
        locale.set(window.navigator.language)
    }
    await waitLocale()

    return {
        translations,
    };
}
