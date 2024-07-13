<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import HousesSection from '$lib/components/house/HousesSection.svelte';
	import ContactUs from '$lib/components/contactus/ContactUs.svelte';
	import AboutUs from '@/components/aboutus/AboutUs.svelte';
	import IndexHeader from '@/components/header/IndexHeader.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	// const translations = data.translations;
	// const houses = translations.static.houses;
	// const housez = $dictionary;
</script>

<header class="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
	<a href="#" class="flex items-center">
		<mountain-icon class="h-8 w-8 text-gray-900 dark:text-gray-50" />
		<span class="sr-only">Acme Real Estate</span>
	</a>
	<nav class="ml-auto hidden space-x-4 lg:flex">
		<a href="#" class="nav-link">Home</a>
		<a href="#" class="nav-link">Properties</a>
		<a href="#" class="nav-link">About</a>
		<a href="#" class="nav-link">Contact</a>
	</nav>
	<Button class="ml-auto lg:hidden" size="icon" variant="outline">
		<menu-icon class="h-6 w-6 text-gray-900 dark:text-gray-50" />
		<span class="sr-only">Toggle navigation menu</span>
	</Button>
</header>

<main class="flex-1">
	<IndexHeader />
	<AboutUs />
	<HousesSection {data} />
	<ContactUs />
</main>

<footer
	class="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6"
>
	<p class="text-xs text-gray-500 dark:text-gray-400">
		© {new Date().getFullYear()} Capdom. All rights reserved.
	</p>
	<nav class="flex gap-4 sm:ml-auto sm:gap-6">
		<a href="#" class="footer-link">Terms of Service</a>
		<a href="#" class="footer-link">Privacy</a>
	</nav>
</footer>
