<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";
    import { searchAddons, type Addon } from "$lib/addonts";
    import Pagination from "$lib/components/pagination.svelte";
    import AddonCard from "$lib/components/addonCard.svelte";

    export let page: number;
    export let pageCount: number;
    export let addons: Addon[];

    let searchText: string;

    async function performSearch() {
        [pageCount, addons] = await searchAddons(searchText, page);
    }

    function pageChange(e: CustomEvent<number>) {
        page = e.detail;
        
        window.history.pushState(page, "", page == 1 ? "/addons" : ("/addons?page=" + page));

        performSearch();
    }
</script>

<script lang="ts" context="module">
    import type { Load } from "@sveltejs/kit";

    export const load: Load = async ({ fetch, url }) => {
        let page = 1;

        let pageStr = url.searchParams.get("page");
        if (pageStr) {
            let p = parseInt(pageStr);
            if (p != NaN) page = p;
        }

        let [pageCount, addons] = await searchAddons("", page, fetch);

        return {
            props: {
                page: page,
                pageCount: pageCount,
                addons: addons
            }
        };
    };
</script>

<Navbar />

<div class="container">
    <div>
        <input type="text" placeholder="Addon Title" bind:value={searchText} on:input={performSearch}>

        <Pagination page={page} pageCount={pageCount} on:change={pageChange} />
        
        <div class="addons">
            {#each addons as addon}
            <AddonCard addon={addon} />
            {/each}
        </div>
        
        <Pagination page={page} pageCount={pageCount} on:change={pageChange} bottom />
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