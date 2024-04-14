<script lang="ts">
	import Loading from '$lib/components/Loading.svelte';
	import Launchpad from '$lib/components/Launchpad.svelte';

	export let data;
</script>

{#if data?.launchpad}
	<Launchpad bind:launchpad={data.launchpad} bind:rockets={data.rockets} />
{:else}
	<Loading />
{/if}
