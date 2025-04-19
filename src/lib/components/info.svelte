<script lang="ts">
    import type { Stats } from "$lib/stats";
    import semver from "semver";

    export let stats: Stats;

    function prettyNumber(x: number) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    function getLatestVersion(): string {
        let latest = "0.0.0";

        for (const version of Object.keys(stats.builds)) {
            if (semver.gt(version, latest)) {
                latest = version;
            }
        }

        return latest;
    }
</script>

<div class="container">
    <div>
        <h2>Downloads</h2>
        <p>Count: {prettyNumber(stats.downloads)}</p>
        <p>Online Players: {prettyNumber(stats.onlinePlayers)}</p>

        <div class="buttons">
            <a href="https://adfoc.us/81926897739205" target="_blank" class="button"><img src="/icons/download.svg" alt="download"> Meteor Client [{getLatestVersion()} - #{stats.builds[getLatestVersion()]}]</a>
            <p>If you're looking for older versions of Meteor, check out the <a href="/archive">archive</a>.</p>
            <a href="/api/downloadBaritone" target="_blank" class="button"><img src="/icons/download.svg" alt="download"> *Baritone [{stats.baritoneMcVersion}]</a>
        </div>

        <p>* Baritone is our <a href="https://github.com/MeteorDevelopment/baritone">fork</a> which was previously included in Meteor itself. If you want the most up to date version, or want help with Baritone go to the <a href="https://github.com/cabaletta/baritone">official sources</a>.</p>
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
