<script lang="ts">
	import Loading from '$lib/components/Loading.svelte';
	import Company from '$lib/components/Company.svelte';

	export let data;
</script>

{#if data?.spaceX}
	<div class="Single-Wrapper">
		<Company bind:spaceX={data.spaceX} />
	</div>
{:else}
	<Loading />
{/if}
