import type { CompanyResponse } from '$lib/types/spacex/apiResponse';
import { getRocketsById } from '$lib/helpers/apis/SpaceX/rockets';
import { getSpaceX } from '$lib/helpers/apis/SpaceX/company';

export async function load({ params }: { params: { slug: string } }) {
	const slug = params.slug;
	let company: CompanyResponse | undefined;
	const rocket = await getRocketsById(slug);
	if (rocket?.company) company = await getSpaceX();
	return {
		rocket,
		company
	};
}
