/**
 * A Pokémon format.
 * @public
 */
export default interface Format {
	/** The generations in which the format exists. Always matches a `shorthand` value of a `Generation`. */
	genfamily: string[];

	/** The name of the format. */
	name: string;

	/** The string that is used to reference the format. */
	shorthand: string;
}
