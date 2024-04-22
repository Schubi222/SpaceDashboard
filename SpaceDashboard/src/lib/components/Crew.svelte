<script lang="ts">
	import type { CrewResponse, LaunchResponse } from '$lib/types/spacex/apiResponse';
	import CrewMember from '$lib/components/CrewMember.svelte';
	import BackBtn from '$lib/components/BackBtn.svelte';

	export let crew: CrewResponse[];
	export let launch: LaunchResponse;
</script>

<div class="spacing">
	<div class="Wrapper">
		<BackBtn />
		<div class="heading">Members of {launch?.name}</div>
		<div class="row">
			{#each crew as member, index}
				<CrewMember bind:member bind:role={launch.crew[index].role} />
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.spacing {
		padding: 10px;
	}
	.Wrapper {
		width: fit-content;
		max-width: unset;
		margin: auto;
		padding: 50px;

		.row {
			display: flex;
			flex-direction: row;
			gap: 30px;
			margin-inline: auto;
		}
	}
</style>
