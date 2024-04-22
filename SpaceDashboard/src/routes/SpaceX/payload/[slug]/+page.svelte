<script lang="ts">
	import Loading from '$lib/components/Loading.svelte';
	import Payload from '$lib/components/Payload.svelte';
	import NothingFound from '$lib/components/NothingFound.svelte';

	export let data;
</script>

{#if data?.payload}
	<div class="Single-Wrapper">
		<Payload bind:payload={data.payload} bind:launch={data.launch} />
	</div>
{:else}
	<NothingFound />
{/if}
