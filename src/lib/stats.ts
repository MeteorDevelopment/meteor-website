export interface Builds {
    [version: string]: number
}

export interface Stats {
    builds: Builds
    baritoneMcVersion: string

    downloads: number
    onlinePlayers: number
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchStats(fetch: any): Promise<Stats> {
    let stats = await (await fetch("https://meteorclient.com/api/stats")).json()

    return {
        builds: stats.builds,
        baritoneMcVersion: stats.baritone_mc_version,

        downloads: stats.downloads,
        onlinePlayers: stats.onlinePlayers,
    }
}
