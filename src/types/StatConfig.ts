/**
 * A stat configuration in a move set.
 * @public
 */
export default interface StatConfig {
	/** The value of the health point investment. */
	hp: number;

	/** The value of the attack investment. */
	atk: number;

	/** The value of the defense investment. */
	def: number;

	/** The value of the special attack investment. */
	spa: number;

	/** The value of the special defense investment. */
	spd: number;

	/** The value of the speed investment. */
	spe: number;
}
