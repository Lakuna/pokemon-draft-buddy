/**
 * A move targeting type.
 * @public
 */
enum MoveTarget {
	/** Target an adjacent enemy. */
	Normal = "Normal",

	/** Target yourself. */
	Self = "Self",

	/** Target an adjacent ally or yourself. */
	AdjacentAllyOrSelf = "AdjacentAllyOrSelf",

	/** Target anybody. */
	Any = "Any",

	/** Target your team. */
	AllyTeam = "AllyTeam",

	/** Target an adjacent ally. */
	AdjacentAlly = "AdjacentAlly",

	/** Target your side. */
	AllySide = "AllySide",

	/** Target all adjacent enemies. */
	AllAdjacentFoes = "AllAdjacentFoes",

	/** Target everyone. */
	All = "All"
}

export default MoveTarget;
