import { BASE_SPACEX, endpoints } from '$lib/helpers/apis/SpaceX/constants';
import type { RocketsResponse } from '$lib/types/spacex/apiResponse';

export async function getRocketById(id: string) {
	const url = BASE_SPACEX + endpoints.rockets + '/' + id;
	try {
		const response = await fetch(url, { method: 'get', mode: 'cors' });
		return (await response.json()) as RocketsResponse;
	} catch (e) {
		//TODO: ERROR HANDLING
		console.error(e);
	}
}
