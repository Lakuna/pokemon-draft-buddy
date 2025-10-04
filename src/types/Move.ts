import type IsNonstandard from "./IsNonstandard.js";
import type MoveCategory from "./MoveCategory.js";
import type MoveTarget from "./MoveTarget.js";

/**
 * A Pokémon move.
 * @public
 */
export default interface Move {
	/** The base accuracy of the move. */
	accuracy: number;

	/** The category of the move. */
	category: MoveCategory;

	/** A human-readable description of the move. */
	description: string;

	/** The flags of the move. Always matches a `name` value of a `MoveFlag`. */
	flags: string[];

	/** The generations in which the move exists. Always matches a `shorthand` value of a `Generation`. */
	genfamily: string[];

	/** The legality status of the move. */
	isNonstandard: IsNonstandard;

	/** The name of the move. */
	name: string;

	/** The base power of the move. */
	power: number;

	/** The base power points of the move. */
	pp: number;

	/** The base priority of the move. */
	priority: number;

	/** The targeting type of the move. */
	target: MoveTarget;

	/** The type of the move. Always matches a `name` value of a `Type`. */
	type: string;
}
