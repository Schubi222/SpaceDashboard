import { endpoints } from '$lib/helpers/apis/SpaceX/constants';
import type { RocketsResponse } from '$lib/types/spacex/apiResponse';
import { getAllOfEntity, getEntityById } from '$lib/helpers/apis/SpaceX/BaseQueries';

export async function getRocketsById(id: string) {
	return await getEntityById<RocketsResponse>(id, endpoints.rockets);
}
export async function getAllRockets() {
	return await getAllOfEntity<RocketsResponse>(endpoints.rockets);
}
