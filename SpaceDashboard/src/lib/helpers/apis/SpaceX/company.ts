import { endpoints } from '$lib/helpers/apis/SpaceX/constants';
import type { CompanyResponse } from '$lib/types/spacex/apiResponse';
import { getAllOfEntity } from '$lib/helpers/apis/SpaceX/BaseQueries';

export async function getAllCompanies() {
	return await getAllOfEntity<CompanyResponse>(endpoints.company);
}
