import type IsNonstandard from "./IsNonstandard.js";

/**
 * A Pokémon ability.
 * @public
 */
export default interface Ability {
	/** A human-readable description of the ability. */
	description: string;

	/** The generations in which the ability exists. Always matches a `shorthand` value of a `Generation`. */
	genfamily: string[];

	/** The legality status of the ability. */
	isNonstandard: IsNonstandard;

	/** The name of the ability. */
	name: string;
}
