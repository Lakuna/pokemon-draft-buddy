import puppeteer from "puppeteer";

/**
 * Convert the given HTML to plaintext.
 * @param html - The HTML to convert.
 * @returns The equivalent plaintext.
 * @public
 */
export default async function htmlToPlaintext(html: string): Promise<string> {
	// This function uses Puppeteer to perform the conversion in order to be as robust as possible with regards to character references. This function shouldn't be used when performance is a concern.
	const browser = await puppeteer.launch({ timeout: 10000 });
	try {
		const page = await browser.newPage();
		return await page.evaluate((innerHtml) => {
			const div = document.createElement("div");
			div.innerHTML = innerHtml;
			return div.innerText;
		}, html);
	} finally {
		await browser.close();
	}
}
