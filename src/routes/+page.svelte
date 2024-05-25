<script lang="ts">
    import Link from "$lib/components/link.svelte";
    import Button from "$lib/components/button.svelte";
    import {page} from "$app/stores";
</script>

<!-- Download -->
<div>
    <h2>Getting Started</h2>

    <p>
        Meteor is a <span style="color: var(--text-highlight)">Minecraft Fabric utility mod</span> designed to be used on anarchy servers.
        It is not intended to be used in order to gain an unfair advantage on servers that do <span style="color: var(--warning)">not</span> permit its use.
        Meteor has a <Link location="/discord" color="discord" newTab>Discord Server</Link> which can be used to follow updates and get support.
    </p>

    <br>

    <div style="display: flex; flex-flow: row nowrap; justify-content: space-between; align-items: center;">
        <div style="flex: 1;">
            <p>To get started, visit our download guide in the <Link location="/faq">FAQ</Link>.</p>
            <br>
            <p>Alternatively, if you know what you’re doing, use the links to download your preferred version.</p>
            <br>
            <p>Meteor supports a number of integrations with <Link location="https://github.com/MeteorDevelopment/baritone" newTab>Baritone</Link>, if you would like to use them, you must install it separately.</p>
        </div>

        <div style="flex: 1; display: flex; flex-flow: column nowrap; align-items: end; gap: 15px; margin-right: var(--spacing); text-align: center;">
            <Button location="/download" style="font-size: 1.25rem; width: 60%;">Release ({$page.data.stats.mcVersion})</Button>
            <Button location="/download?devBuild=latest" style="font-size: 1.25rem; width: 60%;">Development ({$page.data.stats.devBuildMcVersion})</Button>
            <Button location="/api/downloadBaritone" style="font-size: 1.25rem; width: 60%;">Baritone ({$page.data.stats.baritoneMcVersion})</Button>
        </div>
    </div>
</div>

<!-- Contributing -->
<div>
    <h2>Contributing</h2>

    <p>
        If you enjoy using <span style="color: var(--text-highlight);">Meteor</span>, please consider making a <Link location="/donate" color="highlight">one time donation</Link> to support the creators.
        Donating will give you a <span style="color: var(--text-highlight);">customisable in-game cape</span> (visible to other Meteor users) and access to an <span style="color: var(--text-highlight);">exclusive channel</span> in our <Link location="/discord" color="discord" newTab>Discord Server</Link>.
        Thanks to everyone that has supported us with a <span style="color: var(--highlight);">donation!</span>
    </p>

    <br>

    <p>
        Meteor would not have been possible without all the pull requests made by the community.
        Thanks to everyone that has contributed with a <Link location="https://github.com/MeteorDevelopment/meteor-client/pulls?q=is%3Apr" newTab>pull request</Link>.
    </p>

    <a href="https://github.com/MeteorDevelopment/meteor-client/graphs/contributors">
        <img src="https://contrib.rocks/image?repo=MeteorDevelopment/meteor-client&columns=20" alt="contributors"
             style="display: block; width: 95%; margin: var(--spacing) auto 0 auto;"/>
    </a>
</div>

<!-- Showcase -->
<div>
    <h2>Showcase</h2>

    <iframe src="https://www.youtube.com/embed/e3foFwGsUfw" title="showcase"
            referrerpolicy="strict-origin-when-cross-origin"
            style="width: 100%; aspect-ratio: 16 / 9; border: white solid 2px; border-radius: 8px;"/>
</div>

<style lang="scss">
    h2 {
        margin-bottom: 10px;
    }
</style>
