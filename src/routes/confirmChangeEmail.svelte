<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";
    import { browser } from "$app/env";
    import { api } from "$lib/api";
    import { goto } from "$app/navigation";

    export let qToken: string | null = null;
    let error: string | null = null;

    if (browser) {
        if (!qToken) error = "Invalid token.";
        else {
            api("account/confirmChangeEmail?token=" + qToken)
                .then(() => {
                    setTimeout(() => goto("/account"), 2500);
                })
                .catch(reason => error = reason);
        }
    }
</script>

<script lang="ts" context="module">
    import type { Load } from "@sveltejs/kit";

    export const load: Load = async ({ url }) => {
        return {
            props: {
                qToken: url.searchParams.get("token")
            }
        };
    };
</script>

<Navbar />

<div class="container">
    <div>
        <p>{error ? error : "New email confirmed, redirecting to account dashboard."}</p>
    </div>
</div>