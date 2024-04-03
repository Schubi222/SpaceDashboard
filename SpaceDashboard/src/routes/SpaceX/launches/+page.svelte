<script lang="ts">
	import { onMount } from 'svelte';
	import type { LaunchResponse } from '$lib/types/spacex/apiResponse';
	import { getNextLaunch } from '$lib/helpers/apis/SpaceX/launches';
	import NextLaunch from '$lib/components/NextLaunch.svelte';
	let nextLaunch: LaunchResponse | undefined;

	onMount(async () => (nextLaunch = await getNextLaunch()));
</script>

{#if nextLaunch}
	<NextLaunch bind:nextLaunch />
{:else}
	no next launch found
{/if}
