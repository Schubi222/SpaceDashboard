import { getSpaceX } from '$lib/helpers/apis/SpaceX/company';

export async function load() {
	const spaceX = await getSpaceX();
	return {
		spaceX
	};
}
