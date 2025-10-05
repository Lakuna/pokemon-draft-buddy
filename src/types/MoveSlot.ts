/**
 * A move slot in a move set.
 * @public
 */
export default interface MoveSlot {
	/** The name of the move in the move slot. Always matches a `name` value of a `Move`. */
	move: string;

	/** The type of the move in the move slot. Always matches a `name` value of a `Type` or is `null`. */
	type: string | null;
}
