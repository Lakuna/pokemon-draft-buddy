import type Generation from "../types/Generation.js";
import RpcName from "../types/RpcName.js";
import fetchGlobal from "./fetchGlobal.js";
import isDexSettings from "./isDexSettings.js";
import rpc from "./rpc.js";

export default async function fetchGenerations(): Promise<
	Generation[] | undefined
> {
	const dexSettings = await fetchGlobal(
		"https://www.smogon.com/dex/",
		"dexSettings"
	);
	if (!isDexSettings(dexSettings)) {
		throw new Error("Invalid data.");
	}

	return rpc(RpcName.DumpGens, dexSettings);
}
