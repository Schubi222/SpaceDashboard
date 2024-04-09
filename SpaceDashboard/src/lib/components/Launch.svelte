<script lang="ts">
	import type {
		LaunchPadsResponse,
		LaunchResponse,
		RocketsResponse
	} from '$lib/types/spacex/apiResponse';
	import { onMount } from 'svelte';
	import '../styles/launch.scss';
	import { reddit, reddit_inactive, wikipedia, wikipedia_inactive, youtube, youtube_inactive } from '$lib/assets';
	export let launch: LaunchResponse;
	export let rocket: RocketsResponse;
	export let launchpad: LaunchPadsResponse;
	export let heading: string;
	onMount(() => {
		console.log(launch, rocket);
	});
</script>

<div class="Wrapper">
	<div class="Heading">{heading}</div>
	<div class="label">Mission</div>
	<div class="mission info">{launch.name}</div>
	<div class="label">Rocket</div>
	<div class="rocket info">{rocket.name}</div>
	{#if launch?.links?.patch?.small}
		<div class="label">Mission Patch</div>
		<img class="logo" src={launch?.links?.patch?.small} alt="Mission" />
	{/if}
	<div class="label">Date</div>
	<div class="date info">{launch.date_utc}</div>
	<div class="label">Launchpad</div>
	<div class="launchpad info">{launchpad?.name}</div>
	<div class="label">Details</div>
	<div class="details info">{launch.details ?? 'No details about this launch were provided.'}</div>
	<div class="links">
		<img src={launch.links.wikipedia ? wikipedia : wikipedia_inactive} alt="Wikipedia" class="links__img" />
		<img src={launch.links.reddit ? reddit : reddit_inactive} alt="Reddit" class="links__img" />
		<img src={launch.links.youtube_id ? youtube : youtube_inactive} alt="Youtube" class="links__img" />
	</div>
</div>
