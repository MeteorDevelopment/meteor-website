<script lang="ts">
    import { browser } from "$app/environment";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    let timer = 5;

    onMount(() => {
        const w: any = window;
        (w.adsbygoogle = w.adsbygoogle || []).push({});
        (w.adsbygoogle = w.adsbygoogle || []).push({});

        const interval = setInterval(() => {
            timer--;

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
    {#if browser}
        <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-8546584413187411"
            data-ad-slot="5754111941"
            data-ad-format="auto"
            data-full-width-responsive="true">
        </ins>
    {/if}

    {#if timer > 1}
        <p>Download will start in {timer} seconds</p>
    {:else if timer > 0}
        <p>Download will start in 1 second</p>
    {:else}
        <p>Download started</p>
    {/if}

    {#if browser}
        <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-8546584413187411"
            data-ad-slot="5754111941"
            data-ad-format="auto"
            data-full-width-responsive="true">
        </ins>
    {/if}
</div>

<style>
    div {
        margin: 2rem;
        text-align: center;
    }

    p {
        margin: 2rem 0;
    }
</style>