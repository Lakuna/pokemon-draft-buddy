/**
 * A Pokémon generation.
 * @public
 */
export default interface Generation {
	/** The full readable name of the generation. */
	name: string;

	/** The string that is used to reference the generation. */
	shorthand: string;
}
