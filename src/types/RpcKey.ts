import type RpcName from "./RpcName.js";

/**
 * A key for a Smogon "dump generations" remote procedure call.
 * @public
 */
export interface DumpGenerationsRpcKey {
	/** The name of the remote procedure call. */
	0: RpcName.DumpGens;

	/** The arguments that were passed to the "dump generations" remote procedure call. */
	1: object;
}

/**
 * Arguments that were passed to a Smogon "dump basic information" remote procedure call.
 * @public
 */
export interface DumpBasicsRpcKeyArguments {
	/** The generation for which to dump basic information. Always matches a lowercased `shorthand` value of a `Generation`. */
	gen: string;
}

/**
 * A key for a Smogon "dump basic information" remote procedure call.
 * @public
 */
export interface DumpBasicsRpcKey {
	/** The name of the remote procedure call. */
	0: RpcName.DumpBasics;

	/** The arguments that were passed to the "dump basic information" remote procedure call. */
	1: DumpBasicsRpcKeyArguments;
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
 * A key for a Smogon "dump Pokémon" remote procedure call.
 * @public
 */
export interface DumpPokemonRpcKey {
	/** The name of the remote procedure call. */
	0: RpcName.DumpPokemon;

	/** The arguments that were passed to the "dump Pokémon" remote procedure call. */
	1: DumpPokemonRpcKeyArguments;
}

/**
 * A key for a Smogon remote procedure call.
 * @public
 */
export type RpcKey =
	| DumpGenerationsRpcKey
	| DumpBasicsRpcKey
	| DumpPokemonRpcKey;
