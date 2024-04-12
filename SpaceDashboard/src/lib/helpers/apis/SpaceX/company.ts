import { BASE_SPACEX, endpoints } from '$lib/helpers/apis/SpaceX/constants';
import type { CompanyResponse } from '$lib/types/spacex/apiResponse';
import { getAllOfEntity } from '$lib/helpers/apis/SpaceX/BaseQueries';

export async function getSpaceX() {
	const url = BASE_SPACEX + endpoints.company;
	try {
		const response = await fetch(url, { method: 'get', mode: 'cors' });
		const data = (await response.json()) as CompanyResponse;
		console.log('getSpaceX: With Data:', data);
		return data;
	} catch (e) {
		//TODO: ERROR HANDLING
		console.error(e);
	}
}
