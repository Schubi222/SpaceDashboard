<script lang="ts">
	import type { CrewResponse, LaunchResponse } from '$lib/types/spacex/apiResponse';
	import CrewMember from '$lib/components/CrewMember.svelte';

	export let crew: CrewResponse[];
	export let launch: LaunchResponse;
</script>

<div class="Wrapper">
	<div class="heading">Crew of {launch.name}</div>
	<div class="row">
		{#each crew as member, index}
			<CrewMember bind:member role={launch.crew[index].role} />
		{/each}
	</div>
</div>
