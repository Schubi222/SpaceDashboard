import type { CrewResponse } from '$lib/types/spacex/apiResponse';
import { getLaunchesById } from '$lib/helpers/apis/SpaceX/launches';
import { getCrewById } from '$lib/helpers/apis/SpaceX/crew';

export async function load({ params }: { params: { slug: string } }) {
	const slug = params.slug;
	const launch = await getLaunchesById(slug);
	const crew: CrewResponse[] = [];
	if (launch && launch?.crew?.length > 0) {
		for (const crew_local of launch.crew) {
			if (!crew_local.crew) continue;
			const crew_get = await getCrewById(crew_local.crew);
			if (crew_get) crew.push(crew_get);
		}
	}

	return {
		crew,
		launch
	};
}
