<script lang="ts">
	import type { CompanyResponse, RocketsResponse } from '$lib/types/spacex/apiResponse';
	import Engine from '$lib/components/Engine.svelte';

	export let rocket: RocketsResponse;
	export let company: CompanyResponse;
	let showing_info: null | string = 'stage';
</script>

<div class="Wrapper">
	<div class="heading">{rocket.name}</div>
	{rocket.description}
	<div class="divider">
		<div class="left-side">
			<div class="label">Company</div>
			<a class="rocket info clickable" href={'company/' + company.id}>
				{company.name}<span>&rarr;</span>
			</a>
			<div class="label">Country</div>
			<div class="info">{rocket.country}</div>
			<div class="label">Cost per launch</div>
			<div class="info">{rocket.cost_per_launch + ' $'}</div>
			<div class="label">Status</div>
			<div class={'info ' + rocket.active ? 'active' : 'inactive'}>
				{rocket.active ? 'Active' : 'Inactive'}
			</div>
			<div class="label">Success Rate</div>
			<div class="info">{rocket.success_rate_pct}</div>
		</div>
		<div class="right-side">
			<div class="label">Image</div>
			<img class="logo" src={rocket.flickr_images?.at(0)} alt="Rocket" />
			<div class="label">Booster</div>
			<div class="info">{rocket.boosters}</div>
			<div class="label">Diameter</div>
			<div class="info">{rocket.diameter.meters}</div>
			<div class="label">Height</div>
			<div class="info">{rocket.height.meters}</div>
			<div class="label">Engine Type</div>
			<div class="info">{rocket.engines.type}</div>

			<div class="label">First Flight</div>
			<div class="info">{rocket.first_flight}</div>
			<div class="label">Landing Legs</div>
			<div class="info">{rocket.landing_legs.number} {rocket.landing_legs.material}</div>
		</div>
	</div>
	<div class="additional">
		<button on:click={() => (showing_info = 'engine')}>Engine</button>
		<button on:click={() => (showing_info = 'stage')}>Stage</button>
		<button on:click={() => (showing_info = null)}>Close</button>
	</div>

	<div class="additional_info">
		{#if showing_info === 'engine'}
			<Engine bind:rocket />
		{:else if showing_info === 'stage'}
			STAGE
		{/if}
	</div>
</div>

<style lang="scss">
	.inactive {
		color: var(--red-4);
	}
	.active {
		color: var(--green-4);
	}
</style>
