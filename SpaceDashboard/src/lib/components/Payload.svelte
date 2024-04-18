<script lang="ts">
	import type { LaunchResponse, PayloadsResponse } from '$lib/types/spacex/apiResponse';
	import BackBtn from '$lib/components/BackBtn.svelte';

	export let payload: PayloadsResponse;
	export let launch: LaunchResponse | undefined;
</script>

<div class="Wrapper">
	<BackBtn />
	<div class="heading">{payload.name}</div>
	<div class="divider">
		<div class="left-side">
			<div class="label">Type</div>
			<div class="info">{payload.type}</div>
			<div class="label">Customer</div>
			<div class="info">{payload.customers}</div>
			<div class="label">Manufacturers</div>
			<div class="info">{payload.manufacturers}</div>
			<div class="label">Nationality</div>
			<div class="info">{payload.nationalities}</div>
			<div class="label">Launch</div>
			{#if launch}
				<a class="info clickable" href={'/SpaceX/launches/' + launch.id}
					>{launch.name}<span>&rarr;</span></a
				>
			{:else}
				<div class="info">There is no launch for this payload</div>
			{/if}
			<div class="label">Lifespan</div>
			<div class="info">{payload.lifespan_years}</div>
			<div class="label">Mass</div>
			<div class="info">{payload.mass_kg} kg</div>
			<div class="label">Orbit</div>
			<div class="info">{payload.orbit}</div>
			<div class="label">Reuse</div>
			<div class="info">{payload.reused ? 'Has been reused' : 'Has not been reused'}</div>
		</div>
		<div class="right-side"></div>
	</div>
</div>
