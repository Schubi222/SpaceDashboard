<script lang="ts">
	import Crew from '$lib/components/Crew.svelte';
	import NothingFound from '$lib/components/NothingFound.svelte';

	export let data;
</script>

{#if data?.launch && data?.crew}
	<Crew bind:launch={data.launch} bind:crew={data.crew} />
{:else}
	<NothingFound />
{/if}
