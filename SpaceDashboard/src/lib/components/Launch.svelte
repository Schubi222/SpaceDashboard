<script lang="ts">
	import type {
		CrewResponse,
		LaunchPadsResponse,
		LaunchResponse,
		PayloadsResponse,
		RocketsResponse
	} from '$lib/types/spacex/apiResponse';
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
	import moment from 'moment';
	import CrewCount from '$lib/components/CrewCount.svelte';
	import BackBtn from '$lib/components/BackBtn.svelte';

	export let launch: LaunchResponse;
	export let rocket: RocketsResponse;
	export let launchpad: LaunchPadsResponse;
	export let payload: PayloadsResponse;
	export let crew: CrewResponse[] | undefined;
	export let heading: string;
	export let back_btn = true;
</script>

<div class="Wrapper">
	{#if back_btn}
		<BackBtn />
	{/if}
	<div class="heading">{heading}</div>
	<div class="divider">
		<div class="right-side">
			<div class="label">Mission</div>
			<div class="mission info">{launch.name}</div>
			<div class="label">Rocket</div>
			<a class="rocket info clickable" href={'/SpaceX/rocket/' + rocket.id}>
				{rocket.name}
			</a>
			<div class="label">Date</div>
			<div class="date info">
				{moment.utc(launch.date_unix * 1000).format('DD/MM/YYYY, HH:mm:ss')}
			</div>
			<div class="label">Launchpad</div>
			<a class="launchpad info clickable" href={'/SpaceX/launchpad/' + launchpad.id}>
				{launchpad?.name}
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
				<img class="logo noSelect" src={launch?.links?.patch?.small} alt="Mission" />
			{:else}
				<div class="label">Rocket Logo</div>
				<img class="logo noSelect" src={rocket.flickr_images} alt="Mission" />
			{/if}
			<div class="label">{payload?.dragon?.capsule ? 'Crew' : 'Payload'}</div>
			{#if payload?.dragon?.capsule && crew}
				<CrewCount bind:crew />
				<a class="payload info clickable" href={'/SpaceX/crew/' + launch.id}> Crew details </a>
			{:else}
				<a class="payload info clickable" href={'/SpaceX/payload/' + payload.id}>
					{payload.name}
				</a>
			{/if}
		</div>
	</div>
</div>
