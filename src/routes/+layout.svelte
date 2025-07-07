<script lang="ts">
    import { page } from "$app/state";

    let { children } = $props();
</script>

<svelte:head>
    {#if page.route.id !== "/privacy"}
        <meta name="google-adsense-account" content="ca-pub-8546584413187411">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8546584413187411" crossorigin="anonymous"></script>
    {/if}
</svelte:head>

{@render children()}
