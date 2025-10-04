import type SmogonUser from "./SmogonUser.js";

/**
 * A Smogon team.
 * @public
 */
export default interface SmogonTeam {
	/** The name of the team. */
	name: string;

	/** The members in the team. */
	members: SmogonUser[];
}
