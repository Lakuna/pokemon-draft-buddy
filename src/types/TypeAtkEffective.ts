/**
 * A type attack effectiveness entry.
 * @public
 */
export default interface TypeAtkEffective {
	/** The name of the defending type. Always matches a `name` value of a `Type`. */
	0: string;

	/** The damage multiplier of the attack against the defending type. */
	1: number;
}
