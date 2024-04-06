import { endpoints } from '$lib/helpers/apis/SpaceX/constants';
import type { DragonsResponse } from '$lib/types/spacex/apiResponse';
import { getAllOfEntity, getEntityById } from '$lib/helpers/apis/SpaceX/BaseQueries';

export async function getDragonsById(id: string) {
	return await getEntityById<DragonsResponse>(id, endpoints.dragons);
}
export async function getAllDragons() {
	return await getAllOfEntity<DragonsResponse>(endpoints.dragons);
}
