<script lang="ts">
	import type { CompanyResponse } from '$lib/types/spacex/apiResponse';
	import { spaceX_logo } from '$lib/assets';
	import BackBtn from '$lib/components/BackBtn.svelte';
	export let spaceX: CompanyResponse;
	export let back_btn = true;
</script>

<div class="Wrapper">
	{#if back_btn}
		<BackBtn />
	{/if}
	<img src={spaceX_logo} alt="Space X" class="icon noSelect" />

	<div class="info desc">{spaceX.summary}</div>
	<div class="board pair">
		<div class="label">Board</div>
		<div class="info column">
			<span class="pipe">CEO: {spaceX.ceo}</span>
			<span class="pipe">CTO: {spaceX.cto}</span>
			<span class="pipe">COO: {spaceX.coo}</span>
		</div>
	</div>
	<div class="year pair">
		<div class="label">Founded</div>
		<div class="info column">
			<span class="center"> Founded by {spaceX.founder}</span>
			<span class="center"> in {spaceX.founded}</span>
		</div>
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
			<div class="info column center">
				<span>{spaceX.headquarters.address},</span>
				<span>{spaceX.headquarters.city}</span>
				<span>{spaceX.headquarters.state}</span>
			</div>
		</div>
	</div>
	<!--	TODO: STYLING-->
	<div class="links">
		<a href={spaceX.links.flickr} target="_blank">Official SpaceX Photos</a>
		<a href={spaceX.links.twitter} target="_blank">Official SpaceX Twitter</a>
		<a href={spaceX.links.website} target="_blank">Official SpaceX Website</a>
	</div>
</div>

<style lang="scss">
	.Wrapper {
		width: 100%;
		min-width: 0;
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
	.info > .pipe:after {
		content: ' | ';
	}
	.info > .pipe:last-of-type:after {
		content: '';
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
				color: var(--red-5);
			}
		}
	}
	.pair {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (max-width: 1100px) {
		.Wrapper {
			grid-template-areas:
				'img img'
				'desc desc'
				'Board Year'
				'Facts Facts'
				'Links Links';
		}
		.facts {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-gap: 10px;
		}
		.column {
			display: flex;
			flex-direction: column;
		}
		.info > .pipe:after {
			content: '';
		}
		.center {
			text-align: center;
		}
		.icon {
			width: 300px;
		}
	}
</style>
