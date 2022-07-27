import adapter from "@sveltejs/adapter-node";
import preprocess from "svelte-preprocess";
import atImport from "postcss-import";
import { mdsvex } from "mdsvex";
import { markdown } from "./src/lib/markdown.js";

/** @type {import("@sveltejs/kit").Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: [ ".svelte", ".md" ],

	preprocess: [
		preprocess({
			postcss: {
				plugins: [
					atImport({
						path: "static/css"
					})
				]
			}
		}),
		mdsvex({
			extensions: [ ".md" ],
			layout: {
				faq: "src/layouts/faq.svelte"
			},
			remarkPlugins: [markdown]
		})
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
