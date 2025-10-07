import type Analysis from "../types/Analysis.js";
import type Generation from "../types/Generation.js";
import type Pokemon from "../types/Pokemon.js";
import RpcName from "../types/RpcName.js";
import fetchGlobal from "./fetchGlobal.js";
import isDexSettings from "./isDexSettings.js";
import rpc from "./rpc.js";
import slugify from "./slugify.js";

export default async function fetchAnalysis(
	generation: Generation,
	pokemon: Pokemon
): Promise<Analysis | undefined> {
	const dexSettings = await fetchGlobal(
		`https://www.smogon.com/dex/${slugify(generation.shorthand)}/pokemon/${slugify(pokemon.name)}/`,
		"dexSettings",
		true
	);
	if (!isDexSettings(dexSettings)) {
		throw new Error("Invalid data.");
	}

	return rpc(RpcName.DumpPokemon, dexSettings);
}
