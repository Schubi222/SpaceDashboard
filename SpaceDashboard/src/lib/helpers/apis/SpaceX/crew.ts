import { endpoints } from '$lib/helpers/apis/SpaceX/constants';
import type { CrewResponse } from '$lib/types/spacex/apiResponse';
import { getAllOfEntity, getEntityById } from '$lib/helpers/apis/SpaceX/BaseQueries';

export async function getCrewById(id: string) {
	return await getEntityById<CrewResponse>(id, endpoints.crew);
}
export async function getAllCrew() {
	return await getAllOfEntity<CrewResponse>(endpoints.crew);
}
