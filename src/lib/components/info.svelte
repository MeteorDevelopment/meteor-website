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
            <a href="/download?devBuild" target="_blank" class="button"><img src="/icons/download.svg" alt="download"> Dev Build {stats.devBuildVersion} [{stats.devBuildMcVersion}]</a>
            <a href="/api/downloadBaritone" target="_blank" class="button"><img src="/icons/download.svg" alt="download"> *Baritone [{stats.baritoneMcVersion}]</a>
        </div>

        <p>* Baritone is our <a href="https://github.com/MeteorDevelopment/baritone">fork</a> which was previously included in Meteor itself. If you want the most up to date version, or want help with Baritone go to the <a href="https://github.com/wagyourtail/baritone">official sources</a>.</p>
    </div>
</div>

<style>
    .buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin: 1rem 0;
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
