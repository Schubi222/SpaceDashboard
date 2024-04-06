import { endpoints } from '$lib/helpers/apis/SpaceX/constants';
import type { CapsuleResponse } from '$lib/types/spacex/apiResponse';
import { getAllOfEntity, getEntityById } from '$lib/helpers/apis/SpaceX/BaseQueries';

export async function getCapsulesById(id: string) {
	return await getEntityById<CapsuleResponse>(id, endpoints.capsule);
}
export async function getAllCapsules() {
	return await getAllOfEntity<CapsuleResponse>(endpoints.capsule);
}
