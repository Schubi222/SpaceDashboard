<script lang="ts">
	import type { FirstStage, SecondStage } from '$lib/types/spacex/apiResponseGeneral';

	export let heading: string;
	export let stage: FirstStage | SecondStage;

	function isFirstStage(stage: FirstStage | SecondStage): stage is FirstStage {
		return (stage as FirstStage).thrust_sea_level !== undefined;
	}
</script>

<div class="stage">
	<div class="heading">{heading}</div>
	<div class="label">Engine Count</div>
	<div class="info">{stage.engines}</div>
	<div class="label">Burn Time</div>
	<div class="info">{stage.burn_time_sec} sec</div>
	<div class="label">Reusability</div>
	<div class="info">{stage.reusable ? 'Reusable' : 'Not Reusable'}</div>
	<div class="label">Fuel Amount</div>
	<div class="info">{stage.fuel_amount_tons} tons</div>
	{#if isFirstStage(stage)}
		<div class="label">Thrust(Sea|Vacuum)</div>
		<div class="info">
			{stage.thrust_vacuum.kN} kN | {stage.thrust_sea_level.kN} kN
		</div>
	{:else}
		<div class="label">Thrust</div>
		<div class="info">{stage.thrust.kN} kN</div>
		<!--					TODO: CHECK WHAT THIS IS-->
		<div class="label">Payload Option 1</div>
		<div class="info">{stage.payloads.option_1}</div>
		<div class="label">Size Composite Fairing (Diameter|Height)</div>
		<div class="info">
			{stage.payloads.composite_fairing.diameter.meters} m | {stage.payloads.composite_fairing
				.height.meters}m
		</div>
	{/if}
</div>
