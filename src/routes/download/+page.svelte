<script lang="ts">
    import { browser } from "$app/environment";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    let timer = 5;

    onMount(() => {
        const w: any = window;
        (w.adsbygoogle = w.adsbygoogle || []).push({});

        let i = setInterval(() => {
            timer--;

            if (timer == 0) {
                if ($page.url.searchParams.has("devBuild"))
                    goto("/api/download?devBuild=latest");
                else
                    goto("/api/download");
                document.getElementById("timer")!.innerText = "Download started";
                clearInterval(i);
            }
        }, 1000);
    });
</script>

<svelte:head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8546584413187411"crossorigin="anonymous"></script>
</svelte:head>

{#if browser}
    <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-8546584413187411"
        data-ad-slot="5754111941"
        data-ad-format="auto"
        data-full-width-responsive="true">
    </ins>
{/if}

<p id="timer">Download will start in {timer} seconds</p>

{#if browser}
    <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-8546584413187411"
        data-ad-slot="5754111941"
        data-ad-format="auto"
        data-full-width-responsive="true">
    </ins>
{/if}

<style>
    p {
        margin: 4rem;
        text-align: center;
    }
</style>
