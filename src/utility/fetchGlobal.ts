import puppeteer from "puppeteer";

/**
 * Get the value of the global variable with the given name from the given URL.
 * @param url - The URL to navigate to.
 * @param name - The name of the variable to get the value of at the given URL.
 * @param guarantee - Guarantee that the specified global variable is returned, trying again infinitely until it is. This is dangerous if you aren't certain that the specified global variable exists.
 * @returns The value of the specified variable at the specified URL.
 * @public
 */
export default async function fetchGlobal(
	url: string,
	name: string,
	guarantee = false
): Promise<unknown> {
	const browser = await puppeteer.launch({ timeout: 10000 });
	try {
		const page = await browser.newPage();

		let success = false;
		while (!success) {
			try {
				// eslint-disable-next-line no-await-in-loop
				await page.goto(url, { timeout: 10000 });

				if (guarantee) {
					// eslint-disable-next-line no-await-in-loop
					return await page.evaluate(name);
				}

				success = true;
			} catch {
				// Try again if navigation fails.
			}
		}

		try {
			return await page.evaluate(name);
		} catch {
			return void 0;
		}
	} finally {
		await browser.close();
	}
}
