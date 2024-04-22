<script lang="ts">
	import Loading from '$lib/components/Loading.svelte';
	import LaunchOverview from '$lib/components/LaunchOverview.svelte';
	import { LightPaginationNav } from 'svelte-paginate';
	import { getPaginatedLaunches } from '$lib/helpers/apis/SpaceX/launches';
	import type { ExtendedLaunchResponse } from '$lib/types/spacex/apiResponse';

	export let data;
	let launches = data?.launches;
	let docs_count = data.docs_count;
	let current_page = 1;
	let loading: boolean;
	async function loadMorePages(e) {
		loading = true;
		console.log(e.detail.page);
		const data = await getPaginatedLaunches(10, e.detail.page);
		current_page = e.detail.page;
		launches = data.docs as ExtendedLaunchResponse[];
		loading = false;
	}
</script>

<div class="All-Launches">
	{#if data?.launches && !loading}
		<div class="heading">All Launches</div>
		{#each launches as launch}
			<LaunchOverview bind:launch />
		{/each}
		<LightPaginationNav
			totalItems={docs_count + 9}
			pageSize={10}
			bind:currentPage={current_page}
			limit={2}
			on:setPage={(e) => loadMorePages(e)}
		/>
	{:else}
		<Loading />
	{/if}
</div>

<style lang="scss">
	:global(.pagination-nav) {
		width: 280px;
		padding: 5px 220px;
		box-sizing: border-box;
	}
	.All-Launches {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: white;
		margin: 10px auto;
		max-width: 700px;
		border-radius: 15px;
		box-sizing: border-box;
		gap: 30px;
		padding: 30px;
	}
</style>
