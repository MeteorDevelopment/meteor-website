import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
    return {
        status: 302,
        headers: {
            Location: "https://www.youtube.com/channel/UCWfwmiYGlXXunsUc1Zvz8SQ"
        }
    };
};