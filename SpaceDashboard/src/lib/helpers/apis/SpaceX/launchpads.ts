import { endpoints } from '$lib/helpers/apis/SpaceX/constants';
import type { LaunchPadsResponse } from '$lib/types/spacex/apiResponse';
import { getAllOfEntity, getEntityById } from '$lib/helpers/apis/SpaceX/BaseQueries';

export async function getLaunchPadsById(id: string) {
	return await getEntityById<LaunchPadsResponse>(id, endpoints.launchpads);
}
export async function getAllLaunchPads() {
	return await getAllOfEntity<LaunchPadsResponse>(endpoints.launchpads);
}
