import { endpoints } from '$lib/helpers/apis/SpaceX/constants';
import type { StarLinkResponse } from '$lib/types/spacex/apiResponse';
import { getAllOfEntity, getEntityById } from '$lib/helpers/apis/SpaceX/BaseQueries';

export async function getStarLinkById(id: string) {
	return await getEntityById<StarLinkResponse>(id, endpoints.starlink);
}
export async function getAllStarLink() {
	return await getAllOfEntity<StarLinkResponse>(endpoints.starlink);
}
