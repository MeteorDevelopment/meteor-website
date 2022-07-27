import { api } from "./api";

export type AddonDeveloper = {
    id: string;
    username: string;
};

export type Addon = {
    id: string;

    title: string;
    icon: string;
    description: string;
    markdown: string;

    developers: AddonDeveloper[];

    version: string;
    meteorVersions: string[];
    download: string;

    downloadCount: number;

    website: string;
    source: string;
    support: string;

    createdAt: Date;
    updatedAt: Date;
};

export function getAddon(id: string, fetch: any = null): Promise<Addon> {
    return new Promise((resolve, reject) => {
        api("addons/getById?id=" + id, false, "GET", null, fetch)
            .then(res => resolve(idk(res)))
            .catch(reason => reject(reason));
    });
}

export function searchAddons(text: string, fetch: any = null): Promise<Addon[]> {
    let path = "addons/search";
    if (text !== "") path += "?text=" + text;

    return new Promise((resolve, reject) => {
        api(path, false, "GET", null, fetch)
            .then(res => resolve(res.addons.map(idk)))
            .catch(reason => reject(reason));
    });
}

export function getDevelopersHtml(addon: Addon): string {
    let str = "<b>By</b> ";

    addon.developers.forEach((developer, i) => {
        if (i > 0) str += ", ";
        str += developer.username;
    });

    return str;
}

function idk(addon: any): Addon {
    return {
        id: addon.id,

        title: addon.title,
        icon: addon.icon,
        description: addon.description,
        markdown: addon.markdown,

        developers: addon.developers,

        version: addon.version,
        meteorVersions: addon.meteor_versions,
        download: addon.download,

        downloadCount: addon.download_count,

        website: addon.website,
        source: addon.source,
        support: addon.support,

        createdAt: new Date(addon.created_at),
        updatedAt: new Date(addon.updated_at)
    };
}