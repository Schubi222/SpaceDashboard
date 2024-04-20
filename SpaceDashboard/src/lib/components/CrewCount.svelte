<script lang="ts">
	import type { CrewResponse } from '$lib/types/spacex/apiResponse';
	import { crew_img } from '$lib/assets';

	export let crew: CrewResponse[];
</script>

<div class="Crew-Wrapper">
	{#each crew as member}
		<img src={crew_img} alt="crew" />
	{/each}
</div>

<style lang="scss">
	.Crew-Wrapper {
		display: flex;
		img {
			filter: drop-shadow(0 1px 1px var(--grey-3));
		}
	}
</style>
