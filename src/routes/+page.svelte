<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import House from '$lib/components/house/House.svelte';
	import { Tabs, TabsList, TabsTrigger, TabsContent } from '$lib/components/ui/tabs';
	import Carousel from '$lib/components/carousel/Carousel.svelte';
	import CardContent from '@/components/ui/card/card-content.svelte';
	import { AspectRatio } from '@/components/ui/aspect-ratio';
	import type { Hst } from '@histoire/plugin-svelte';
	import { browser } from '$app/environment';

	import { onMount } from 'svelte';
	import Map from '$lib/components/map/Map.svelte';
	import FloorPlan from '$lib/components/floorplan/FloorPlan.svelte';
	import PhotoSwipe from '$lib/components/photoswipe/PhotoSwipe.svelte';
	import PanZoom from '$lib/components/panzoom/PanZoom.svelte';
	import InfoSide from '$lib/components/house/House.svelte';

	// load data from +page.ts
	export let data;
	console.log(data);
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
	{#each data.houses as house, index}
		<House infoSide={index % 2 === 0 ? 'left' : 'right'} {house} />
		<!-- horizontal rule filling 2/3 of the width -->
		<hr class="mx-auto my-8 w-2/3 border-t border-gray-200 dark:border-gray-700" />
	{/each}
</main>

<footer
	class="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6"
>
	<p class="text-xs text-gray-500 dark:text-gray-400">
		© 2024 Acme Real Estate. All rights reserved.
	</p>
	<nav class="flex gap-4 sm:ml-auto sm:gap-6">
		<a href="#" class="footer-link">Terms of Service</a>
		<a href="#" class="footer-link">Privacy</a>
	</nav>
</footer>
