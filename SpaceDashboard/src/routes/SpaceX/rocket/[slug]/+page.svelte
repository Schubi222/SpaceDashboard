<script lang="ts">
	import Loading from '$lib/components/Loading.svelte';
	import Rocket from '$lib/components/Rocket.svelte';

	export let data;
</script>

{#if data?.rocket && data?.company}
	<Rocket bind:rocket={data.rocket} bind:company={data.company} />
{:else}
	<Loading />
{/if}
