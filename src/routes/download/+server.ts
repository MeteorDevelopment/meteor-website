import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
    let newUrl = new URL("https://meteorclient.com/api/download");
    url.searchParams.forEach((value, key) => newUrl.searchParams.set(key, value));
    return await fetch(newUrl);
};
