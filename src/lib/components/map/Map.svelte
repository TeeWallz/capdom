<script>
	import { onMount, onDestroy } from 'svelte';
	import { Map, NavigationControl, Marker } from 'maplibre-gl';
	import 'maplibre-gl/dist/maplibre-gl.css';
</script>

<div class="map-wrap">
	<iframe
		src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2505.834058738254!2d16.9810011!3d51.093069899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTHCsDA1JzM1LjEiTiAxNsKwNTgnNTEuNiJF!5e0!3m2!1sen!2spl!4v1717865952961!5m2!1sen!2spl"
		width="100%"
		height="100%"
		style="border:0;"
		allowfullscreen=""
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
	></iframe>
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
