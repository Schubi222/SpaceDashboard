import type { ExtendedLaunchResponse } from '$lib/types/spacex/apiResponse';
import { getPaginatedLaunches } from '$lib/helpers/apis/SpaceX/launches';

export async function load() {
	const data = await getPaginatedLaunches(10, 0);
	const launches = data.docs as ExtendedLaunchResponse[];
	const docs_count = data.totalDocs;
	return {
		launches: launches,
		docs_count: docs_count
	};
}
