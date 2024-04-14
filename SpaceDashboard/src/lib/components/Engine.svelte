<script lang="ts">
	import type { RocketsResponse } from '$lib/types/spacex/apiResponse';

	export let rocket: RocketsResponse;
</script>

<div class="label">Engine Type</div>
<div class="info">{rocket.engines.type} {rocket.engines.version}</div>
<div class="label">Specific Impulse (Sea|Vacuum)</div>
<div class="info">
	<!--				TODO: DOUBLE CHECK -->
	{rocket.engines.isp.sea_level}m/s | {rocket.engines.isp.vacuum}m/s
</div>
<div class="label">Layout</div>
<div class="info">{rocket.engines.layout}</div>
<div class="label">Engine Count</div>
<div class="info">{rocket.engines.number}</div>
<div class="label">Max Engine Loss</div>
<div class="info">{rocket.engines.engine_loss_max}</div>
<div class="label">Propellant</div>
<div class="info">
	Propellant 1: {rocket.engines.propellant_1} | Propellant 2: {rocket.engines.propellant_2}
</div>
<div class="label">Thrust(Sea|Vacuum)</div>
<div class="info">
	{rocket.engines.thrust_sea_level.kN}kN | {rocket.engines.thrust_vacuum.kN}kN
</div>
<div class="label">TWR</div>
<div class="info">{rocket.engines.thrust_to_weight}</div>
