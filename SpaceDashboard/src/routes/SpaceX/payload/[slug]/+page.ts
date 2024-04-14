import { getPayloadsById } from '$lib/helpers/apis/SpaceX/payloads';
import type { LaunchResponse } from '$lib/types/spacex/apiResponse';
import { getLaunchesById } from '$lib/helpers/apis/SpaceX/launches';

export async function load({ params }: { params: { slug: string } }) {
	const slug = params.slug;
	const payload = await getPayloadsById(slug);
	let launch: LaunchResponse | undefined = undefined;
	if (payload?.launch) {
		launch = await getLaunchesById(payload.launch);
	}
	return {
		payload,
		launch
	};
}
