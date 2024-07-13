<script lang="ts">
	import { t } from 'svelte-i18n';
	export let house;

	let displayInfo = [
		{ icon: 'fa-solid fa-door-open', i18n_label_key: 'navigation.rooms', property: 'rooms' },
		{
			icon: 'fa-solid fa-calendar-days',
			i18n_label_key: 'navigation.year_built',
			property: 'year_built'
		},
		{ icon: 'fa-solid fa-bath', i18n_label_key: 'navigation.bathrooms', property: 'bathrooms' },
		{
			icon: 'fa-solid fa-house',
			i18n_label_key: 'navigation.property_type',
			property: 'property_type'
		},
		{ icon: 'fa-solid fa-bed', i18n_label_key: 'navigation.bedrooms', property: 'bedrooms' },
		{ icon: 'fa-solid fa-ruler', i18n_label_key: 'navigation.area', property: 'area' },
		{
			icon: 'fa-sharp fa-solid fa-warehouse',
			i18n_label_key: 'navigation.garages',
			property: 'garages'
		}
	];
	let itemsPerRow = 3;
</script>

<div class="wrap-overview wrap-style">
	<h3 class="titles">Overview</h3>
	<div class="icon-wrap flex flex-wrap">
		{#each Array(Math.ceil(displayInfo.length / itemsPerRow)) as _, i}
			<div class="icon-wrap flex w-full flex-wrap">
				{#each displayInfo.slice(i * itemsPerRow, i * itemsPerRow + itemsPerRow) as item, j}
					<div class="wrap-box" style="flex: 1 0 15%; overflow: hidden;">
						<div class="icon">
							<i class={item.icon}></i>
						</div>
						<div class="font-2">
							<p class="fw-7">{$t(item.i18n_label_key)}</p>
							<p>{house[item.property]}</p>
						</div>
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>

<style>
	.box-icon {
		padding-right: 10px;
		display: flex;
		flex-wrap: wrap;
	}

	.wrap-overview {
		padding: 5px 10px 10px 10px;
		flex: 1 0 30%;
		box-sizing: border-box;
	}
	.wrap-box {
		padding: 2px;
		flex: 1 0 30%;
		box-sizing: border-box;
	}

	.wrap-style {
		margin-bottom: 30px;
		border-radius: 10px;
		box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.078);
	}

	.post .titles {
		padding-bottom: 12px;
		margin-bottom: 20px;
		border-bottom: 1px solid #efefef;
	}

	.wrap-overview .icon {
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.font-2 {
		font-family: Mulish, sans-serif;
	}

	.fw-7 {
		font-weight: 700;
	}
</style>
