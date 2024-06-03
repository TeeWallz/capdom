<script lang="ts">
	import panzoom, { type PanZoom } from 'panzoom';
	import { Button } from '$lib/components/ui/button/index.js';
	// import Toolbar from './Toolbar.svelte';

	let instance: PanZoom;

	function initPanzoom(node: any) {
		instance = panzoom(node, {
			transformOrigin: { x: 0.5, y: 0.5 }
		});
	}

	function zoomIn() {
		// zoom into center of image
		instance.smoothZoomAbs(1920 / 2, 1080 / 2, 2);
	}

	function zoomOut() {
		// zoom out from center of view
		instance.smoothZoom(1920 / 2, 1080 / 2, 0.8);
	}
</script>

<!-- <Toolbar {instance} /> -->
<div class="relative h-full w-full">
	<svg id="svelte" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
		<g use:initPanzoom>
			<!-- image -->
			<image
				href="https://picsum.photos/1920/1080"
				width="1920"
				height="1080"
				class="h-full w-full"
			/>
		</g>
	</svg>
	<!-- buttons overlayed on the svg on the bottom in the middle with button being styled -->
	<div class="absolute bottom-0 left-1/2 -translate-x-1/2 transform">
		<Button type="button" on:click={zoomOut}>ZoomOut</Button>
		<Button type="button" on:click={zoomIn}>ZoomIn</Button>
	</div>
	<!-- <button type="button" on:click={zoomIn}>ZoomIn</button>
	<button type="button" on:click={zoomOut}>ZoomOut</button> -->
</div>

<style>
	svg {
		width: 100%;
		height: 100%;
	}
</style>
