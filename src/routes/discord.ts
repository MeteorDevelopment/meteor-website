import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
    return {
        status: 302,
        headers: {
            Location: "https://discord.com/invite/bBGQZvd"
        }
    };
};