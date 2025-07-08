import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
    return new Response(undefined, {
        status: 302,
        headers: {
            Location: "https://github.com/MeteorDevelopment"
        }
    });
};
