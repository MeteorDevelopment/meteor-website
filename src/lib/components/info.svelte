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
            <a href="https://adfoc.us/81926897739205" target="_blank" class="button" ><img src="/icons/download.svg" alt="download" loading="lazy"/> Meteor Client[{getLatestVersion()} - #{stats.builds[getLatestVersion()]}]</a>
            <div class="READ-IT">
                <img class="mirror arrow" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGJrbnF3aGx2Z2x4eDJ1ZnFzMjh4YndvNjY2MDIwdmE3bzV3cDMyYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/YckWAcjkSZ66d5P6Fh/giphy.gif" loading="lazy" alt="-->"/>
                <p>If you're looking for <span class="emphasize">OLDER VERSIONS</span> of Meteor, read <a href="/faq/old-versions">this</a>.</p>
                <img class="arrow" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGJrbnF3aGx2Z2x4eDJ1ZnFzMjh4YndvNjY2MDIwdmE3bzV3cDMyYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/YckWAcjkSZ66d5P6Fh/giphy.gif" loading="lazy" alt="<--"/>
            </div>
            <a href="/api/downloadBaritone" target="_blank" class="button"><img src="/icons/download.svg" loading="lazy" alt="download" /> *Baritone [{stats.baritoneMcVersion}]</a>
        </div>
        <p>* Baritone is our <a href="https://github.com/MeteorDevelopment/baritone">fork</a> which was previously included in Meteor itself.<br/> If you want the most up to date version, or want help with Baritone go to the <a href="https://github.com/cabaletta/baritone">official sources</a>.</p>
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

    .READ-IT {
        font-size: 5rem;
        display: flex;
        align-items: center;
    }
    .mirror {
        transform: scaleX(-1);
    }

    .arrow {
        width: 300px;
        aspect-ratio: 1 / 1;
    }

    .emphasize {
        font-weight: 900;
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
