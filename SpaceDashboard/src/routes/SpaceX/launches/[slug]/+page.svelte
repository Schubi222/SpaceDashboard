<script lang="ts">
	import Launch from '$lib/components/Launch.svelte';

	export let data;
</script>

{#if data && data?.launch && data?.rocket && data?.launchpad && data?.payload}
	<Launch
		bind:launch={data.launch}
		bind:rocket={data.rocket}
		bind:launchpad={data.launchpad}
		bind:payload={data.payload}
		heading={data.launch.name}
	/>
{:else}
	no next launch found
{/if}
