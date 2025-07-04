<script lang="ts">
    import type { TransitionConfig } from "svelte/transition";
    import { cubicOut } from "svelte/easing";
    import { user } from "$lib/user";
    import { browser } from "$app/environment";
    import { clickOutside } from "svelte-use-click-outside";

    export let hideProfile = false;

    let hamburger: boolean;
    let hamburgerOpen: boolean;

    function slide(node: Element, options?: any): TransitionConfig {
        return {
            delay: 0,
            duration: 400,
            easing: cubicOut,
            css: (t, u) => `transform: translateX(${(1 - t) * 100}%)`
        };
    }

    if (browser) {
        let query = window.matchMedia("(max-width: 1100px)");
        hamburger = query.matches;

        query.addEventListener("change", (query) => hamburger = query.matches);
    }
</script>

<svelte:head>
    <link rel="stylesheet" href="/css/hamburgers.css">
</svelte:head>

<nav>
    <a href="/" class="icon-link"><img src="/icon.webp" alt="icon" class="icon"></a>

    {#if hamburger}
        <button on:click={() => hamburgerOpen = !hamburgerOpen} use:clickOutside={() => hamburgerOpen = false} class="hamburger hamburger--collapse" class:is-active={hamburgerOpen} type="button">
            <span class="hamburger-box"><span class="hamburger-inner"></span></span>
        </button>

        {#if hamburgerOpen}
            <div class="nav-links hamburger-menu" transition:slide>
                {#if !hideProfile}
                    {#if $user}
                        <a class="user" href="/account">
                            <img src={$user.discordAvatar ? $user.discordAvatar : "/empty-profile.webp"} alt="profile"/>
                        </a>
                    {:else}
                        <a href="/login"><button>Login</button></a>
                    {/if}
                {/if}

                <a href="/">Home</a>
                <a href="/faq">FAQ</a>
                <a href="/github" target="_blank">GitHub</a>
            </div>
        {/if}
    {:else}
        <div class="nav-links">
            <a href="/">Home</a>
            <a href="/faq">FAQ</a>
            <a href="/github" target="_blank">GitHub</a>
        </div>

        {#if hideProfile}
            <div></div>
        {:else}
            {#if $user}
                <a class="user" href="/account">
                    <p>{$user.username}</p>
                    <img src={$user.discordAvatar ? $user.discordAvatar : "/empty-profile.webp"} alt="profile"/>
                </a>
            {:else}
                <a href="/login"><button>Login</button></a>
            {/if}
        {/if}
    {/if}
</nav>

<style>
    nav {
        background-color: var(--accent);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    a {
        text-decoration: none;
    }

    .icon {
        margin-left: 1rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        width: 2.5rem;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
    }

    .icon-link {
        display: inline-block;
        height: 72px;
    }

    .user {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        min-height: 4.5rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        color: var(--text-primary);
        text-decoration: none;
    }

    .user:hover {
        background: rgba(0, 0, 0, 0.15);
    }

    .user img {
        width: 2.5rem;
        border-radius: 50%;
    }

    .nav-links {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }

    .nav-links a {
        color: var(--text-secondary);
    }

    .nav-links a:hover {
        text-shadow: rgba(0, 0, 0, 0.44) 1px 1px 4px;
    }

    button {
        margin-right: 1rem;
    }

    .hamburger {
        background-image: none;
        padding: 0 !important;
        box-shadow: none;
        margin-right: 1rem !important;
        transform: translateY(4px);
    }

    .hamburger-menu {
        position: fixed;
        flex-direction: column;
        justify-content: start;
        top: 4.5rem;
        bottom: 0;
        right: 0;
        z-index: 1;
        padding: 1rem;
        gap: 1rem;
        background-color: var(--accent);
        overflow: clip;
    }

    @media screen and (max-width: 1100px) {
        button {
            margin-right: 0;
        }
    }
</style>
