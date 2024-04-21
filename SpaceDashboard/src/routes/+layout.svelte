<script lang="ts">
	import { outestError } from '$lib/stores/ErrorStore';
	import Error from '$lib/components/Error.svelte';
	import { outestLoading } from '$lib/stores/LoadingStore';
	import Loading from '$lib/components/Loading.svelte';
	import '$lib/styles/index.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

{#if $outestError}<Error />
{:else if $outestLoading}<Loading />
{:else}
	<Navbar />
	<div class="content">
		<slot />
	</div>
{/if}

<style lang="scss">
	.content {
		box-sizing: border-box;
		width: 100%;
		min-height: 100vh;
	}
</style>
