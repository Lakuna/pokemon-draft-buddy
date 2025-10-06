import fetchAnalysis from "./utility/fetchPokemon.js";
import fetchBasics from "./utility/fetchBasics.js";
import fetchGenerations from "./utility/fetchGenerations.js";
import htmlToPlaintext from "./utility/htmlToPlaintext.js";

const generations = await fetchGenerations();
if (!generations) {
	throw new Error("Failed to fetch generations.");
}

const generation = generations.find(({ shorthand }) => shorthand === "SV");
if (!generation) {
	throw new Error("Failed to choose a generation.");
}

// eslint-disable-next-line no-console
console.log(`Using generation: ${generation.name}.`);

const basics = await fetchBasics(generation);
if (!basics) {
	throw new Error("Failed to fetch basics.");
}

const pokemon = basics.pokemon.find(({ name }) => name === "Gholdengo");
if (!pokemon) {
	throw new Error("Failed to choose a Pokémon.");
}

// eslint-disable-next-line no-console
console.log(`Using Pokémon: ${pokemon.name}.`);

const analysis = await fetchAnalysis(generation, pokemon);
if (!analysis) {
	throw new Error("Failed to fetch an analysis.");
}

if (!analysis.strategies) {
	throw new Error("Analysis has no strategies.");
}

const strategy = analysis.strategies.find(({ format }) => format === "Draft");
if (!strategy) {
	throw new Error("Failed to choose a strategy.");
}

const comments = await htmlToPlaintext(strategy.comments);
const overviewRaw = await htmlToPlaintext(strategy.overview);
const [draftOrderTextLabeled, priceRangeTextLabeled, overviewLabeled] =
	overviewRaw.split("\n");
const draftOrderText = draftOrderTextLabeled
	?.substring(draftOrderTextLabeled.indexOf(":") + 1)
	.trim();
const draftOrder = parseInt(draftOrderText?.match(/\d+/gu)?.[0] ?? "", 10);
const priceRangeText = priceRangeTextLabeled
	?.substring(priceRangeTextLabeled.indexOf(":") + 1)
	.trim();
const priceRange = priceRangeText?.match(/\d+/gu);
const priceRangeMin = parseInt(priceRange?.[0] ?? "", 10);
const priceRangeMax = parseInt(priceRange?.[1] ?? "", 10);
const overview = overviewLabeled
	?.substring(overviewLabeled.indexOf(":") + 1)
	.trim();

// eslint-disable-next-line no-console
console.log({
	comments,
	draftOrder,
	draftOrderText,
	overview,
	priceRangeMax,
	priceRangeMin,
	priceRangeText
});
