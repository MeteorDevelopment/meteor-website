<script lang="ts">
    import Ad from "$lib/components/ad.svelte";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    let timer = 5;

    onMount(() => {
        const interval = setInterval(() => {
            //timer--;

            if (timer == 0) {
                if ($page.url.searchParams.has("devBuild"))
                    goto("/api/download?devBuild=latest");
                else
                    goto("/api/download");

                clearInterval(interval);
            }
        }, 1000);
    });
</script>

<div>
    <Ad />

    {#if timer > 1}
        <p>Download will start in {timer} seconds</p>
    {:else if timer > 0}
        <p>Download will start in 1 second</p>
    {:else}
        <p>Download started</p>
    {/if}

    <p class="small">* If the timer or download does not start then try disabling your ad blocker. Some of them (especially Opera GX) aggressively block JavaScript.</p>

    <Ad />
</div>

<style>
    div {
        margin: 2rem;
        text-align: center;
    }

    p {
        margin: 2rem 0;
    }

    .small {
        font-size: 0.75rem;
    }
</style>