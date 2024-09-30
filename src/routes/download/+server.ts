import { redirect } from "@sveltejs/kit";

export async function GET({ url }) {
    throw redirect(301, "https://meteorclient.com/api/download" + url.search);
}