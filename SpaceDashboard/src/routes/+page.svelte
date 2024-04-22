<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => goto('/SpaceX'));
</script>

<svelte:head>
	<title>SpaceX Dashboard</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
