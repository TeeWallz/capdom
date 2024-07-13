<script>
	import { onMount } from 'svelte';
	import { Panzoom } from '@fancyapps/ui/dist/panzoom/panzoom.esm.js';
	import { Toolbar } from '@fancyapps/ui/dist/panzoom/panzoom.toolbar.esm.js';
	import '@fancyapps/ui/dist/panzoom/panzoom.css';
	import '@fancyapps/ui/dist/panzoom/panzoom.toolbar.css';

	export let house;

	onMount(() => {
		const container = document.getElementById('myPanzoom' + house.id);
		const options = {
			Toolbar: {
				display: ['zoomIn', 'zoomOut', 'toggle1to1', 'toggleZoom', 'reset', 'toggleFS']
			},
			maxScale: 5
		};

		new Panzoom(container, options, { Toolbar });
	});
</script>

<div id="app" class="h-full w-full">
	<div class="f-panzoom h-full w-full" id={'myPanzoom' + house.id}>
		<img
			class="f-panzoom__content"
			src="https://wpmedia.roomsketcher.com/content/uploads/2022/03/31095248/blue-green-2d-floor-plan.jpg"
		/>
	</div>
</div>

<style>
	#myPanzoom {
		background: #eee;
	}

	/* Additional styling to ensure toolbar visibility and positioning */
	.f-panzoom__toolbar {
		position: absolute;
		top: 10px;
		right: 10px;
		display: flex;
		gap: 5px;
	}

	.f-panzoom__toolbar button {
		padding: 5px 10px;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	.f-panzoom__toolbar button:hover {
		background-color: #0056b3;
	}
</style>
