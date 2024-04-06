import { BASE_SPACEX, endpoints } from '$lib/helpers/apis/SpaceX/constants';

export async function getEntityById<Type>(
	id: string,
	endpoint: endpoints
): Promise<Type | undefined> {
	const url = BASE_SPACEX + endpoint + '/' + id;
	try {
		const response = await fetch(url, { method: 'get', mode: 'cors' });
		const data = (await response.json()) as Type;
		console.log('getEntityById of type:', typeof data, '\nWith Data:', data);
		return data;
	} catch (e) {
		//TODO: ERROR HANDLING
		console.error(e);
	}
}
export async function getAllOfEntity<Type>(endpoint: endpoints): Promise<Type[] | undefined> {
	const url = BASE_SPACEX + endpoint;
	try {
		const response = await fetch(url, { method: 'get', mode: 'cors' });
		const data = (await response.json()) as Type[];
		console.log('getAllOfEntity of type:', typeof data, '\nWith Data:', data);
		return data;
	} catch (e) {
		//TODO: ERROR HANDLING
		console.error(e);
	}
}
