export interface Stats {
    version: string;
    devBuildVersion: string;

    mcVersion: string;
    devBuildMcVersion: string;
    baritoneMcVersion: string;

    downloads: number;
    onlinePlayers: number;
}

export async function fetchStats(fetch: any): Promise<Stats> {
    let stats = await (await fetch("https://meteorclient.com/api/stats")).json();

    return {
        version: stats.version,
        devBuildVersion: stats.dev_build_version,

        mcVersion: stats.mc_version,
        devBuildMcVersion: stats.dev_build_mc_version,
        baritoneMcVersion: stats.baritone_mc_version,

        downloads: stats.downloads,
        onlinePlayers: stats.onlinePlayers
    };
}
