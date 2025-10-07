import {
	array,
	boolean,
	enum as enum_,
	literal,
	nullable,
	number,
	object,
	optional,
	string,
	tuple,
	union
} from "zod";
import type DexSettings from "../types/DexSettings.js";
import IsNonstandard from "../types/IsNonstandard.js";
import MoveCategory from "../types/MoveCategory.js";
import MoveTarget from "../types/MoveTarget.js";
import RpcName from "../types/RpcName.js";

const dumpBasicsRpcKeyArgumentsSchema = object({ gen: string() });

const dumpPokemonRpcKeyArgumentsSchema = object({
	alias: string(),
	gen: string(),
	language: string()
});

const rpcKeySchema = union([
	tuple([literal(RpcName.DumpGens), object()]),
	tuple([literal(RpcName.DumpBasics), dumpBasicsRpcKeyArgumentsSchema]),
	tuple([literal(RpcName.DumpPokemon), dumpPokemonRpcKeyArgumentsSchema])
]);

const jsonRpcKeySchema = string().refine((arg) => {
	try {
		return rpcKeySchema.safeParse(JSON.parse(arg)).success;
	} catch {
		return false;
	}
});

const generationSchema = object({ name: string(), shorthand: string() });

const abilitySchema = object({
	description: string(),
	genfamily: array(string()),
	isNonstandard: enum_(IsNonstandard),
	name: string()
});

const formatSchema = object({
	genfamily: array(string()),
	name: string(),
	shorthand: string()
});

const itemSchema = object({
	description: string(),
	genfamily: array(string()),
	isNonstandard: enum_(IsNonstandard),
	name: string()
});

const moveFlagSchema = object({
	description: string(),
	genfamily: array(string()),
	name: string()
});

const moveSchema = object({
	accuracy: number(),
	category: enum_(MoveCategory),
	description: string(),
	flags: array(string()),
	genfamily: array(string()),
	isNonstandard: enum_(IsNonstandard),
	name: string(),
	power: number(),
	pp: number(),
	priority: number(),
	target: enum_(MoveTarget),
	type: string()
});

const natureSchema = object({
	atk: number(),
	def: number(),
	genfamily: array(string()),
	hp: number(),
	name: string(),
	spa: number(),
	spd: number(),
	spe: number(),
	summary: string()
});

const pokemonOobSchema = object({
	alts: array(string()),
	// eslint-disable-next-line camelcase
	dex_number: number(),
	evos: array(string()),
	genfamily: array(string())
});

const pokemonSchema = object({
	abilities: array(string()),
	atk: number(),
	def: number(),
	formats: array(string()),
	height: number(),
	hp: number(),
	isNonstandard: enum_(IsNonstandard),
	name: string(),
	oob: nullable(pokemonOobSchema),
	spa: number(),
	spd: number(),
	spe: number(),
	types: array(string()),
	weight: number()
});

const typeSchema = object({
	// eslint-disable-next-line camelcase
	atk_effectives: array(tuple([string(), number()])),
	description: string(),
	genfamily: array(string()),
	name: string()
});

const basicsSchema = object({
	abilities: array(abilitySchema),
	formats: array(formatSchema),
	items: array(itemSchema),
	moveflags: array(moveFlagSchema),
	moves: array(moveSchema),
	natures: array(natureSchema),
	pokemon: array(pokemonSchema),
	types: array(typeSchema)
});

// eslint-disable-next-line camelcase
const smogonUserSchema = object({ user_id: number(), username: string() });

const smogonTeamSchema = object({
	members: array(smogonUserSchema),
	name: string()
});

const strategyCreditsSchema = object({
	teams: array(smogonTeamSchema),
	writtenBy: array(smogonUserSchema)
});

const moveSlotSchema = object({ move: string(), type: nullable(string()) });

const statConfigSchema = object({
	atk: number(),
	def: number(),
	hp: number(),
	spa: number(),
	spd: number(),
	spe: number()
});

const moveSetSchema = object({
	abilities: array(string()),
	description: string(),
	evconfigs: array(statConfigSchema),
	gender: string(),
	items: array(string()),
	ivconfigs: array(statConfigSchema),
	levels: array(number()),
	moveslots: array(array(moveSlotSchema)),
	name: string(),
	natures: array(string()),
	pokemon: string(),
	shiny: boolean(),
	teratypes: array(string())
});

const strategySchema = object({
	comments: string(),
	credits: strategyCreditsSchema,
	format: string(),
	movesets: array(moveSetSchema),
	outdated: nullable(string()),
	overview: string()
});

const formStrategySchema = object({
	forme: string(),
	strategies: array(strategySchema)
});

const analysisSchema = object({
	formeStrategies: optional(array(formStrategySchema)),
	languages: optional(array(string())),
	learnset: optional(array(string())),
	strategies: optional(array(strategySchema))
});

const procSettingsSchema = object({ spriteBase: string() });

const dexSettingsSchema = object({
	ads: string(),
	injectRpcs: array(
		union([
			tuple([jsonRpcKeySchema, array(generationSchema)]),
			tuple([jsonRpcKeySchema, basicsSchema]),
			tuple([jsonRpcKeySchema, analysisSchema])
		])
	),
	procSettings: procSettingsSchema,
	showEditorUI: boolean()
});

/**
 * Determine whether or not the given value is a `DexSettings`.
 * @param dexSettings - The potential `DexSettings`.
 * @returns Whether or not `dexSettings` is a `DexSettings`.
 * @throws `ZodError` if `dexSettings` is not a `DexSettings`.
 * @public
 */
export default function isDexSettings(
	dexSettings: unknown
): dexSettings is DexSettings {
	dexSettingsSchema.parse(dexSettings);
	return true;
}
