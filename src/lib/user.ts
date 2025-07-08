import { get, writable } from "svelte/store";
import { browser } from "$app/environment";
import { api } from "./api";

export type Cape = {
    current: boolean;
    id: string;
    title: string;
    url: string;
};

export type User = {
    id: string;
    username: string;
    email: string;
    admin: boolean;
    donator: boolean;
    discordId: bigint;
    maxMcAccounts: number;
    mcAccounts: string[];
    cape: string;
    canHavaCustomcape: boolean;
    discordName: string;
    discordAvatar: string;
    capes: Cape[];
};

export const token = writable<string | null>(browser ? localStorage.getItem("token") : null);
export const user = writable<User | null>();

token.subscribe((token) => {
    if (browser) {
        if (token != null) localStorage.setItem("token", token);
        else localStorage.removeItem("token");

        refreshUser();
    }
});

export function refreshUser() {
    let tok = get(token);

    if (!tok) {
        user.set(null);
        return;
    }

    api("account/info", true)
        .then((res) => {
            user.set({
                id: res.id,
                username: res.username,
                email: res.email,
                admin: res.admin,
                donator: res.donator,
                discordId: res.discord_id,
                maxMcAccounts: res.max_mc_accounts,
                mcAccounts: res.mc_accounts,
                cape: res.cape,
                canHavaCustomcape: res.can_have_custom_cape,
                discordName: res.discord_name,
                discordAvatar: res.discord_avatar,
                capes: res.capes
            });
        })
        .catch((reason) => {
            console.error("Error: " + reason);

            token.set(null);
            user.set(null);
        });
}
