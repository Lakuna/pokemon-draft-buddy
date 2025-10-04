import type Ability from "./Ability.js";
import type Format from "./Format.js";
import type Item from "./Item.js";
import type Move from "./Move.js";
import type MoveFlag from "./MoveFlag.js";
import type Nature from "./Nature.js";
import type Pokemon from "./Pokemon.js";
import type Type from "./Type.js";

/**
 * Basic information stored by Smogon.
 * @public
 */
export default interface Basics {
	/** All abilities. */
	abilities: Ability[];

	/** All formats. */
	formats: Format[];

	/** All items. */
	items: Item[];

	/** All move flags. */
	moveflags: MoveFlag[];

	/** All moves. */
	moves: Move[];

	/** All natures. */
	natures: Nature[];

	/** All Pokémon. */
	pokemon: Pokemon[];

	/** All types. */
	types: Type[];
}
