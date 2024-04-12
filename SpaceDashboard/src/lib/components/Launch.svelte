<script lang="ts">
	import type {
		LaunchPadsResponse,
		LaunchResponse,
		PayloadsResponse,
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
	import { getAllRockets } from '$lib/helpers/apis/SpaceX/rockets';
	import moment from 'moment';

	export let launch: LaunchResponse;
	export let rocket: RocketsResponse;
	export let launchpad: LaunchPadsResponse;
	export let payload: PayloadsResponse;
	export let heading: string;

	onMount(async () => {
		console.log(await getAllRockets());
	});
</script>

<div class="Wrapper">
	<div class="heading">{heading}</div>
	<div class="divider">
		<div class="right-side">
			<div class="label">Mission</div>
			<div class="mission info">{launch.name}</div>
			<div class="label">Rocket</div>
			<a class="rocket info clickable" href={'rocket/' + rocket.id}>
				{rocket.name}<span>&rarr;</span>
			</a>
			<div class="label">Date</div>
			<div class="date info">
				{moment.utc(launch.date_unix * 1000).format('DD/MM/YYYY, HH:mm:ss')}
			</div>
			<div class="label">Launchpad</div>
			<a class="launchpad info clickable" href={'launchpad/' + launchpad.id}>
				{launchpad?.name}<span>&rarr;</span>
			</a>
			<div class="label">Details</div>
			<div class="details info">
				{launch.details ?? 'No details about this launch were provided.'}
			</div>
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
		<div class="left-side">
			{#if launch?.links?.patch?.small}
				<div class="label">Mission Patch</div>
				<img class="logo" src={launch?.links?.patch?.small} alt="Mission" />
			{:else}
				<div class="label">Rocket Logo</div>
				<img class="logo" src={rocket.flickr_images} alt="Mission" />
			{/if}
			<div class="label">Payload</div>
			<a class="payload info clickable" href={'payload/' + payload.id}>
				{payload.name} <span>&rarr;</span>
			</a>
		</div>
	</div>
</div>

<style lang="scss">
	.Wrapper {
		padding: 30px;
		background: rgba(214, 212, 212, 0.31);
		color: var(--grey-8);
		max-width: 550px;
		border-radius: 15px;
		font-size: 20px;
		.heading {
			padding-bottom: 10px;
			font-size: 24px;
		}
		.divider {
			display: flex;
		}

		.label {
			padding-top: 8px;
			color: var(--grey-4);
			font-size: 18px;
		}
		.links {
			display: flex;
			padding-top: 10px;
		}
		.logo {
			width: 200px;
			height: 200px;
			border-radius: 15px;
			margin: 5px;
		}
		.clickable {
			color: var(--red-3);
			cursor: pointer;
			transition: 0.4s;
			&:hover {
				font-size: 32px;
			}
			& > span {
				padding-left: 5px;
			}
		}
	}
</style>
