import type Analysis from "./Analysis.js";
import type Basics from "./Basics.js";
import type Generation from "./Generation.js";
import type ProcSettings from "./ProcSettings.js";

/**
 * Smogon Pokédex settings.
 * @public
 */
export default interface DexSettings {
	/** An advertising value. */
	ads: string;

	/** Injected remote procedure calls. The string in the first index is always an `RpcKey` in JSON form. */
	injectRpcs: [string, Generation[] | Basics | Analysis][];

	/** Process settings. */
	procSettings: ProcSettings;

	/** Whether or not the editor user interface should be shown. */
	showEditorUI: boolean;
}
