import { endpoints } from '$lib/helpers/apis/SpaceX/constants';
import type { HistoryResponse } from '$lib/types/spacex/apiResponse';
import { getAllOfEntity, getEntityById } from '$lib/helpers/apis/SpaceX/BaseQueries';

export async function getHistoryById(id: string) {
	return await getEntityById<HistoryResponse>(id, endpoints.history);
}
export async function getAllHistory() {
	return await getAllOfEntity<HistoryResponse>(endpoints.history);
}
