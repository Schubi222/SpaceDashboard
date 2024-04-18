<script lang="ts">
	import type { CompanyResponse } from '$lib/types/spacex/apiResponse';
	import { spaceX_logo } from '$lib/assets';
	export let spaceX: CompanyResponse;
</script>

<div class="Wrapper">
	<img src={spaceX_logo} alt="Space X" class="icon" />

	<div class="info desc">{spaceX.summary}</div>
	<div class="board pair">
		<div class="label">Board</div>
		<div class="info">CEO: {spaceX.ceo} | CTO: {spaceX.cto} | COO: {spaceX.coo}</div>
	</div>
	<div class="year pair">
		<div class="label">Founded</div>
		<div class="info">Founded by {spaceX.founder} in {spaceX.founded}</div>
	</div>
	<div class="facts">
		<div class="pair">
			<div class="label">Employees</div>
			<div class="info">{spaceX.employees}</div>
		</div>
		<div class="pair">
			<div class="label">Valuation in billion</div>
			<div class="info">{spaceX.valuation / 1000000000}bn $</div>
		</div>
		<div class="pair">
			<div class="label">Sites (Launch|Test)</div>
			<div class="info">{spaceX.launch_sites} | {spaceX.test_sites}</div>
		</div>
		<div class="pair">
			<div class="label">Headquarter</div>
			<div class="info">
				{spaceX.headquarters.address},
				{spaceX.headquarters.city}
				{spaceX.headquarters.state}
			</div>
		</div>
	</div>
	<!--	TODO: STYLING-->
	<div class="links">
		<a href={spaceX.links.flickr}>Official SpaceX Photos</a>
		<a href={spaceX.links.twitter}>Official SpaceX Twitter</a>
		<a href={spaceX.links.website}>Official SpaceX Website</a>
	</div>
</div>

<style lang="scss">
	.Wrapper {
		width: 100%;
		min-width: unset;
		max-width: 1280px;
		margin-inline: auto;
		display: grid;
		grid-template-areas:
			'img img img img'
			'desc desc desc desc'
			'Board Board Year Year'
			'Facts Facts Facts Facts'
			'Links Links Links Links';
		grid-row-gap: 30px;
		border-radius: 0 0 15px 15px;
	}
	.icon {
		width: 500px;
		margin-inline: auto;
		grid-area: img;
	}
	.desc {
		grid-area: desc;
	}
	.board {
		grid-area: Board;
	}
	.year {
		grid-area: Year;
	}
	.facts {
		grid-area: Facts;
		display: flex;
		justify-content: space-around;
	}
	.links {
		grid-area: Links;
		display: flex;
		justify-content: center;
		gap: 50px;
		& > a {
			text-decoration: none;
			color: var(--red-3);
			font-size: 1.3rem;
			font-weight: bold;
			cursor: pointer;
			transition: 0.4s;
			&:hover {
				scale: 1.2;
			}
		}
	}
	.pair {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
