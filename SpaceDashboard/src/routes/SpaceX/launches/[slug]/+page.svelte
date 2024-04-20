<script lang="ts">
	import Launch from '$lib/components/Launch.svelte';

	export let data;
</script>

{#if data && data?.launch && data?.rocket && data?.launchpad && data?.payload}
	<div class="Single-Wrapper">
		<Launch
			bind:launch={data.launch}
			bind:rocket={data.rocket}
			bind:launchpad={data.launchpad}
			bind:payload={data.payload}
			bind:crew={data.crew}
			heading={data.launch.name}
		/>
	</div>
{:else}
	no next launch found
{/if}
