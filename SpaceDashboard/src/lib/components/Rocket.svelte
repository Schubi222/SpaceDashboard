<script lang="ts">
	import type { CompanyResponse, RocketsResponse } from '$lib/types/spacex/apiResponse';
	import Engine from '$lib/components/Engine.svelte';
	import Stage from '$lib/components/Stage.svelte';
	import BackBtn from '$lib/components/BackBtn.svelte';

	export let rocket: RocketsResponse;
	export let company: CompanyResponse;
	export let back_btn = true;
	let showing_info: null | string = null;
</script>

<div class="Wrapper">
	{#if back_btn}
		<BackBtn />
	{/if}
	<div class="heading">{rocket.name}</div>
	<div class="description_and_img">
		<span>{rocket.description}</span>
		<img class="logo noSelect" src={rocket.flickr_images?.at(0)} alt="Rocket" />
	</div>
	<div class="line" />
	<div class="divider">
		<div class="left-side">
			<div class="label">Company</div>
			{#if company?.name === 'SpaceX'}
				<a class="rocket info clickable" href={'/SpaceX/company'}>
					{company.name}
				</a>
			{:else}
				<div class="info">{company.name}</div>
			{/if}
			<div class="label">Country</div>
			<div class="info">{rocket.country}</div>
			<div class="label">Cost per launch</div>
			<div class="info">{rocket.cost_per_launch + ' $'}</div>
			<div class="label">Status</div>
			<div class={'info ' + (rocket.active ? 'active' : 'inactive')}>
				{rocket.active ? 'Active' : 'Inactive'}
			</div>
			<div class="label">Success Rate</div>
			<div class="info">{rocket.success_rate_pct}</div>
			<div class="label">First Flight</div>
			<div class="info">{rocket.first_flight}</div>
		</div>
		<div class="right-side">
			<div class="label">Booster</div>
			<div class="info">{rocket.boosters}</div>
			<div class="label">Stages</div>
			<div class="info">{rocket.stages}</div>
			<div class="label">Size (Diameter|Height)</div>
			<div class="info">{rocket.diameter.meters} m | {rocket.height.meters} m</div>
			<div class="label">Engine Type</div>
			<div class="info">{rocket.engines.type}</div>
			<div class="label">Landing Legs</div>
			{#if rocket.landing_legs.number}
				<div class="info">{rocket.landing_legs.number} {rocket.landing_legs.material}</div>
			{:else}
				<div class="info">No landing legs</div>
			{/if}
		</div>
	</div>
	<div class="additional noSelect">
		<button
			on:click={() => (showing_info = 'engine')}
			class:active={showing_info === 'engine'}
			class="noSelect">Engine</button
		>
		<button
			on:click={() => (showing_info = 'stage')}
			class:active={showing_info === 'stage'}
			class="noSelect">Stage</button
		>
		<button on:click={() => (showing_info = null)} class="noSelect">Close</button>
	</div>

	<div class="additional_info">
		{#if showing_info === 'engine'}
			<Engine bind:rocket />
		{:else if showing_info === 'stage'}
			<div class="Stage-Wrapper">
				<Stage heading="Stage 1" bind:stage={rocket.first_stage} />
				<Stage heading="Stage 2" bind:stage={rocket.second_stage} />
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.line {
		border-bottom: 1px solid var(--grey-7);
		//box-shadow: 0 0px 1px 1px var(--grey-7);
		margin: 5px 0;
		width: 100%;
	}
	.inactive {
		color: var(--red-4);
	}
	.active {
		color: var(--green-4);
	}
	.Stage-Wrapper {
		display: flex;
		gap: 20px;
		padding-top: 20px;
	}
	.description_and_img {
		display: flex;
	}
	.additional {
		margin-top: 10px;
		& > button {
			width: 90px;
			height: 30px;
			border-radius: 30px;
			outline: none;
			border: none;
			cursor: pointer;
			font-size: 1.2rem;
			background: var(--grey-4);
			color: var(--blue-1);
			transition: 0.4s;
			filter: drop-shadow(0 1px 1px var(--grey-1));
			&:hover {
				background: var(--grey-6);
				color: var(--blue-3);
			}
			&.active {
				background: var(--grey-1);
				color: var(--blue-3);
				filter: none;
			}
		}
	}
	.additional_info:has(*) {
		border-top: 1px solid var(--grey-7);
		margin-top: 15px;
	}
</style>
