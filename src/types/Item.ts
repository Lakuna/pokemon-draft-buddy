import type IsNonstandard from "./IsNonstandard.js";

/**
 * A Pokémon item.
 * @public
 */
export default interface Item {
	/** A human-readable description of the item. */
	description: string;

	/** The generations in which the item exists. Always matches a `shorthand` value of a `Generation`. */
	genfamily: string[];

	/** The legality status of the item. */
	isNonstandard: IsNonstandard;

	/** The name of the item. */
	name: string;
}
