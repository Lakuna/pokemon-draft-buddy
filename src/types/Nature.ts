/**
 * A Pokémon move.
 * @public
 */
export default interface Nature {
	/** The attack multiplier of the nature. */
	atk: number;

	/** The defense multiplier of the nature. */
	def: number;

	/** The generations in which the nature exists. Always matches a `shorthand` value of a `Generation`. */
	genfamily: string[];

	/** The health point multiplier of the nature. */
	hp: number;

	/** The name of the nature. */
	name: string;

	/** The special attack multiplier of the nature. */
	spa: number;

	/** The special defense multiplier of the nature. */
	spd: number;

	/** The speed multiplier of the nature. */
	spe: number;

	/** A human-readable summary of the nature. */
	summary: string;
}
