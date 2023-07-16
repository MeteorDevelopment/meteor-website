<script lang="ts">
    import type { Stats } from "$lib/stats";

    export let stats: Stats;

    function prettyNumber(x: number) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
</script>

<div class="container">
    <div>
        <h2>Downloads</h2>
        <p>Count: {prettyNumber(stats.downloads)}</p>
        <p>Online Players: {prettyNumber(stats.onlinePlayers)}</p>

        <div class="buttons">
            <a href="/download" target="_blank" class="button"><img src="/icons/download.svg" alt="download"> Release {stats.version} [{stats.mcVersion}]</a>
            <a href="https://adfoc.us/8192681" target="_blank" class="button"><img src="/icons/download.svg" alt="download"> Dev Build {stats.devBuildVersion} [{stats.devBuildMcVersion}]</a>
        </div>
    </div>
</div>

<style>
    .buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin-top: 1rem;
    }

    .button {
        color: var(--text-primary);
        min-width: 20rem;
    }

    @media screen and (max-width: 1100px) {
        .button {
            min-width: 16rem;
        }
    }

    @media screen and (max-width: 300px) {
        .button {
            min-width: 12rem;
        }
    }
</style>
