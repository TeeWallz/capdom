import { init, addMessages, getLocaleFromNavigator, _ } from 'svelte-i18n';
// import translations from './translations.json';


export const loadTranslations = (translations: any) => {
    // Load site translations
    Object.keys(translations.site_translation).forEach((lang) => {
        console.log('Adding messages for language:', lang);
        addMessages(lang, translations.site_translation[lang]);
    });

    // Extract languages array
    const languages = translations.languages;
    const houses = translations.houses;
    const housesByLang = {};

    // Process and add houses data
    languages.forEach(({ code }) => {
        housesByLang[code] = houses.map(house => {
            const houseData = {};

            // Loop through each key in the house object
            Object.keys(house).forEach(key => {
                if (typeof house[key] === 'object' && house[key][code]) {
                    houseData[key] = house[key][code];
                } else {
                    houseData[key] = house[key];
                }
            });
            return houseData;
        });
    });

    // Add houses data to the messages for each language
    Object.keys(housesByLang).forEach((lang) => {
        addMessages(lang, { houses: housesByLang[lang] });
    });
};


export function updateQueryParam(window, param, value) {
    const url = new URL(window.location.href);
    url.searchParams.set(param, value);
    history.pushState(null, '', url.toString());
}

export function getQueryParam(window, param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}


// Load the translations
// loadTranslations(translations);

// Initialize svelte-i18n
init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator(),
});

export const t = _;
