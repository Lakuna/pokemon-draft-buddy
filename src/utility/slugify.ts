/**
 * Convert an input string into an acceptable slug (contains only lowercase alphanumeric characters, underscores, and hyphens).
 * @param s - The input string.
 * @returns An acceptable slug.
 * @public
 */
export default function slugify(s: string): string {
	return s
		.trim()
		.toLowerCase()
		.replace(/\s/gu, "-")
		.replace(/[^\w-]/gu, "");
}
