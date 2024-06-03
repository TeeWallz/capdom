<script lang="ts">
	export let house;
	import HouseOverview from './HouseOverview.svelte';
</script>

<div class="space-y-4">
	<h1 class="text-4xl font-bold tracking-tighter">{house.name}</h1>
	<p class="text-gray-500 dark:text-gray-400">
		Our luxury apartments offer the perfect blend of modern design, premium amenities, and
		unbeatable location. Explore our available properties and find your new home today.
	</p>
	<div class="flex flex-col gap-2 min-[400px]:flex-row">
		<a href="#" class="view-properties-button">View Properties</a>
		<a href="#" class="contact-us-button">Contact Us</a>
	</div>
	<HouseOverview />
</div>
