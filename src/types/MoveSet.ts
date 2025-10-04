import type MoveSlot from "./MoveSlot.js";
import type StatConfig from "./StatConfig.js";

/**
 * A move set for a Pokémon.
 * @public
 */
export default interface MoveSet {
	/** The name of the move set. */
	name: string;

	/** The name of the Pokémon that the move set is for. Always matches a `name` value of an `Pokemon`. */
	pokemon: string;

	/** Whether or not the Pokémon described by the move set is shiny. */
	shiny: boolean;

	/** The gender of the Pokémon described by the move set. */
	gender: string;

	/** The levels at which the move set is designed to be used. */
	levels: number[];

	/** An HTML description of the move set. */
	description: string;

	/** The possible abilities used with the move set. Always matches a `name` value of an `Ability`. */
	abilities: string[];

	/** The possible items used with the move set. Always matches a `name` value of an `Item`. */
	items: string[];

	/** The possible Tera types used with the move set. Always matches a `name` value of a `Type`. */
	teratypes: string[];

	/** The move slots in the move set. */
	moveslots: MoveSlot[][];

	/** Possible effort value configurations to use with the move set. */
	evconfigs: StatConfig[];

	/** Possible individual value configurations to use with the move set. */
	ivconfigs: StatConfig[];

	/** The possible natures used with the move set. Always matches a `name` value of a `Nature`. */
	natures: string[];
}
