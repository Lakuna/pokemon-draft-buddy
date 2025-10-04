import type SmogonTeam from "./SmogonTeam.js";
import type SmogonUser from "./SmogonUser.js";

/**
 * Credits for a strategy guide for a Pokémon.
 * @public
 */
export default interface StrategyCredits {
	/** The users that wrote the strategy guide. */
	writtenBy: SmogonUser[];

	/** The teams that worked on the strategy guide. */
	teams: SmogonTeam[];
}
