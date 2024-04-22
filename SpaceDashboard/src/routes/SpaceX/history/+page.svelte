<script lang="ts">
	import History from '$lib/components/History.svelte';

	export let data;
	let histories = data?.history;
</script>

<div class="Single-Wrapper">
	<div class="All-History">
		<div class="heading">History</div>
		<div class="container">
			{#if histories?.length}
				{#each histories as history}
					<History bind:history />
				{/each}
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	.All-History {
		background: white;
		box-sizing: border-box;
		padding: 40px;
		border-radius: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		box-shadow: 0 4px 10px 5px var(--grey-3);
	}
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0 1px 3px var(--blue-5);
	}
	.heading {
		font-size: 2rem;
		font-weight: bold;
	}
</style>
