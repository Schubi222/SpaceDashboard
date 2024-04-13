<script lang="ts">
	import type { CompanyResponse, RocketsResponse } from '$lib/types/spacex/apiResponse';

	export let rocket: RocketsResponse;
	export let company: CompanyResponse;
</script>

<div class="Wrapper">
	<div class="heading">{rocket.name}</div>
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
			<div class="label"></div>
			<div class="info">{rocket.engines.type}</div>

			<div class="label"></div>
			<div class="info">{rocket.first_flight}</div>
			<div class="label"></div>
			<div class="info">{rocket.first_stage}</div>
			<div class="label"></div>
			<div class="info">{rocket.landing_legs.material} {rocket.landing_legs.number}</div>
			<div class="label"></div>
			<div class="info">{rocket.second_stage}</div>
			<div class="label"></div>
			<div class="info">{rocket.stages}</div>
			<div class="label"></div>
			<div class="info">{rocket.type}</div>
		</div>
	</div>
	<div class="additional">
		<button>Engine</button>
		<button>Stage</button>
		<button>Engine</button>
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
