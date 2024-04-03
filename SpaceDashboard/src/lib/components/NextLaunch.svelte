<script lang="ts">
	import type { LaunchResponse } from '$lib/types/spacex/apiResponse';

	export let nextLaunch: LaunchResponse;
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
</div>
