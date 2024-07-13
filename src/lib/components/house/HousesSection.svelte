<script lang="ts">
	import { t, json } from 'svelte-i18n';
	import House from './House.svelte';
	import { onMount } from 'svelte';

	let houses = [];

	onMount(() => {
		houses = $json('houses');
	});
</script>

<div id="houses-anchor"></div>
<div class="container text-4xl font-bold">
	{@html $t('navigation.our_houses')}
	<div class="my-4 h-2 w-full bg-primary"></div>
</div>

{#if houses.length > 0}
	{#each houses as house, index}
		<House infoSide={index % 2 === 0 ? 'left' : 'right'} {house} />
		<hr class="mx-auto my-8 w-2/3 border-t border-gray-200 dark:border-gray-700" />
	{/each}
{:else}
	<p>{$t('loading')}</p>
{/if}
