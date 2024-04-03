<script lang="ts">
	import { onMount } from 'svelte';
	import type { LaunchResponse, RocketsResponse } from '$lib/types/spacex/apiResponse';
	import { getNextLaunch } from '$lib/helpers/apis/SpaceX/launches';
	import NextLaunch from '$lib/components/NextLaunch.svelte';
	import { getRocketById } from '$lib/helpers/apis/SpaceX/rockets';
	let nextLaunch: LaunchResponse | undefined;
	let nextLaunchRocket: RocketsResponse | undefined;

	onMount(async () => {
		nextLaunch = await getNextLaunch();
		if (nextLaunch && nextLaunch.rocket) nextLaunchRocket = await getRocketById(nextLaunch.rocket);
	});
</script>

{#if nextLaunch && nextLaunchRocket}
	<NextLaunch bind:nextLaunch bind:nextLaunchRocket />
{:else}
	no next launch found
{/if}
