<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";
    import { browser } from "$app/environment";
    import { api } from "$lib/api";
    import { goto } from "$app/navigation";
    import type { PageData } from './$types';

    let { data } = $props<{data: PageData}>();
    let error = $state<string | null>(null);

    if (browser) {
        if (!data.qToken) error = "Invalid token.";
        else {
            api("account/confirmChangeEmail?token=" + data.qToken)
                .then(() => {
                    setTimeout(() => goto("/account"), 2500);
                })
                .catch(reason => error = reason);
        }
    }
</script>

<Navbar/>

<div class="container">
    <div>
        <p>{error ? error : "New email confirmed, redirecting to account dashboard."}</p>
    </div>
</div>
