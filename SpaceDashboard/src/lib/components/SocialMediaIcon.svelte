<script lang="ts">
	export let active_icon;
	export let inactive_icon;
	export let link: string;
	export let title: string;
</script>

{#if link}
	<a href={link} class="link">
		<img src={active_icon} alt={title} class="link__img" />
	</a>
{:else}
	<div class="no_link">
		<img src={inactive_icon} alt={title} class="link__img" />
	</div>
{/if}

<style lang="scss">
	.link {
		cursor: pointer;
		&__img {
			width: 40px;
			height: 40px;
			border-radius: 100%;
			padding: 5px;
		}
	}
</style>
