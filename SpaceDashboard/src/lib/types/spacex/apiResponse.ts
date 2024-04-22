import type {
	Cores,
	Crew,
	Dragon,
	Engine,
	Fairings,
	FirstStage,
	Headquarters,
	HeatShield,
	Links,
	PadStatus,
	SecondStage,
	Size,
	Status,
	Volume,
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
	id: string;
};
export type ExtendedLaunchResponse = LaunchResponse & {
	rocket: { name: string };
	launchpad: { name: string };
	payloads: { type: string };
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
	id: string;
};

export type PayloadsResponse = {
	name: string;
	type: string | null;
	reused: boolean;
	launch: string | null; //UUID
	customers: string[];
	norad_ids: number[];
	nationalities: string[];
	manufacturers: string[];
	mass_kg: number | null;
	mass_lbs: number | null;
	orbit: string | null;
	reference_system: string | null;
	regime: string | null;
	longitude: number | null;
	semi_major_axis_km: number | null;
	eccentricity: number | null;
	periapsis_km: number | null;
	apoapsis_km: number | null;
	inclination_deg: number | null;
	period_min: number | null;
	lifespan_years: number | null;
	epoch: string | null;
	mean_motion: number | null;
	raan: number | null;
	arg_of_pericenter: number | null;
	mean_anomaly: number | null;
	dragon: Dragon;
	id: string;
};

export type CapsuleResponse = {
	serial: string;
	status: Status;
	type: 'Dragon 1.0' | 'Dragon 1.1' | 'Dragon 2.0';
	dragon: string;
	reuse_count: number;
	water_landings: number;
	land_landings: number;
	last_update: string | null;
	launches: string[];
	id: string;
};

export type CompanyResponse = {
	name: string;
	founder: string;
	founded: number;
	employees: number;
	vehicles: number;
	launch_sites: number;
	test_sites: number;
	ceo: string;
	cto: string;
	coo: string;
	cto_propulsion: string;
	valuation: number;
	headquarters: Headquarters;
	links: {
		website: string;
		flickr: string;
		twitter: string;
		elon_twitter: string;
	};
	summary: string;
	id: string;
};

export type CoresResponse = {
	serial: string;
	block: number | null;
	status: Status;
	reuse_count: number;
	rtls_attempts: number;
	rtls_landings: number;
	asds_attempts: number;
	asds_landings: number;
	last_update: string | null;
	launches: string[];
	id: string;
};

export type CrewResponse = {
	name: string | null;
	status: Status;
	agency: string | null;
	image: string | null;
	wikipedia: string | null;
	launches: string[];
	id: string;
};

export type DragonsResponse = {
	name: string;
	type: string;
	active: boolean;
	crew_capacity: number;
	sidewall_angle_deg: number;
	orbit_duration_yr: number;
	dry_mass_kg: number;
	dry_mass_lb: number;
	first_flight: string | null;
	heat_shield: HeatShield;
	thrusters: object;
	launch_payload_mass: Weight;
	launch_payload_vol: Volume;
	return_payload_mass: Weight;
	return_payload_vol: Volume;
	pressurized_capsule: {
		payload_volume: Volume;
	};
	trunk: {
		trunk_volume: Volume;
		cargo: {
			solar_array: number;
			unpressurized_cargo: boolean;
		};
	};
	height_w_trunk: Size;
	diameter: Size;
	flickr_images: string[];
	wikipedia: string;
	description: string;
	id: string;
};

export type HistoryResponse = {
	title: string | null;
	event_date_utc: string | null;
	event_date_unix: number | null;
	details: string | null;
	links: {
		article: string | null;
	};
	id: string;
};

export type LandPadsResponse = {
	name: string | null;
	full_name: string | null;
	status: PadStatus;
	type: string | null;
	locality: string | null;
	region: string | null;
	latitude: number | null;
	longitude: number | null;
	landing_attempts: number;
	landing_successes: number;
	wikipedia: string | null;
	details: string | null;
	launches: string[];
	id: string;
};

export type LaunchPadsResponse = {
	name: string | null;
	full_name: string | null;
	status: PadStatus;
	locality: string | null;
	region: string | null;
	timezone: string | null;
	latitude: number | null;
	longitude: number | null;
	launch_attempts: number;
	launch_successes: number;
	rockets: string[];
	launches: string[];
	id: string;
};

export type RoadsterResponse = {
	name: string;
	launch_date_utc: string;
	launch_date_unix: number;
	launch_mass_kg: number;
	launch_mass_lbs: number;
	norad_id: number;
	epoch_jd: number;
	orbit_type: string;
	apoapsis_au: number;
	periapsis_au: number;
	semi_major_axis_au: number;
	eccentricity: number;
	inclination: number;
	longitude: number;
	periapsis_arg: number;
	period_days: number;
	speed_kph: number;
	speed_mph: number;
	earth_distance_km: number;
	earth_distance_mi: number;
	mars_distance_km: number;
	mars_distance_mi: number;
	flickr_images: string[];
	wikipedia: string;
	video: string;
	details: string;
	id: string;
};

export type ShipsResponse = {
	name: string;
	legacy_id: string | null;
	model: string | null;
	type: string | null;
	roles: string[];
	active: boolean;
	imo: number | null;
	mmsi: number | null;
	abs: number | null;
	class: number | null;
	mass_kg: number | null;
	mass_lbs: number | null;
	year_built: number | null;
	home_port: string | null;
	status: string | null;
	speed_kn: number | null;
	course_deg: number | null;
	latitude: number | null;
	longitude: number | null;
	last_ais_update: string | null;
	link: string | null;
	image: string | null;
	launches: string[];
	id: string;
};

export type StarLinkResponse = {
	id: string;
	version: string | null;
	launch: string | null;
	longitude: number | null;
	latitude: number | null;
	height_km: number | null;
	velocity_kms: number | null;
	spaceTrack: {
		CCSDS_OMM_VERS: string | null;
		COMMENT: string | null;
		CREATION_DATE: string | null;
		ORIGINATOR: string | null;
		OBJECT_NAME: string | null;
		OBJECT_ID: string | null;
		CENTER_NAME: string | null;
		REF_FRAME: string | null;
		TIME_SYSTEM: string | null;
		MEAN_ELEMENT_THEORY: string | null;
		EPOCH: string | null;
		MEAN_MOTION: number | null;
		ECCENTRICITY: number | null;
		INCLINATION: number | null;
		RA_OF_ASC_NODE: number | null;
		ARG_OF_PERICENTER: number | null;
		MEAN_ANOMALY: number | null;
		EPHEMERIS_TYPE: number | null;
		CLASSIFICATION_TYPE: string | null;
		NORAD_CAT_ID: number | null;
		ELEMENT_SET_NO: number | null;
		REV_AT_EPOCH: number | null;
		BSTAR: number | null;
		MEAN_MOTION_DOT: number | null;
		MEAN_MOTION_DDOT: number | null;
		SEMIMAJOR_AXIS: number | null;
		PERIOD: number | null;
		APOAPSIS: number | null;
		PERIAPSIS: number | null;
		OBJECT_TYPE: string | null;
		RCS_SIZE: string | null;
		COUNTRY_CODE: string | null;
		LAUNCH_DATE: string | null;
		SITE: string | null;
		DECAY_DATE: string | null;
		DECAYED: number | null;
		FILE: number | null;
		GP_ID: number | null;
		TLE_LINE0: string | null;
		TLE_LINE1: string | null;
		TLE_LINE2: string | null;
	};
};
