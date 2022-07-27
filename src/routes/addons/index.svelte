<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";
    import { searchAddons, type Addon } from "$lib/addonts";
    import AddonCard from "$lib/components/addonCard.svelte";

    export let addons: Addon[];

    let searchText: string;

    async function performSearch() {
        addons = await searchAddons(searchText);
    }
</script>

<script lang="ts" context="module">
    import type { Load } from "@sveltejs/kit";

    export const load: Load = async ({ fetch }) => {
        return {
            props: {
                addons: await searchAddons("", fetch)
            }
        };
    };
</script>

<Navbar />

<div class="container">
    <div>
        <input type="text" placeholder="Addon Title" bind:value={searchText} on:input={performSearch}>

        <div class="addons">
            {#each addons as addon}
                <AddonCard addon={addon} />
            {/each}
        </div>
    </div>
</div>

<style>
    .container > div {
        width: 100%;
    }

    .addons {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>