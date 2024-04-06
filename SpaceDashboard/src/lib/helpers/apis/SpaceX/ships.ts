import { endpoints } from '$lib/helpers/apis/SpaceX/constants';
import type { ShipsResponse } from '$lib/types/spacex/apiResponse';
import { getAllOfEntity, getEntityById } from '$lib/helpers/apis/SpaceX/BaseQueries';

export async function getShipsById(id: string) {
	return await getEntityById<ShipsResponse>(id, endpoints.ships);
}
export async function getAllShips() {
	return await getAllOfEntity<ShipsResponse>(endpoints.ships);
}
