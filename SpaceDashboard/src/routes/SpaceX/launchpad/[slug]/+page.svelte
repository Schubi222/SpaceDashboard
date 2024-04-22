<script lang="ts">
	import Loading from '$lib/components/Loading.svelte';
	import Launchpad from '$lib/components/Launchpad.svelte';
	import NothingFound from '$lib/components/NothingFound.svelte';

	export let data;
</script>

{#if data?.launchpad && data?.rockets}
	<div class="Single-Wrapper">
		<Launchpad bind:launchpad={data.launchpad} bind:rockets={data.rockets} />
	</div>
{:else}
	<NothingFound />
{/if}
