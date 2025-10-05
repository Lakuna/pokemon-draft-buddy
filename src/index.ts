import fetchAnalysis from "./utility/fetchPokemon.js";
import fetchBasics from "./utility/fetchBasics.js";
import fetchGenerations from "./utility/fetchGenerations.js";

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

// eslint-disable-next-line no-console
console.log(await fetchAnalysis(generation, pokemon));
