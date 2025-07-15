<script lang="ts">
    import Logo from "$lib/components/logo.svelte"
</script>

<div class="main">
    <div class="inside">
        <Logo />
        <div class="buttons">
            <a href="/discord" target="_blank" class="button" style="background-color: var(--discord);"><img src="icons/discord.svg" alt="discord" /> Discord</a>
            <a href="/donate" target="_blank" class="button" style="background-color: var(--paypal);"><img src="icons/paypal.svg" alt="paypal" /> Donate</a>
        </div>
    </div>
</div>

<style>
    .main {
        background-image: url("/background.webp");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        text-align: center;
        padding: 10rem 0;
    }

    .inside {
        background-color: rgba(0, 0, 0, 0.5);
        display: inline-block;
        backdrop-filter: blur(0.1rem);
        padding: 2rem;
        border-radius: 5px;
    }

    .buttons {
        display: flex;
        justify-content: center;
        gap: 5rem;
        margin-top: 1rem;
    }

    a {
        background-image: none;
    }

    @media screen and (max-width: 1100px) {
        .buttons {
            gap: 1rem;
        }
    }

    @media screen and (max-width: 300px) {
        .buttons {
            flex-direction: column;
        }
    }
</style>
