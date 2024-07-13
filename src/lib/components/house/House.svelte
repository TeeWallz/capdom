<script lang="ts">
	import { t } from 'svelte-i18n';
	import HouseInfo from './HouseInfo.svelte';
	import HouseTabs from './HouseTabs.svelte';

	export let infoSide: 'left' | 'right' = 'left';
	export let house;
</script>

<section class="container w-full pb-12 md:py-12 lg:py-12">
	<div class="flex flex-1 flex-col rounded-lg bg-white p-4 shadow-md">
		{#if infoSide === 'left'}
			<div class="container grid grid-cols-1 gap-6 px-4 md:grid-cols-[35%_1fr] md:gap-16 md:px-6">
				<HouseInfo {house} />
				<HouseTabs {house} />
			</div>
		{:else}
			<div class="container grid grid-cols-1 gap-6 px-4 md:grid-cols-[65%_1fr] md:gap-16 md:px-6">
				<HouseTabs {house} />
				<HouseInfo {house} />
			</div>
		{/if}
	</div>
</section>
