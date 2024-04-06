import { endpoints } from '$lib/helpers/apis/SpaceX/constants';
import type { LandPadsResponse } from '$lib/types/spacex/apiResponse';
import { getAllOfEntity, getEntityById } from '$lib/helpers/apis/SpaceX/BaseQueries';

export async function getLandPadsById(id: string) {
	return await getEntityById<LandPadsResponse>(id, endpoints.landpads);
}
export async function getAllLandPads() {
	return await getAllOfEntity<LandPadsResponse>(endpoints.landpads);
}
