<script lang="ts">
	import Rocket from '$lib/components/Rocket.svelte';

	export let data;
</script>

{#if data?.rockets && data.rockets?.length}
	<div class="Rockets-Wrapper">
		{#each data.rockets as rocket}
			<Rocket bind:rocket bind:company={data.company} back_btn={false} />
		{/each}
	</div>
{/if}

<style lang="scss">
	.Rockets-Wrapper {
		display: flex;
		flex-wrap: wrap;
		max-width: 1280px;
		gap: 50px;
		margin: auto;
	}
</style>
