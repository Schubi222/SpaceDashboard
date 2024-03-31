<script lang="ts">
	import { onMount } from 'svelte';
	import { getNextLaunch } from '$lib/helpers/apis/SpaceX/launches';

	console.log('a');
	onMount(() => getNextLaunch());
</script>

<div>HALLO FROM SPACEX</div>
