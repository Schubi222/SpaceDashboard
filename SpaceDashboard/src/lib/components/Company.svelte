<script lang="ts">
	import type { CompanyResponse } from '$lib/types/spacex/apiResponse';
	import SocialMediaIcon from '$lib/components/SocialMediaIcon.svelte';

	export let spaceX: CompanyResponse;
</script>

<div class="Wrapper">
	<div class="heading">{spaceX.name}</div>
	<div class="divider">
		<div class="left-side">
			<div class="info">{spaceX.summary}</div>
			<div class="label">Board</div>
			<div class="info">CEO: {spaceX.ceo} | CTO: {spaceX.cto} | COO: {spaceX.coo}</div>
			<div class="label">Founded</div>
			<div class="info">Founded by {spaceX.founder} in {spaceX.founded}</div>
			<div class="label">Sites (Launch|Test)</div>
			<div class="info">{spaceX.launch_sites} | {spaceX.test_sites}</div>
			<div class="label">Employees</div>
			<div class="info">{spaceX.employees}</div>
			<div class="label">Valuation in billion</div>
			<div class="info">{spaceX.valuation / 1000000000}bn $</div>
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
