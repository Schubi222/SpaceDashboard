<script lang="ts">
	import type { CrewResponse } from '$lib/types/spacex/apiResponse';

	export let member: CrewResponse;
	export let role: string;
</script>

<div class="Crew_Wrapper">
	<img src={member.image} alt="Member" />
	<div class="label">Name</div>
	<div class="info">{member.name}</div>
	<div class="label">Role</div>
	<div class="info">{role}</div>
	<div class="label">Agency</div>
	<div class="info">{member.agency}</div>
	<div class="label">Status</div>
	<div class="info">{member.status}</div>
	<div class="label">Launches</div>
	<div class="info">{member.launches.length}</div>
</div>
