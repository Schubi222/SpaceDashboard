<script lang="ts">
	import { onMount } from 'svelte';
	import type {
		LaunchPadsResponse,
		LaunchResponse,
		PayloadsResponse,
		RocketsResponse
	} from '$lib/types/spacex/apiResponse';
	import { getNextLaunch } from '$lib/helpers/apis/SpaceX/launches';
	import { getRocketsById } from '$lib/helpers/apis/SpaceX/rockets';
	import Launch from '$lib/components/Launch.svelte';
	import { getLaunchPadsById } from '$lib/helpers/apis/SpaceX/launchpads';
	import { getPayloadsById } from '$lib/helpers/apis/SpaceX/payloads';
	let nextLaunch: LaunchResponse | undefined;
	let nextLaunchRocket: RocketsResponse | undefined;
	let nextLaunchLaunchpad: LaunchPadsResponse | undefined;
	let nextPayload: PayloadsResponse | undefined;

	onMount(async () => {
		//TODO THIS WILL TAKE FOR EVER
		nextLaunch = await getNextLaunch();
		if (nextLaunch) {
			if (nextLaunch?.rocket) nextLaunchRocket = await getRocketsById(nextLaunch.rocket);
			if (nextLaunch?.launchpad)
				nextLaunchLaunchpad = await getLaunchPadsById(nextLaunch.launchpad);
			if (nextLaunch?.payloads?.length) nextPayload = await getPayloadsById(nextLaunch.payloads[0]);
		}
	});
</script>

{#if nextLaunch && nextLaunchRocket && nextLaunchLaunchpad && nextPayload}
	<Launch
		bind:launch={nextLaunch}
		bind:rocket={nextLaunchRocket}
		bind:launchpad={nextLaunchLaunchpad}
		bind:payload={nextPayload}
		heading="Next Launch"
	/>
{:else}
	no next launch found
{/if}
