<script>
	import { onMount, onDestroy } from 'svelte';
	import { Map, NavigationControl, Marker } from 'maplibre-gl';
	import 'maplibre-gl/dist/maplibre-gl.css';

	let map;
	let mapContainer;

	const apiKey = 'ch550ZX96o98uZAGx7hS';
	const lat = 51.095366246953624;
	const long = 17.00940354297072;

	onMount(() => {
		const initialState = { lng: long, lat: lat, zoom: 15 };

		map = new Map({
			container: mapContainer,
			style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${apiKey}`,
			center: [initialState.lng, initialState.lat],
			zoom: initialState.zoom
		});
		map.addControl(new NavigationControl(), 'top-right');
		new Marker({ color: '#FF0000' }).setLngLat([long, lat]).addTo(map);
	});

	onDestroy(() => {
		map.remove();
	});
</script>

<div class="map-wrap">
	<a href="https://www.maptiler.com" class="watermark"
		><img src="https://api.maptiler.com/resources/logo.svg" alt="MapTiler logo" /></a
	>
	<div class="map" bind:this={mapContainer}></div>
</div>

<style>
	.map-wrap {
		position: relative;
		width: 100%;
		height: 100%; /* calculate height of the screen minus the heading */
		/* height: calc(100vh - 77px);*/ /* calculate height of the screen minus the heading */
	}

	.map {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.watermark {
		position: absolute;
		left: 10px;
		bottom: 10px;
		z-index: 999;
	}
</style>
