/**
 * A Pokémon move flag.
 * @public
 */
export default interface MoveFlag {
	/** A human-readable description of the move flag. */
	description: string;

	/** The generations in which the move flag exists. Always matches a `shorthand` value of a `Generation`. */
	genfamily: string[];

	/** The name of the move flag. */
	name: string;
}
