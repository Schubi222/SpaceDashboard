<script lang="ts">
	import { outestError } from '$lib/stores/ErrorStore';
	import Error from '$lib/components/Error.svelte';
	import { outestLoading } from '$lib/stores/LoadingStore';
	import Loading from '$lib/components/Loading.svelte';
	import '$lib/styles/index.css'
</script>

{#if $outestError}<Error />
{:else if $outestLoading}<Loading />
{:else}
	<div class="content">
		<slot />
	</div>
{/if}
