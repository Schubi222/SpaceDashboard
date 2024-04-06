import { endpoints } from '$lib/helpers/apis/SpaceX/constants';
import type { CoresResponse } from '$lib/types/spacex/apiResponse';
import { getAllOfEntity, getEntityById } from '$lib/helpers/apis/SpaceX/BaseQueries';

export async function getCoresById(id: string) {
	return await getEntityById<CoresResponse>(id, endpoints.cores);
}
export async function getAllCores() {
	return await getAllOfEntity<CoresResponse>(endpoints.cores);
}
