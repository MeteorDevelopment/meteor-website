import type { PageLoad } from "./$types";
import { fetchStats } from "$lib/stats";

export const load: PageLoad = async ({ fetch }) => {
    return {
        stats: await fetchStats(fetch)
    }
};
