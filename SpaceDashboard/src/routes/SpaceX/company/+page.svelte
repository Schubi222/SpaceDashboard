<script lang="ts">
	import Company from '$lib/components/Company.svelte';
	import NothingFound from '$lib/components/NothingFound.svelte';

	export let data;
</script>

{#if data?.spaceX}
	<Company bind:spaceX={data.spaceX} />
{:else}
	<NothingFound />
{/if}
