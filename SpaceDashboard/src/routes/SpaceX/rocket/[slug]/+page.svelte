<script lang="ts">
	import Loading from '$lib/components/Loading.svelte';
	import Rocket from '$lib/components/Rocket.svelte';
	import NothingFound from '$lib/components/NothingFound.svelte';

	export let data;
</script>

{#if data?.rocket && data?.company}
	<div class="Single-Wrapper">
		<Rocket bind:rocket={data.rocket} bind:company={data.company} />
	</div>
{:else}
	<NothingFound />
{/if}
