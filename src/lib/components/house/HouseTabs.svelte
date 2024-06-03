<script lang="ts">
	import { t } from 'svelte-i18n';
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
	import PanZoom3 from '$lib/components/panzoom/PanZoomv3.svelte';

	export let house;
</script>

<div>
	<Tabs class="w-full">
		<TabsList class="grid grid-cols-3 gap-2">
			<TabsTrigger value="carousel">{$t('carousel_tab_label')}</TabsTrigger>
			<TabsTrigger value="floorplan">{$t('floor_plan_tab_label')}</TabsTrigger>
			<TabsTrigger value="map">{$t('map_tab_label')}</TabsTrigger>
		</TabsList>
		<TabsContent value="carousel">
			<AspectRatio ratio={16 / 9} class="bg-muted">
				<Carousel {house} />
			</AspectRatio>
		</TabsContent>
		<TabsContent value="floorplan">
			<!-- <img
                alt="Floor Plan"
                class="aspect-[3/2] w-full rounded-lg object-cover"
                height="400"
                src="/placeholder.svg"
                width="600"
            /> -->
			<div class="space-y-4">
				<AspectRatio ratio={16 / 9} class="bg-muted">
					<div id="floorplan" class="img-wrapper h-full w-full overflow-hidden rounded-lg bg-muted">
						<PanZoom3 />
					</div>
				</AspectRatio>
			</div>
		</TabsContent>
		<TabsContent value="map">
			<div class="space-y-4">
				<AspectRatio ratio={16 / 9} class="bg-muted" id="ass">
					<div id="map" class="h-full w-full rounded-lg bg-muted">
						<Map />
					</div>
				</AspectRatio>
			</div>
		</TabsContent>
	</Tabs>
</div>

<style>
	.img-wrapper {
		position: relative;
		overflow: hidden;
	}

	.gallery {
		position: absolute;
		top: -100%;
		left: 0;
		right: 0;
		bottom: -100%;
		margin: auto;
	}
</style>
