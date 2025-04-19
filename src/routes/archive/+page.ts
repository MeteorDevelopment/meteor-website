import type { PageLoad } from "./$types";
import { fetchStats } from "$lib/stats";
import { parse } from "semver";

export const load: PageLoad = async ({ params, fetch }) => {
    const stats = await fetchStats(fetch);
    const builds = [];

    let latest = parse("0.0.0")!;

    for (const str in stats.builds) {
        const version = parse(str)!;
        if (version > latest) latest = version;
    }

    for (const str in stats.builds) {
        const version = parse(str)!;
        const number = stats.builds[str];
        
        if (version.compare(latest) != 0) {
            builds.push({
                version,
                number
            });
        }
    }

    builds.sort((a, b) => -a.version.compare(b.version));

    return {
        builds: groupBy(builds, build => build.version.major + "." + build.version.minor)
    }
};

function groupBy<T>(arr: T[], fn: (item: T) => any) {
    return arr.reduce<Record<string, T[]>>((prev, curr) => {
        const groupKey = fn(curr);
        const group = prev[groupKey] || [];
        group.push(curr);
        return { ...prev, [groupKey]: group };
    }, {});
}
