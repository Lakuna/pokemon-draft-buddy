import type RpcName from "./RpcName.js";

/**
 * Arguments that were passed to a Smogon "dump basic information" remote procedure call.
 * @public
 */
export interface DumpBasicsRpcKeyArguments {
	/** The generation for which to dump basic information. Always matches a lowercased `shorthand` value of a `Generation`. */
	gen: string;
}

/**
 * Arguments that were passed to a Smogon "dump Pokémon" remote procedure call.
 * @public
 */
export interface DumpPokemonRpcKeyArguments {
	/** The alias of the Pokémon for which to dump information. Always matches a lowercased `name` value of a `Pokemon`. */
	alias: string;

	/** The generation for which to dump Pokémon information. Always matches a lowercased `shorthand` value of a `Generation`. */
	gen: string;

	/** The language in which to display the Pokémon information. Always an ISO 639-1 language code. */
	language: string;
}

/**
 * A key for a Smogon remote procedure call.
 * @public
 */
export type RpcKey =
	| [RpcName.DumpGens, object]
	| [RpcName.DumpBasics, DumpBasicsRpcKeyArguments]
	| [RpcName.DumpPokemon, DumpPokemonRpcKeyArguments];
