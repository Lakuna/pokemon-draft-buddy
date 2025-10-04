import type Strategy from "./Strategy.js";

/**
 * A strategy guide for a Pokémon's form.
 * @public
 */
export default interface FormStrategy {
	/** The name of the form. Always matches a `name` value of a `Pokemon`. */
	forme: string;

	/** Strategy guides for the form. */
	strategies: Strategy[];
}
