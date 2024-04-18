<script lang="ts">
	import type { LaunchPadsResponse, RocketsResponse } from '$lib/types/spacex/apiResponse';
	import BackBtn from '$lib/components/BackBtn.svelte';

	export let launchpad: LaunchPadsResponse;
	export let rockets: RocketsResponse[] | false;
</script>

<div class="Wrapper">
	<BackBtn />
	<div class="heading">{launchpad.full_name} ({launchpad.name})</div>
	<div class="divider">
		<div class="left-side">
			<div class="label">Region | Latitude | Longitude | Timezone</div>
			<div class="info">
				{launchpad.locality} ({launchpad.region}) | {launchpad.latitude?.toFixed(2)}° | {launchpad.longitude?.toFixed(
					2
				)}° | {launchpad.timezone}
			</div>
			<div class="label">Launches</div>
			<div class="info">{launchpad.launch_attempts} ({launchpad.launch_successes} successful)</div>
			<div class="label">Success Rate</div>
			<div class="info">
				{((launchpad.launch_attempts / launchpad.launch_successes) * 100).toFixed(2)}%
			</div>
			<div class="label">Rockets</div>
			{#if rockets}
				<div class="info">
					{#each rockets as rocket}
						<a href={'/SpaceX/rocket/' + rocket.id} class="clickable">{rocket.name}</a>
					{/each}
				</div>
			{:else}
				<div class="info">No rockets in this launchpad</div>
			{/if}
			<div class="label">Status</div>
			<div class="info">{launchpad.status}</div>
		</div>
		<div class="right-side"></div>
	</div>
</div>

<style lang="scss">
	.clickable:not(:last-child):after {
		content: ', ';
	}
</style>
