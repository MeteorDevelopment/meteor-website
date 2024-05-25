import type {Load} from "@sveltejs/kit";
import {fetchStats} from "$lib/stats";

export const load: Load = async ({fetch}) => {
    return {
        stats: await fetchStats(fetch)
    }
};
