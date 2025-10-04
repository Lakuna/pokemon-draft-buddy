import type DexSettings from "./types/DexSettings.js";
import IsNonstandard from "./types/IsNonstandard.js";
import RpcName from "./types/RpcName.js";
import puppeteer from "puppeteer";
import rpc from "./utility/rpc.js";

const browser = await puppeteer.launch();
const page = await browser.newPage();
const base = "https://www.smogon.com/dex/sv/pokemon/";
await page.goto(base);

const dexSettings = (await page.evaluate("dexSettings")) as DexSettings;

const generations = rpc(RpcName.DumpGens, dexSettings);
if (!generations) {
	throw new Error("No generations.");
}

const basics = rpc(RpcName.DumpBasics, dexSettings);
if (!basics) {
	throw new Error("No basics.");
}

const generation = generations[generations.length - 1];
if (!generation) {
	throw new Error("Couldn't choose a generation.");
}

const format = basics.formats.find(({ shorthand }) => shorthand === "Draft");
if (!format) {
	throw new Error("Couldn't choose a format.");
}

const abilities = basics.abilities.filter(
	({ genfamily, isNonstandard }) =>
		genfamily.includes(generation.shorthand) &&
		isNonstandard !== IsNonstandard.CAP
);
const formats = basics.formats.filter(({ genfamily }) =>
	genfamily.includes(generation.shorthand)
);
const items = basics.items.filter(
	({ genfamily, isNonstandard }) =>
		genfamily.includes(generation.shorthand) &&
		isNonstandard !== IsNonstandard.CAP
);
const moveFlags = basics.moveflags.filter(({ genfamily }) =>
	genfamily.includes(generation.shorthand)
);
const moves = basics.moves.filter(
	({ genfamily, isNonstandard }) =>
		genfamily.includes(generation.shorthand) &&
		isNonstandard !== IsNonstandard.CAP
);
const natures = basics.natures.filter(({ genfamily }) =>
	genfamily.includes(generation.shorthand)
);
const pokemon = basics.pokemon.filter(
	({ oob, isNonstandard }) =>
		oob?.genfamily.includes(generation.shorthand) &&
		isNonstandard !== IsNonstandard.CAP
);
const types = basics.types.filter(({ genfamily }) =>
	genfamily.includes(generation.shorthand)
);

// eslint-disable-next-line no-console
console.log(`Totals:
- Abilities: ${abilities.length.toString()}
- Formats: ${formats.length.toString()}
- Items: ${items.length.toString()}
- Move flags: ${moveFlags.length.toString()}
- Moves: ${moves.length.toString()}
- Natures: ${natures.length.toString()}
- Pokémon: ${pokemon.length.toString()}
- Types: ${types.length.toString()}
`);

for (const mon of pokemon) {
	const monUrl = new URL(`${mon.name}/`, base).href;
	// eslint-disable-next-line no-await-in-loop
	const monPage = await browser.newPage();
	// eslint-disable-next-line no-await-in-loop
	await monPage.goto(monUrl);
	// eslint-disable-next-line no-await-in-loop
	const monDexSettings = (await monPage.evaluate("dexSettings")) as DexSettings;

	const info = rpc(RpcName.DumpPokemon, monDexSettings);
	if (!info) {
		throw new Error(`Missing information for ${mon.name}.`);
	}

	const formatStrategies = info.strategies.filter(
		(strategy) => strategy.format === format.shorthand
	);
	if (formatStrategies.length < 1) {
		// eslint-disable-next-line no-console
		console.log(`No ${format.name} strategies exist for ${mon.name}.`);
		continue;
	}

	// TODO: Clean up and parse information from returned strategy information.
	// eslint-disable-next-line no-console
	console.log(formatStrategies);
	break;
}

await browser.close();
