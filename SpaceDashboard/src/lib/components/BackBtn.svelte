<script lang="ts">
</script>

<div class="btn-wrapper noSelect" on:click={() => history.back()}>&larr;</div>

<style lang="scss">
	.btn-wrapper {
		padding: 7px;
		background: var(--grey-8);
		color: var(--grey-1);
		font-size: 2.2rem;
		width: 40px;
		height: 40px;
		border-radius: 100%;
		text-align: center;
		cursor: pointer;
		margin-bottom: 15px;
		transition: 0.4s;
		display: flex;
		align-items: center;
		justify-content: center;
		&:hover {
			background: var(--grey-6);
			scale: 1.2;
			color: black;
		}
	}
</style>
