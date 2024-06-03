<script>
	import '../app.pcss';
	import { t, locale } from 'svelte-i18n';
	import { updateQueryParam, getQueryParam } from '$lib/i18n/i18n_utils';

	let selectedLocale = getQueryParam('lang') || 'en';

	function changeLocale(newLocale) {
		selectedLocale = newLocale;
		locale.set(newLocale);
		updateQueryParam('lang', newLocale);
	}
</script>

<nav class="fixed inset-x-0 top-0 z-50 bg-white shadow dark:bg-gray-950" data-id="1">
	<div class="container px-4 md:px-6" data-id="2">
		<div class="flex h-14 items-center" data-id="3">
			<a class="mr-auto flex items-center gap-2 text-lg font-semibold" data-id="4" href="#"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="h-5 w-5"
					data-id="5"
					><path d="m7.5 4.27 9 5.15"></path><path
						d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
					></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg
				><span data-id="6">Acme Inc</span></a
			>
			<nav class="ml-auto flex items-center space-x-4" data-id="7">
				<a
					class="border-b-2 border-transparent text-sm font-medium transition-colors hover:border-gray-100 hover:text-gray-900 dark:hover:border-gray-800 dark:hover:text-gray-50"
					data-id="8"
					href="#"
				>
					Home
				</a><a
					class="border-b-2 border-transparent text-sm font-medium transition-colors hover:border-gray-100 hover:text-gray-900 dark:hover:border-gray-800 dark:hover:text-gray-50"
					data-id="9"
					href="#"
				>
					Features
				</a><a
					class="border-b-2 border-transparent text-sm font-medium transition-colors hover:border-gray-100 hover:text-gray-900 dark:hover:border-gray-800 dark:hover:text-gray-50"
					data-id="10"
					href="#"
				>
					Pricing
				</a><a
					class="border-b-2 border-transparent text-sm font-medium transition-colors hover:border-gray-100 hover:text-gray-900 dark:hover:border-gray-800 dark:hover:text-gray-50"
					data-id="11"
					href="#"
				>
					Contact
				</a>
				<select bind:value={selectedLocale} on:change={() => changeLocale(selectedLocale)}>
					<option value="en">English</option>
					<option value="de">Deutsche</option>
					<option value="pl">Polski</option>
					<!-- Add more options as needed -->
				</select>
			</nav>
		</div>
	</div>
</nav>
<slot></slot>
