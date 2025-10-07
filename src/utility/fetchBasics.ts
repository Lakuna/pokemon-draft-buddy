import type Basics from "../types/Basics.js";
import type Generation from "../types/Generation.js";
import RpcName from "../types/RpcName.js";
import fetchGlobal from "./fetchGlobal.js";
import isDexSettings from "./isDexSettings.js";
import rpc from "./rpc.js";
import slugify from "./slugify.js";

export default async function fetchBasics(
	generation: Generation
): Promise<Basics | undefined> {
	const dexSettings = await fetchGlobal(
		`https://www.smogon.com/dex/${slugify(generation.shorthand)}/pokemon/`,
		"dexSettings",
		true
	);
	if (!isDexSettings(dexSettings)) {
		throw new Error("Invalid data.");
	}

	return rpc(RpcName.DumpBasics, dexSettings);
}
