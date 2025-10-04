import type Analysis from "../types/Analysis.js";
import type Basics from "../types/Basics.js";
import type DexSettings from "../types/DexSettings.js";
import type Generation from "../types/Generation.js";
import type { RpcKey } from "../types/RpcKey.js";
import RpcName from "../types/RpcName.js";

/**
 * Get the return value of the specified remote procedure call.
 * @public
 */
export default function rpc(
	name: RpcName.DumpBasics,
	dexSettings: DexSettings
): Basics | undefined;

/**
 * Get the return value of the specified remote procedure call.
 * @public
 */
export default function rpc(
	name: RpcName.DumpGens,
	dexSettings: DexSettings
): Generation[] | undefined;

/**
 * Get the return value of the specified remote procedure call.
 * @public
 */
export default function rpc(
	name: RpcName.DumpPokemon,
	dexSettings: DexSettings
): Analysis | undefined;

/**
 * Get the return value of the specified remote procedure call.
 * @public
 */
export default function rpc(
	name: RpcName,
	dexSettings: DexSettings
): Generation[] | Basics | Analysis | undefined {
	return dexSettings.injectRpcs.find(
		([rpcKey]) => (JSON.parse(rpcKey) as RpcKey)[0] === name
	)?.[1];
}
