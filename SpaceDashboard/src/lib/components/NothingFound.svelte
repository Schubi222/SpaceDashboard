<script>
	import BackBtn from '$lib/components/BackBtn.svelte';
</script>

<div class="full-size">
	<div class="error-wrapper">
		<div class="heading">Nothing found!</div>
		<div class="info">It seams like there is no data to this id.</div>
		<div class="info back">Get Back</div>
		<BackBtn />
	</div>
</div>

<style lang="scss">
	.full-size {
		height: 100vh;
		display: flex;
		justify-content: center;
	}
	.error-wrapper {
		display: flex;
		flex-direction: column;
		background: white;
		width: 300px;
		height: 300px;
		border-radius: 15px;
		padding: 30px;
		align-items: center;
		font-weight: bold;
		text-align: center;
		margin: auto;
		.heading {
			padding-bottom: 70px;
		}
		.back {
			padding: 20px;
		}
	}
</style>
