import { endpoints } from '$lib/helpers/apis/SpaceX/constants';
import type { RoadsterResponse } from '$lib/types/spacex/apiResponse';
import { getAllOfEntity } from '$lib/helpers/apis/SpaceX/BaseQueries';

export async function getAllRoadster() {
	return await getAllOfEntity<RoadsterResponse>(endpoints.roadster);
}
