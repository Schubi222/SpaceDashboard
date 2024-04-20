<script lang="ts">
	import type { CrewResponse } from '$lib/types/spacex/apiResponse';
	import AgencyFlag from '$lib/components/AgencyFlag.svelte';

	export let member: CrewResponse;
	export let role: string | null;
</script>

<div class="Crew_Wrapper">
	<img src={member.image} alt="Member" />
	<div class="label">Name</div>
	<div class="info">{member.name}</div>
	<div class="label">Role</div>
	<div class="info">{role}</div>
	<div class="label">Agency</div>
	<div class="info agency">{member.agency}<AgencyFlag bind:agency={member.agency} /></div>
	<div class="label">Status</div>
	<div class="info">{member.status}</div>
	<div class="label">Launches</div>
	<div class="info">{member.launches.length}</div>
</div>

<style lang="scss">
	img {
		width: 250px;
		height: 300px;
		border-radius: 10px;
		filter: drop-shadow(0 1px 1px var(--grey-3));
	}
	.agency {
		display: flex;
		gap: 10px;
	}
</style>
