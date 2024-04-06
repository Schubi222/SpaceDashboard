import { BASE_SPACEX, endpoints } from '$lib/helpers/apis/SpaceX/constants';
import type { LaunchResponse } from '$lib/types/spacex/apiResponse';
import { getAllOfEntity, getEntityById } from '$lib/helpers/apis/SpaceX/BaseQueries';

export async function getNextLaunch() {
	const url = BASE_SPACEX + endpoints.launches + '/next';
	try {
		const response = await fetch(url, { method: 'get', mode: 'cors' });
		return (await response.json()) as LaunchResponse;
	} catch (e) {
		//TODO: ERROR HANDLING
		console.error(e);
	}
}
export async function getLaunchesById(id: string) {
	return await getEntityById<LaunchResponse>(id, endpoints.launches);
}
export async function getAllLaunches() {
	return await getAllOfEntity<LaunchResponse>(endpoints.launches);
}
