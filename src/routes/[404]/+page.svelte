<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";
</script>

<Navbar />

<div>
    <img src="icon.png" alt="icon" />
    <h1>Page not found</h1>
</div>

<style>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4rem;
        margin-top: 4rem;
    }

    img {
        width: 10rem;
    }

    h1 {
        color: black;
    }
</style>
