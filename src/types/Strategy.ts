import type MoveSet from "./MoveSet.js";
import type StrategyCredits from "./StrategyCredits.js";

/**
 * A strategy guide for a Pokémon.
 * @public
 */
export default interface Strategy {
	/** The format that the strategy is for. Always matches a `shorthand` value of a `Format`. */
	format: string;

	/** If this strategy is outdated, this is an HTML string describing why. Otherwise, this is `null`. */
	outdated: string | null;

	/** An HTML string that gives an overview of the strategy. */
	overview: string;

	/** An HTML string that gives further comments on the strategy. */
	comments: string;

	/** Move sets for the strategy. */
	movesets: MoveSet[];

	/** Credits for the strategy guide. */
	credits: StrategyCredits;
}
