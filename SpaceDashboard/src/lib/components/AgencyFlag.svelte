<script lang="ts">
	import { eu_flag, japan_flag, russia_flag, us_flag } from '$lib/assets';

	export let agency: string | null;
</script>

{#if agency === 'NASA' || agency === 'SpaceX' || agency === 'Axiom Space'}
	<img src={us_flag} alt="US flag" class="flag noSelect" />
{:else if agency === 'Roscosmos'}
	<img src={russia_flag} alt="Russia flag" class="flag noSelect" />
{:else if agency === 'JAXA'}
	<img src={japan_flag} alt="Japan flag" class="flag noSelect" />
{:else if agency === 'ESA'}
	<img src={eu_flag} alt="EU flag" class="flag noSelect" />
{/if}

<style lang="scss">
	.flag {
		width: 30px;
		filter: drop-shadow(0 1px 1px var(--grey-3));
	}
</style>
