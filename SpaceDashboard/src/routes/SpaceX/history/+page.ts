import { getAllHistory } from '$lib/helpers/apis/SpaceX/history';

export async function load() {
	const history = await getAllHistory();

	return {
		history
	};
}
