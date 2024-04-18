import type {
	CrewResponse,
	LaunchPadsResponse,
	LaunchResponse,
	PayloadsResponse,
	RocketsResponse
} from '$lib/types/spacex/apiResponse';
import { getLatestLaunch, getNextLaunch } from '$lib/helpers/apis/SpaceX/launches';
import { getRocketsById } from '$lib/helpers/apis/SpaceX/rockets';
import { getPayloadsById } from '$lib/helpers/apis/SpaceX/payloads';
import { getLaunchPadsById } from '$lib/helpers/apis/SpaceX/launchpads';
import { getCrewById } from '$lib/helpers/apis/SpaceX/crew';
import { getSpaceX } from '$lib/helpers/apis/SpaceX/company';
async function getLaunch(launch: LaunchResponse | undefined) {
	let rocket: RocketsResponse | undefined;
	let launchpad: LaunchPadsResponse | undefined;
	let payload: PayloadsResponse | undefined;
	const crew: CrewResponse[] = [];
	if (launch) {
		[rocket, launchpad, payload] = await Promise.all([
			launch?.rocket && getRocketsById(launch.rocket),
			launch?.launchpad && getLaunchPadsById(launch.launchpad),
			launch?.payloads && getPayloadsById(launch.payloads[0])
		]);
		if (launch?.crew) {
			for (const crew_local of launch.crew) {
				if (crew_local?.crew) {
					const temp = await getCrewById(crew_local.crew);
					if (temp) crew.push(temp);
				}
			}
		}
	}
	return { rocket, launchpad, payload, crew };
}

export async function load() {
	const [nextLaunch, prevLaunch] = await Promise.all([getNextLaunch(), getLatestLaunch()]);
	const [next, prev, spaceX] = await Promise.all([
		getLaunch(nextLaunch),
		getLaunch(prevLaunch),
		getSpaceX()
	]);

	return {
		next: { nextLaunch, ...next },
		prev: { prevLaunch, ...prev },
		spaceX
	};
}
