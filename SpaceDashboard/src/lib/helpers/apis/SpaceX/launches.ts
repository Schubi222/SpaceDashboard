import { BASE_SPACEX, endpoints } from '$lib/helpers/apis/SpaceX/constants';

export async function getNextLaunch() {
	const url = BASE_SPACEX + endpoints.launches + '/next';
	try {
		let response = await fetch(url, { method: 'get', mode: 'cors' });
		response = await response.json();
	} catch (e) {
		console.error(e);
	}
}
