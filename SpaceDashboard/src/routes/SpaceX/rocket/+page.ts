import { getAllRockets } from '$lib/helpers/apis/SpaceX/rockets';
import { getSpaceX } from '$lib/helpers/apis/SpaceX/company';

export async function load() {
	const company = await getSpaceX();
	const rockets = await getAllRockets();

	return {
		rockets,
		company
	};
}
