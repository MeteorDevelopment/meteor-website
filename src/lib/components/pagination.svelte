<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let page: number;
    export let pageCount: number;
    export let bottom = false;

    const dispatch = createEventDispatcher();

    function click(buttonPage: number) {
        if (page != buttonPage) dispatch("change", buttonPage);
    }
</script>

{#if pageCount > 1}
    <div class:bottom>
        {#each Array(pageCount) as _, i}
            <button class:current={i + 1 != page} on:click={() => click(i + 1)}>{i + 1}</button>
        {/each}
    </div>
{/if}

<style>
    div {
        display: flex;
        justify-content: center;
        gap: 0.5rem;

        margin-bottom: 0.75rem;
    }

    .bottom {
        margin-bottom: 0;
        margin-top: 0.75rem;
    }

    button {
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        padding: 0;
    }

    .current {
        background-image: none;
        color: black;
    }
</style>