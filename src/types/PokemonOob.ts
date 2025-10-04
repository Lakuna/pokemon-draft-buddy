/**
 * Additional information about a Pokémon.
 * @public
 */
export default interface PokemonOob {
	/** The names of alternate forms of the Pokémon. Always matches a `name` value of a `Pokemon`. */
	alts: string[];

	/** The Pokédex number of the Pokémon. */
	dex_number: number;

	/** The names of evolutions of the Pokémon. Always matches a `name` value of a `Pokemon`. */
	evos: string[];

	/** The generations in which the Pokémon exists. Always matches a `shorthand` value of a `Generation`. */
	genfamily: string[];
}
