<script lang="ts">
    import Waves from "$lib/components/waves.svelte";
</script>

<Waves/>
<div class="container">
    <div>
        <h2>Meteor PvP</h2>
        <p>The Meteor PvP server is a 1.16 style combat server that features anchor, bed, and crystal PvP styles accessible to players on versions 1.14 and newer. This server also features a custom kit and duel plugin. The Nether and Overworld dimensions are also available as well as the numerous arenas in the said dimensions.</p>
        <!-- svelte-ignore a11y-missing-attribute -->
        <iframe src="https://namemc.com/server/pvp.meteorclient.com/embed"></iframe>
    </div>
</div>

<style>
    .container {
        background-color: #3e3e3e;
    }

    .container > div {
        width: 75%;
    }

    h2 {
        color: var(--text-primary);
    }

    p {
        color: var(--text-secondary);
        margin-bottom: 2rem;
    }

    iframe {
        width: 100%;
        border: none;
    }

    @media screen and (max-width: 1100px) {
        .container > div {
            width: 90%;
        }
    }
</style>
