<script lang="ts">
	import { t, addMessages, dictionary } from 'svelte-i18n';
	let test = $dictionary;
</script>

<!-- 
<section class="container mb-4 w-full bg-gray-100 pb-7 dark:bg-gray-800">
	<div class="mx-auto px-4 py-8">
		<h1 class="text-4xl font-bold tracking-tighter">{$t('header')}</h1>
		<p class="text-gray-500 dark:text-gray-400">{$t('subheader')}</p>
	</div>
	<div class="flex flex-1 flex-col rounded-lg p-4 shadow-md">
		<h3 class="mb-4 border-b pb-2 text-xl font-bold">{$t('about_us.title')}</h3>
		<div class="space-y-4 text-lg">
			<p>{$t('about_us.content')}</p>
		</div>
	</div>
</section> -->

<div id="index-header-anchor"></div>
<div class="flex flex-wrap">
	<div class="mb-10 w-full sm:w-8/12">
		<div class="container mx-auto h-full sm:p-10">
			<nav class="flex items-center justify-between px-4">
				<div class="text-4xl font-bold">
					Capdom<span class="text-primary">.</span>
				</div>
				<div>
					<img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" class="w-8" />
				</div>
			</nav>
			<header class="container mt-10 h-full items-center px-4 lg:mt-0 lg:flex">
				<div class="w-full">
					<h1 class="text-4xl font-bold lg:text-6xl">
						{@html $t('navigation.subheader')}
					</h1>
					<div class="my-4 h-2 w-20 bg-primary"></div>
					<p class="mb-10 text-xl">
						{@html $t('navigation.about_us.content')}
					</p>
					<button class="rounded bg-primary px-4 py-2 text-2xl font-medium text-white shadow"
						>Learn More</button
					>
				</div>
			</header>
		</div>
	</div>
	<img
		src="https://media.gettyimages.com/id/1346370282/photo/holidays-in-poland-a-view-of-the-swinoujscie-health-resort.jpg?s=2048x2048&w=gi&k=20&c=SEM2JAJqiUl2oGlUg6moRudFTHhNfyIWjXSEDSfh-ZE="
		alt="Leafs"
		class="h-48 w-full max-w-full object-cover sm:h-screen sm:w-4/12"
	/>
</div>
