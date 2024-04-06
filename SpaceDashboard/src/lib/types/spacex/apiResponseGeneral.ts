export type Links = {
	links: {
		patch: {
			small: string;
			large: string;
		};
		reddit: {
			campaign: string;
			launch: string;
			media: string;
			recovery: null;
		};
		flickr: {
			small: [];
			original: string[];
		};
		presskit: string;
		webcast: string;
		youtube_id: string;
		article: string;
		wikipedia: string;
	};
};
export type Fairings = {
	reused: boolean | null;
	recovery_attempt: boolean | null;
	recovered: boolean | null;
	ships: string[] | null;
};
export type Crew = [
	{
		crew: string | null;
		role: string | null;
	}
];
export type Cores = [
	{
		core: string | null;
		flight: number | null;
		gridfins: boolean | null;
		legs: boolean | null;
		reused: boolean | null;
		landing_attempt: boolean | null;
		landing_success: boolean | null;
		landing_type: string | null;
		landpad: string | null;
	}
];
export type StageBasis = {
	reusable: boolean;
	engines: number;
	fuel_amount_tons: number;
	burn_time_sec: number;
};
export type FirstStage = StageBasis & {
	thrust_sea_level: Thrust;
	thrust_vacuum: Thrust;
};
export type SecondStage = StageBasis & {
	thrust: Thrust;
	payloads: {
		option_1: string;
		composite_fairing: {
			height: Size;
			diameter: Size;
		};
	};
};
export type Thrust = {
	kN: number;
	lbf: number;
};

export type Size = {
	meters: number;
	feet: number;
};
export type Weight = {
	kg: number;
	lb: number;
};
export type Engine = {
	number: number;
	type: string;
	version: string;
	layout: string;
	isp: {
		sea_level: number;
		vacuum: number;
	};
	engine_loss_max: number;
	propellant_1: string;
	propellant_2: string;
	thrust_sea_level: Thrust;
	thrust_vacuum: Thrust;
	thrust_to_weight: number;
};
export type Dragon = {
	capsule: string | null; //UUID
	mass_returned_kg: number | null;
	mass_returned_lbs: number | null;
	flight_time_sec: number | null;
	manifest: string | null;
	water_landing: boolean | null;
	land_landing: boolean | null;
};
export type Headquarters = {
	address: string;
	city: string;
	state: string;
};
export type Status = 'unknown' | 'active' | 'retired' | 'destroyed';
export type PadStatus =
	| 'active'
	| 'inactive'
	| 'unknown'
	| 'retired'
	| 'lost'
	| 'under construction';
export type HeatShield = {
	material: string;
	size_meters: number;
	temp_degrees: number;
	dev_partner: string;
};

export type Volume = {
	cubic_meters: {
		type: 'Number';
	};
	cubic_feet: {
		type: 'Number';
	};
};
