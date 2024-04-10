<script lang="ts">
	import type {
		LaunchPadsResponse,
		LaunchResponse,
		RocketsResponse
	} from '$lib/types/spacex/apiResponse';
	import { onMount } from 'svelte';
	import '../styles/launch.scss';
	import {
		reddit,
		reddit_inactive,
		wikipedia,
		wikipedia_inactive,
		youtube,
		youtube_inactive
	} from '$lib/assets';
	import SocialMediaIcon from '$lib/components/SocialMediaIcon.svelte';
	export let launch: LaunchResponse;
	export let rocket: RocketsResponse;
	export let launchpad: LaunchPadsResponse;
	export let heading: string;
	onMount(() => {
		console.log(launch?.links);
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
		<SocialMediaIcon
			active_icon={wikipedia}
			inactive_icon={wikipedia_inactive}
			link={launch?.links?.wikipedia}
			title="Wikipedia"
		/>
		<SocialMediaIcon
			active_icon={reddit}
			inactive_icon={reddit_inactive}
			link={launch?.links?.reddit?.launch}
			title="Reddit"
		/>
		<SocialMediaIcon
			active_icon={youtube}
			inactive_icon={youtube_inactive}
			link={launch?.links?.webcast}
			title="YouTube"
		/>
	</div>
</div>

<style lang="scss">
	.Wrapper {
		padding: 10px;
		background: rgba(214, 212, 212, 0.31);
		color: var(--grey-8);
		max-width: 800px;
		border-radius: 15px;
		font-size: 20px;

		.label {
			color: var(--grey-5);
		}
		.links {
			display: flex;
		}
	}
</style>
