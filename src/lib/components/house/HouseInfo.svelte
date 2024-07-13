<script lang="ts">
	import { t } from 'svelte-i18n';
	import HouseOverview from './HouseOverview.svelte';
	export let house;
</script>

<div class="space-y-4">
	<h1 class="text-4xl font-bold tracking-tighter">
		{house.name}
	</h1>
	<p class="text-gray-500 dark:text-gray-400">
		{house.description}
	</p>
	<p class="text-gray-500 dark:text-gray-400">
		Address:
		<a
			href={`https://www.google.com/maps/place/${house.coordinates.latitude},${house.coordinates.longitude}`}
			target="_blank"
			rel="noopener noreferrer"
			class="text-blue-500 dark:text-blue-400"
		>
			{house.address}
			<i class="fas fa-external-link-alt"></i>
		</a>
	</p>
	<HouseOverview {house} />
</div>
