<script lang="ts">
	import PhotoSwipeGallery from 'svelte-photoswipe';
	import type { GalleryItem } from 'svelte-photoswipe';
	export let house;
	const images: GalleryItem[] = [];
	images.push({
		src: 'https://picsum.photos/id/1/3000/4000',
		width: 3000,
		height: 4000,
		alt: 'Photo', // optional
		cropped: true, // optional, default=false; see https://photoswipe.com/v5/docs/
		thumbnail: { src: 'https://picsum.photos/id/1/300/400', width: '100%', width: '100%' }
	});

	// for each house.images
	// for (let i = 0; i < house.images.length; i++) {
	// 	images.push({
	// 		src: house.images[i],
	// 		width: 3000,
	// 		height: 4000,
	// 		alt: 'Photo', // optional
	// 		cropped: true, // optional, default=false; see https://photoswipe.com/v5/docs/
	// 		thumbnail: { src: house.images[i], width: '100%', width: '100%' }
	// 	});
	// }
</script>

<PhotoSwipeGallery {images} individual />

<style>
	/* Global scope for cllass name gallery. As this is svelte we need to use :global() */
	:global(.gallery) {
		position: absolute;
		top: -100%;
		left: 0;
		right: 0;
		bottom: -100%;
		margin: auto;
	}
</style>
