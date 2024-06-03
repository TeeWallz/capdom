<script lang="ts">
	import { t } from 'svelte-i18n';
	import { Button } from '$lib/components/ui/button';
	import { Tabs, TabsList, TabsTrigger, TabsContent } from '$lib/components/ui/tabs';
	import * as Carousel from '$lib/components/ui/carousel';
	import * as Card from '$lib/components/ui/card';
	import AccordionContent from '../ui/accordion/accordion-content.svelte';
	import type { CarouselAPI } from '$lib/components/ui/carousel/context.js';

	export let house;

	let api: CarouselAPI;
	let current = 0;
	let count = 0;

	$: if (api) {
		count = api.scrollSnapList().length;
		current = api.selectedScrollSnap() + 1;

		api.on('select', () => {
			current = api.selectedScrollSnap() + 1;
		});
	}
</script>

<div>
	<Carousel.Root bind:api class="aspect-video">
		<Carousel.Content class="aspect-video">
			{#each house.images.gallery as image}
				<Carousel.Item>
					<div class="p-1">
						<Card.Root>
							<Card.Content class="flex aspect-video items-center justify-center p-6">
								<span class="text-4xl font-semibold">
									<img src={image} alt="House" class="h-full w-full object-cover" />
								</span>
							</Card.Content>
						</Card.Root>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
	<div class="py-2 text-center text-sm text-muted-foreground">
		{$t('image_label')}
		{current}
		{$t('image_of_label')}
		{count}
	</div>
</div>
