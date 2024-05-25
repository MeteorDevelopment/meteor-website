import {get} from "svelte/store";
import {token} from "$lib/user";

export function api(path: string, auth = false, method = "GET", body: BodyInit | null = null): Promise<any> {
    return new Promise((resolve, reject) => {
        let options: RequestInit = {
            method: method,
            body: body
        };

        if (auth) options.headers = {
            Authorization: "Bearer " + get(token)
        };

        fetch("https://meteorclient.com/api/" + path, options)
            .then(rawRes => {
                rawRes.json().then(res => {
                    if (rawRes.status == 200) resolve(res);
                    else reject(res.error);
                });
            })
            .catch(reason => reject(reason));
    });
}

export function fetchJson(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => {
                res.json()
                    .then(json => resolve(json))
                    .catch(reason => reject(reason));
            })
            .catch(reason => reject(reason));
    });
}
