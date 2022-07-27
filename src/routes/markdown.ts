import type { RequestHandler } from "@sveltejs/kit";
import { compile } from "mdsvex";
import { markdown as markdownPlugin } from "$lib/markdown";

export const POST: RequestHandler = async ({ request }) => {
    let raw = await request.text();
    let markdown = (await compile(raw, { remarkPlugins: [markdownPlugin] }))?.code;

    return {
        status: 200,
        body: markdown
    };
};