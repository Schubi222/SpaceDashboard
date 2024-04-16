<script lang="ts">
	import Crew from '$lib/components/Crew.svelte';

	export let data;
</script>

{#if data?.launch && data?.crew}
	<Crew bind:launch={data.launch} bind:crew={data.crew} />
{:else}
	Please check the launch id and make sure it has a crew associated with it.
{/if}
