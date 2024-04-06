import { endpoints } from '$lib/helpers/apis/SpaceX/constants';
import type { PayloadsResponse } from '$lib/types/spacex/apiResponse';
import { getAllOfEntity, getEntityById } from '$lib/helpers/apis/SpaceX/BaseQueries';

export async function getPayloadsById(id: string) {
	return await getEntityById<PayloadsResponse>(id, endpoints.payloads);
}
export async function getAllPayloads() {
	return await getAllOfEntity<PayloadsResponse>(endpoints.payloads);
}
