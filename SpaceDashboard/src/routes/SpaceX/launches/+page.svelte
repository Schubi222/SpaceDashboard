<script lang="ts">
	import Launch from '$lib/components/Launch.svelte';

	export let data;
	let next = data.next;
	let prev = data.prev;
</script>

{#if next && next.nextLaunch && next.launchpad && next.rocket && next.payload}
	<Launch
		bind:launch={next.nextLaunch}
		bind:rocket={next.rocket}
		bind:launchpad={next.launchpad}
		bind:payload={next.payload}
		bind:crew={next.crew}
		heading="Next Launch"
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
		heading="prev Launch"
	/>
{:else}
	no prev launch found
{/if}
