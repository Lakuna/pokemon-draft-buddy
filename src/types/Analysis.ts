import type FormStrategy from "./FormStrategy.js";
import type Strategy from "./Strategy.js";

/**
 * Analysis information stored by Smogon.
 * @public
 */
export default interface Analysis {
	/** The languages in which the analysis is available. Always an ISO 639-1 language code. */
	languages?: string[];

	/** The names of moves that the Pokémon can learn. Always matches a `name` value of a `Move`. */
	learnset?: string[];

	/** Strategy guides for the Pokémon. */
	strategies?: Strategy[];

	/** Strategy guides for the Pokémon's forms. */
	formeStrategies?: FormStrategy[];
}
