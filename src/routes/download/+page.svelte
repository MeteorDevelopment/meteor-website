<script lang="ts">
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import Centered from "$lib/components/centered.svelte";
    import {goto} from "$app/navigation";
    import {redirect} from "@sveltejs/kit";

    let timer = 5;

    onMount(() => {
        const interval = setInterval(() => {
            timer--;

            if (timer == 0) {
                if ($page.url.searchParams.has("devBuild"))
                    goto("/api/download?devBuild=" + $page.url.searchParams.get("devBuild"));
                else
                    goto("/api/download");

                clearInterval(interval);
            }
        }, 1000);
    });
</script>

<Centered>
    {#if timer > 1}
        <h2>Download will start in {timer} seconds</h2>
    {:else if timer > 0}
        <h2>Download will start in 1 second</h2>
    {:else}
        <h2>Download started</h2>
    {/if}

    <p class="small">* If the timer or download does not start then try disabling your ad blocker. *</p>
    <p class="small">Some of them (especially Opera GX) aggressively block JavaScript.</p>
</Centered>

<style>
    h2 {
        margin-bottom: 3vh;
    }

    .small {
        font-size: 0.8rem;
    }
</style>
