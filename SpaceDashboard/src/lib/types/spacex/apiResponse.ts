import type {
	Cores,
	Crew,
	Engine,
	Fairings,
	FirstStage,
	Links,
	SecondStage,
	Size,
	StageBasis,
	Thrust,
	Weight
} from './apiResponseGeneral';

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

export type RocketsResponse = {
	name: string;
	type: string;
	active: boolean;
	stages: number;
	boosters: number;
	cost_per_launch: number;
	success_rate_pct: number;
	first_flight: string;
	country: string;
	company: string;
	height: Size;
	diameter: Size;
	mass: Weight;
	payload_weights: object[]; //TODO Not sure
	first_stage: FirstStage;
	second_stage: SecondStage;
	engines: Engine;
	landing_legs: {
		number: number;
		material: object;
	};
	flickr_images: string;
	wikipedia: string;
	description: string;
};
