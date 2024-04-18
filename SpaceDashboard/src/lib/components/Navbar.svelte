<script lang="ts">
	import { page } from '$app/stores';
	let active_page = 0;
	$: if ($page.url.href) {
		if ($page.url.href.includes('launches')) active_page = 1;
		else if ($page.url.href.includes('rocket')) active_page = 2;
		else if ($page.url.href.includes('history')) active_page = 3;
		else active_page = 0;
	}
</script>

<nav class="Navbar">
	<a href="/SpaceX" class="Navbar__link" class:acitve={!active_page}>Dashboard</a>
	<a href="/SpaceX/launches" class="Navbar__link" class:acitve={active_page === 1}>Launches</a>
	<a href="/SpaceX/rocket" class="Navbar__link" class:acitve={active_page === 2}>Rockets</a>
	<a href="/SpaceX/history" class="Navbar__link" class:acitve={active_page === 3}>History</a>
</nav>

<style lang="scss">
	.Navbar {
		display: flex;
		flex-direction: column;
		background: white;
		width: 200px;
		position: fixed;
		top: 50vh;
		gap: 5px;
		padding: 30px 0;

		& > a {
			color: var(--blue-2);
			font-size: 2rem;
			text-decoration: none;
			padding: 5px 0;
			cursor: pointer;
			transition: 0.4s;
			&:hover {
				color: var(--blue-5);
			}
		}
	}
</style>
