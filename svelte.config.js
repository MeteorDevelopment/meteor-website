import adapter from '@sveltejs/adapter-auto';
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';
import {mdsvex} from "mdsvex";

const config = {
    extensions: [".svelte", ".md"],

    preprocess: [
        vitePreprocess(),
        mdsvex({
            extensions: [".md"],
            layout: "src/lib/layouts/markdown.svelte",
        })
    ],
    kit: {
        adapter: adapter()
    }
};

export default config;
