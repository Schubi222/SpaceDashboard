<script lang="ts">
	import Launch from '$lib/components/Launch.svelte';
	import Company from '$lib/components/Company.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import Disclaimer from '$lib/components/Disclaimer.svelte';

	export let data;
	let next = data.next;
	let prev = data.prev;
	let spaceX = data.spaceX;
</script>

{#if data}
	<div class="Home-Page-Wrapper">
		<div>
			{#if spaceX}
				<Company bind:spaceX back_btn={false} />
			{:else}
				Something went wrong while loading the company data.
			{/if}
			<div class="Launch-Wrapper">
				{#if next && next.nextLaunch && next.launchpad && next.rocket && next.payload}
					<Launch
						bind:launch={next.nextLaunch}
						bind:rocket={next.rocket}
						bind:launchpad={next.launchpad}
						bind:payload={next.payload}
						bind:crew={next.crew}
						heading="Next Launch"
						back_btn={false}
					/>
				{:else}
					no next launch found
				{/if}
				{#if prev && prev.prevLaunch && prev.launchpad && prev.rocket && prev.payload}
					<Launch
						bind:launch={prev.prevLaunch}
						bind:rocket={prev.rocket}
						bind:launchpad={prev.launchpad}
						bind:payload={prev.payload}
						bind:crew={prev.crew}
						heading="Previous Launch"
						back_btn={false}
					/>
				{:else}
					no prev launch found
				{/if}
			</div>
		</div>
		<Disclaimer />
	</div>
{:else}
	<Loading />
{/if}

<style lang="scss">
	.Launch-Wrapper {
		padding-top: 50px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 120px;
	}
	.Home-Page-Wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 100vh;
		gap: 120px;
	}
</style>
