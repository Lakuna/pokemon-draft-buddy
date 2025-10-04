import type IsNonstandard from "./IsNonstandard.js";
import type PokemonOob from "./PokemonOob.js";

/**
 * A Pokémon.
 * @public
 */
export default interface Pokemon {
	/** The names of possible abilities of the Pokémon. Always matches a `name` value of an `Ability`. */
	abilities: string[];

	/** The base attack of the Pokémon. */
	atk: number;

	/** The base defense of the Pokémon. */
	def: number;

	/** The formats in which the Pokémon is legal. Always matches a `shorthand` value of a `Format`. */
	formats: string[];

	/** The height of the Pokémon in meters. */
	height: number;

	/** The base health points of the Pokémon. */
	hp: number;

	/** The legality status of the Pokémon. */
	isNonstandard: IsNonstandard;

	/** The name of the Pokémon. */
	name: string;

	/** Additional information about the Pokémon. */
	oob: PokemonOob | null;

	/** The base special attack of the Pokémon. */
	spa: number;

	/** The base special defense of the Pokémon. */
	spd: number;

	/** The base speed of the Pokémon. */
	spe: number;

	/** The types of the Pokémon. Always matches a `name` value of a `Type`. */
	types: string[];

	/** The weight of the Pokémon in kilograms. */
	weight: number;
}
