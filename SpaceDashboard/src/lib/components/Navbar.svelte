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
	<div class="links">
		<a href="/SpaceX" class="Navbar__link" class:acitve={!active_page}>Dashboard</a>
		<a href="/SpaceX/launches" class="Navbar__link" class:acitve={active_page === 1}>Launches</a>
		<a href="/SpaceX/rocket" class="Navbar__link" class:acitve={active_page === 2}>Rockets</a>
		<a href="/SpaceX/history" class="Navbar__link" class:acitve={active_page === 3}>History</a>
	</div>
	<div class="arrow">&rAarr;</div>
</nav>

<style lang="scss">
	.Navbar {
		display: flex;
		flex-direction: row;
		background: white;
		width: 180px;
		position: fixed;
		top: calc(50vh - 130px);
		gap: 5px;
		padding: 30px 10px;
		left: -156px;
		transition: ease-out 0.4s;
		box-sizing: border-box;
		border-bottom-right-radius: 15px;
		border-top-right-radius: 15px;
		z-index: 100;
		&:hover {
			left: 0;
			box-shadow: 1px 0 3px 1px var(--grey-3);
		}
		&:hover > .arrow {
			opacity: 0;
		}
		& > .links {
			display: flex;
			flex-direction: column;
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
		.arrow {
			//height: 200px;
			margin: auto 0;
			opacity: 1;
			font-size: 1.8rem;
			transition: 0.2s ease-out;
		}
	}
</style>
