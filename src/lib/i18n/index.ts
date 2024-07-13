// import { register, init } from 'svelte-i18n';

// // Helper function to get the query parameter
// function getQueryParam(param) {
//     if (typeof window !== 'undefined') {
//         const urlParams = new URLSearchParams(window.location.search);
//         return urlParams.get(param);
//     }
//     return null;
// }

// const initialLocale = getQueryParam('lang') || 'en';

// // Register JSON files for different locales
// register('en', () => import('./locales/en.json'));
// register('de', () => import('./locales/de.json'));
// register('pl', () => import('./locales/pl.json'));
// // Register other locales as needed

// // Initialize the i18n library
// init({
//     fallbackLocale: 'en',
//     initialLocale: initialLocale,
// });
