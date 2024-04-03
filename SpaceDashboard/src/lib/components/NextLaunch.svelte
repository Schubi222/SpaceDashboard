<script lang="ts">
	import type { LaunchResponse, RocketsResponse } from '$lib/types/spacex/apiResponse';

	export let nextLaunch: LaunchResponse;
	export let nextLaunchRocket: RocketsResponse;
</script>

<div class="Wrapper">
	<div class="Heading">Next Launch</div>
	<div class="date">Date:{nextLaunch.date_utc}</div>
	<div class="date">Date Unix:{nextLaunch.date_unix}</div>
	<div class="rocket">Rocket:{nextLaunch.rocket}</div>
	<div class="details">Details:{nextLaunch.details}</div>
	<div class="crew">Crew:{nextLaunch.crew?.length ? nextLaunch.crew : 'No crew'}</div>
	<div class="capsules">
		Capsules:{nextLaunch.capsules?.length ? nextLaunch.capsules : 'No capsules'}
	</div>
	<div class="payloads">
		Payloads:{nextLaunch.payloads?.length ? nextLaunch.payloads : 'No payload'}
	</div>
	<div class="launchpad">Launchpad:{nextLaunch.launchpad}</div>
	<div class="name">Name:{nextLaunch.name}</div>
	<br />
	<div class="Heading">The Rocket</div>
	<div class="name">{nextLaunchRocket.name}</div>
	<div class="name">{nextLaunchRocket.boosters}</div>
	<div class="name">{nextLaunchRocket.company}</div>
	<div class="name">{nextLaunchRocket.description}</div>
	<div class="name">{nextLaunchRocket.type}</div>
	<div class="name">{nextLaunchRocket.country}</div>
	<div class="name">{nextLaunchRocket.payload_weights}</div>
	<div class="name">{nextLaunchRocket.second_stage}</div>
	<div class="name">{nextLaunchRocket.first_flight}</div>
</div>
