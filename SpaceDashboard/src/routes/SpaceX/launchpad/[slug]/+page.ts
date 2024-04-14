import { getLaunchPadsById } from '$lib/helpers/apis/SpaceX/launchpads';
import type { RocketsResponse } from '$lib/types/spacex/apiResponse';
import { getRocketsById } from '$lib/helpers/apis/SpaceX/rockets';

export async function load({ params }: { params: { slug: string } }) {
	const slug = params.slug;
	const launchpad = await getLaunchPadsById(slug);
	const rockets: RocketsResponse[] = [];
	if (launchpad && launchpad?.rockets?.length > 0) {
		for (const rocket of launchpad.rockets) {
			const rocket_get = await getRocketsById(rocket);
			if (rocket_get) rockets.push(rocket_get);
		}
	}

	return {
		launchpad,
		rockets
	};
}
