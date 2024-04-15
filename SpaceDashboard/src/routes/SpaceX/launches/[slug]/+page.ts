import { getPayloadsById } from '$lib/helpers/apis/SpaceX/payloads';
import type {
	LaunchPadsResponse,
	PayloadsResponse,
	RocketsResponse
} from '$lib/types/spacex/apiResponse';
import { getLaunchesById } from '$lib/helpers/apis/SpaceX/launches';
import { getRocketsById } from '$lib/helpers/apis/SpaceX/rockets';
import { getLaunchPadsById } from '$lib/helpers/apis/SpaceX/launchpads';

export async function load({ params }: { params: { slug: string } }) {
	const slug = params.slug;
	const launch = await getLaunchesById(slug);
	let rocket: RocketsResponse | undefined;
	let launchpad: LaunchPadsResponse | undefined;
	let payload: PayloadsResponse | undefined;
	// TODO: THINK ABOUT PROMISE
	if (launch) {
		if (launch.rocket) rocket = await getRocketsById(launch.rocket);
		if (launch?.launchpad) launchpad = await getLaunchPadsById(launch.launchpad);
		if (launch?.payloads?.length) payload = await getPayloadsById(launch.payloads[0]);
	}
	return {
		launch,
		rocket,
		launchpad,
		payload
	};
}
