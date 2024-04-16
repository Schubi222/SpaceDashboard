import { getPayloadsById } from '$lib/helpers/apis/SpaceX/payloads';
import type {
	CrewResponse,
	LaunchPadsResponse,
	PayloadsResponse,
	RocketsResponse
} from '$lib/types/spacex/apiResponse';
import { getLaunchesById } from '$lib/helpers/apis/SpaceX/launches';
import { getRocketsById } from '$lib/helpers/apis/SpaceX/rockets';
import { getLaunchPadsById } from '$lib/helpers/apis/SpaceX/launchpads';
import { getCrewById } from '$lib/helpers/apis/SpaceX/crew';

export async function load({ params }: { params: { slug: string } }) {
	const slug = params.slug;
	const launch = await getLaunchesById(slug);
	let rocket: RocketsResponse | undefined;
	let launchpad: LaunchPadsResponse | undefined;
	let payload: PayloadsResponse | undefined;
	const crew = [] as CrewResponse[];
	// TODO: THINK ABOUT PROMISE
	if (launch) {
		if (launch.rocket) rocket = await getRocketsById(launch.rocket);
		if (launch?.launchpad) launchpad = await getLaunchPadsById(launch.launchpad);
		if (launch?.payloads?.length) payload = await getPayloadsById(launch.payloads[0]);
		if (launch?.crew) {
			for (const crew_local of launch.crew) {
				if (crew_local?.crew) {
					const temp = await getCrewById(crew_local.crew);
					if (temp) crew.push(temp);
				}
			}
		}
	}
	return {
		launch,
		rocket,
		launchpad,
		payload,
		crew
	};
}
