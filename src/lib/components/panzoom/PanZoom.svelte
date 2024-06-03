<script lang="ts">
	import { panzoom, type Options, type Point } from 'svelte-pan-zoom';
	import { onMount } from 'svelte';

	let options: Options | null = null;

	onMount(async () => {
		const image = new Image();
		// wait untill canvas element is visible
		// await new Promise((resolve) => {
		// 	image.onload = resolve;
		// });

		let canvas = document.querySelector('canvas');
		// isVisible is a custom function that checks if the element is visible
		function isVisible(element) {
			return element.offsetWidth > 0 || element.offsetHeight > 0;
		}

		// while canvas is not visible, wait for it to be visible
		while (!options) {
			await new Promise<void>((resolve) => {
				setTimeout(() => {
					console.log('waiting for canvas to be visible');
					canvas = document.querySelector('canvas');
					if (!isVisible(canvas)) {
						resolve();
					}
					const imgOptions: Options = {
						width: image.width,
						height: image.height,
						friction: 0.5,
						padding: 0.1,
						render: (ctx: CanvasRenderingContext2D, _t: number, _focus: Point) => {
							ctx.drawImage(image, 0, 0);
						}
					};

					options = imgOptions;
					resolve();
				}, 500);
			});
		}

		image.src =
			'https://fastly.picsum.photos/id/287/1920/1080.jpg?hmac=ZhvfrQi8rTXr94jwP2QdDnbt6XA1bOb8YooouDMZHfE';
	});
</script>

{#if options}
	<canvas use:panzoom={options} />
{:else}
	<p>Loading...</p>
{/if}

<style>
	div {
		font-family: Arial, Helvetica, sans-serif;
		position: absolute;
		top: 16px;
		left: 16px;
		pointer-events: none;
	}
	canvas {
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		user-select: none;
		touch-action: none;
		background-color: #fff;
		/* background-color: #ccc; */
		overscroll-behavior: none;
		-webkit-user-select: none; /* disable selection/Copy of UIWebView */
		-webkit-touch-callout: none; /* disable the IOS popup when long-press on a link */
	}
</style>
