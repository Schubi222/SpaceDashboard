import type { Cores, Crew, Fairings, Links } from './apiResponseGeneral';

export type LaunchResponse = {
	fairings: Fairings | null;
	links: Links;
	flight_number: number;
	name: string;
	date_utc: string;
	date_unix: number;
	date_local: string;
	date_precision: ['half', 'quarter', 'year', 'month', 'day', 'hour'];
	static_fire_date_utc: string | null;
	static_fire_date_unix: number | null;
	tdb: boolean | null;
	net: boolean | null;
	window: number | null;
	rocket: string | null;
	success: boolean | null;
	failures: [
		{
			time: number;
			altitude: number;
			reason: string;
		}
	];
	upcoming: boolean;
	details: string | null;
	crew: Crew;
	ships: string[];
	capsules: string[];
	payloads: string[];
	launchpad: string | null;
	cores: Cores;
	auto_update: boolean;
};
