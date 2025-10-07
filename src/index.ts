import IsNonstandard from "./types/IsNonstandard.js";
import fetchAnalysis from "./utility/fetchPokemon.js";
import fetchBasics from "./utility/fetchBasics.js";
import fetchGenerations from "./utility/fetchGenerations.js";
import htmlToPlaintext from "./utility/htmlToPlaintext.js";
import { writeFile } from "node:fs/promises";

const generations = await fetchGenerations();
if (!generations) {
	throw new Error("Failed to fetch generations.");
}

const generation = generations[generations.length - 1];
if (!generation) {
	throw new Error("Failed to choose a generation.");
}

// eslint-disable-next-line no-console
console.log(`Using generation: ${generation.name}.`);

const basics = await fetchBasics(generation);
if (!basics) {
	throw new Error("Failed to fetch basics.");
}

// eslint-disable-next-line no-console
console.log(`Got basics with ${basics.pokemon.length.toString()} Pokémon.`);

const all = basics.pokemon.filter(
	({ isNonstandard, oob }) =>
		isNonstandard !== IsNonstandard.CAP && oob !== null
);
const out = [];
for (const [i, pokemon] of all.entries()) {
	// eslint-disable-next-line no-console
	console.log(
		`Getting Pokémon: ${pokemon.name} (${i.toString()}/${all.length.toString()} | ${((i / all.length) * 100).toFixed()}%).`
	);

	// eslint-disable-next-line no-await-in-loop
	const analysis = await fetchAnalysis(generation, pokemon);
	if (!analysis?.strategies) {
		out.push({ error: "No strategies.", name: pokemon.name });
		continue;
	}

	const strategy = analysis.strategies.find(({ format }) => format === "Draft");
	if (!strategy) {
		out.push({ error: "No draft strategy.", name: pokemon.name });
		continue;
	}

	// Parse the overview.
	// eslint-disable-next-line no-await-in-loop
	const overview = await htmlToPlaintext(strategy.overview);
	const [draftOrderTextLabeled, priceRangeTextLabeled] = overview.split("\n");
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

	// Parse the comments.
	// eslint-disable-next-line no-await-in-loop
	const comments = await htmlToPlaintext(strategy.comments);
	let mode = "";
	const commonRoles: Record<string, string> = {};
	for (const line of [...overview.split("\n"), ...comments.split("\n")]) {
		const cleanLine = line.toLowerCase().trim();
		if (
			cleanLine === "common roles" ||
			cleanLine === "common moves" ||
			cleanLine === "niche moves" ||
			cleanLine === "common items" ||
			cleanLine === "niche items" ||
			cleanLine === "tera" ||
			cleanLine === "draft strategy" ||
			cleanLine === "checks and counters"
		) {
			mode = cleanLine;
			continue;
		}

		if (mode === "common roles") {
			commonRoles[line.substring(0, line.indexOf(":"))] = line
				.substring(line.indexOf(":") + 1)
				.trim();
			continue;
		}

		// TODO
	}

	out.push({
		abilities: pokemon.abilities,
		attack: pokemon.atk,
		commonRoles,
		defense: pokemon.def,
		draftOrder: {
			round: draftOrder,
			text: draftOrderText
		},
		health: pokemon.hp,
		name: pokemon.name,
		priceRange: {
			max: priceRangeMax,
			min: priceRangeMin,
			text: priceRangeText
		},
		specialAttack: pokemon.spa,
		specialDefense: pokemon.spd,
		speed: pokemon.spe,
		types: pokemon.types
	});
}

await writeFile("out.json", JSON.stringify(out));
