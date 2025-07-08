import adapter from "@sveltejs/adapter-node";
import { sveltePreprocess } from "svelte-preprocess";
import atImport from "postcss-import";
import { mdsvex } from "mdsvex";
import { markdown } from "./src/lib/markdown.js";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import("@sveltejs/kit").Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    extensions: [".svelte", ".md"],

    preprocess: [
        sveltePreprocess({
            postcss: {
                plugins: [
                    atImport({
                        path: "static/css"
                    })
                ]
            }
        }),
        mdsvex({
            extensions: [".md"],
            layout: {
                faq: join(__dirname, "./src/layouts/faq.svelte")
            },
            remarkPlugins: [markdown]
        })
    ],

    kit: {
        adapter: adapter()
    }
};

export default config;
