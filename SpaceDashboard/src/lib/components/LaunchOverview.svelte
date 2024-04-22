<script lang="ts">
	import type { ExtendedLaunchResponse } from '$lib/types/spacex/apiResponse';
	import moment from 'moment/moment';

	export let launch: ExtendedLaunchResponse;
</script>

<a class="Overview-Wrapper" href={'/SpaceX/launches/' + launch.id}>
	<div class="first-part">
		<div class="pairing">
			<div class="label">Mission Name</div>
			<div class="info">{launch.name}</div>
		</div>
		<div class="pairing">
			<div class="label">Launchpad</div>
			<div class="info">{launch.launchpad.name}</div>
		</div>
		<div class="pairing">
			<div class="label">Rocket</div>
			<div class="info">{launch.rocket.name}</div>
		</div>
	</div>
	<div class="second-part">
		{#if launch?.crew?.length}
			<div class="pairing">
				<div class="label">Crew</div>
				<div class="info">Crew of {launch.crew.length}</div>
			</div>
		{:else if launch.payloads.type}
			<div class="pairing">
				<div class="label">Payload</div>
				<div class="info">{launch.payloads.type}</div>
			</div>
		{:else}
			<div class="pairing">
				<div class="label">Payload</div>
				<div class="info">No Crew or Payload</div>
			</div>
		{/if}
		<div class="pairing">
			<div class="label">Date</div>
			<div class="info">{moment.utc(launch.date_unix * 1000).format('DD/MM/YYYY, HH:mm:ss')}</div>
		</div>
		<div class="pairing">
			<div class="label">Mission Name</div>
			<div class={`info ${launch.upcoming ? '' : launch.success ? 'success' : 'fail'}`}>
				{launch.upcoming ? 'Upcoming' : launch.success ? 'Success' : 'Failure'}
			</div>
		</div>
	</div>
</a>

<style lang="scss">
	.fail {
		color: var(--red-4);
	}
	.success {
		color: var(--green-4);
	}
	.Overview-Wrapper {
		display: flex;
		flex-direction: column;
		box-shadow: 0 1px 5px 1px var(--blue-6);
		gap: 10px;
		width: 100%;
		padding: 10px 20px;
		box-sizing: border-box;
		border-radius: 15px;
		cursor: pointer;
		transition: 0.4s;
		text-decoration: none;
		color: unset;
		&:hover {
			box-shadow: 0 1px 7px 2px var(--blue-5);
		}
	}
	.first-part,
	.second-part {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;

		grid-gap: 30px;
	}
</style>
