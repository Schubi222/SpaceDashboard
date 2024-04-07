<script lang="ts">
	import { onMount } from 'svelte';
	import type {
		LaunchPadsResponse,
		LaunchResponse,
		RocketsResponse
	} from '$lib/types/spacex/apiResponse';
	import { getNextLaunch } from '$lib/helpers/apis/SpaceX/launches';
	import { getRocketsById } from '$lib/helpers/apis/SpaceX/rockets';
	import Launch from '$lib/components/Launch.svelte';
	import { getLaunchPadsById } from '$lib/helpers/apis/SpaceX/launchpads';
	let nextLaunch: LaunchResponse | undefined;
	let nextLaunchRocket: RocketsResponse | undefined;
	let nextLaunchLaunchpad: LaunchPadsResponse | undefined;

	onMount(async () => {
		//TODO THIS WILL TAKE FOR EVER
		nextLaunch = await getNextLaunch();
		if (nextLaunch) {
			if (nextLaunch?.rocket) nextLaunchRocket = await getRocketsById(nextLaunch.rocket);
			if (nextLaunch?.launchpad)
				nextLaunchLaunchpad = await getLaunchPadsById(nextLaunch.launchpad);
		}
	});
</script>

{#if nextLaunch && nextLaunchRocket && nextLaunchLaunchpad}
	<Launch
		bind:launch={nextLaunch}
		bind:rocket={nextLaunchRocket}
		bind:launchpad={nextLaunchLaunchpad}
		heading="Next Launch"
	/>
{:else}
	no next launch found
{/if}
