<script lang="ts">
	import { Button } from '$lib/components/ui/button';
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
	import HouseTabs from '$lib/components/house/HouseTabs.svelte';
	import HouseInfo from '$lib/components/house/HouseInfo.svelte';

	export let infoSide: 'left' | 'right' = 'left';
	export let house;
</script>

<section class="w-full pb-12 md:py-12 lg:py-12">
	{#if infoSide === 'left'}
		<div class="container grid grid-cols-1 gap-6 px-4 md:grid-cols-[35%_1fr] md:gap-12 md:px-6">
			<HouseInfo {house} />
			<HouseTabs {house} />
		</div>
	{:else}
		<div class="container grid grid-cols-1 gap-6 px-4 md:grid-cols-[65%_1fr] md:gap-12 md:px-6">
			<HouseTabs {house} />
			<HouseInfo {house} />
		</div>
	{/if}
</section>
