import type TypeAtkEffective from "./TypeAtkEffective.js";

/**
 * A Pokémon type.
 * @public
 */
export default interface Type {
	/** Type attack effectiveness entries. */
	atk_effectives: TypeAtkEffective[];

	/** A human-readable description of the type. */
	description: string;

	/** The generations in which the type exists. Always matches a `shorthand` value of a `Generation`. */
	genfamily: string[];

	/** The name of the type. */
	name: string;
}
