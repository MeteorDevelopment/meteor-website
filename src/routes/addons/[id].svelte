<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";
    import Footer from "$lib/components/footer.svelte";
    import { type Addon, getDevelopersHtml } from "$lib/addonts";
    import { formatDistance } from "date-fns";
    
    export let addon: Addon;
    export let markdown: string;
</script>

<script lang="ts" context="module">
    import type { Load } from "@sveltejs/kit";
    import { getAddon } from "$lib/addonts";

    export const load: Load = async ({ params, fetch }) => {
        let addon = await getAddon(params.id, fetch);
        let markdown = await (await fetch("/markdown", { method: "POST", body: addon.markdown })).text();

        return {
            props: {
                addon,
                markdown
            }
        };
    };
</script>

<Navbar />

<div class="container">
    <div>
        <div class="card">
            <div class="header">
                <img src={addon.icon} alt="icon" class="logo">
                <h1>{addon.title}</h1>
            </div>
            <div class="developers">
                <span>{@html getDevelopersHtml(addon)}</span>
            </div>

            <div class="stats">
                <span><img src="/icons/calendar.svg" alt="calendar" class="icon"> Created {formatDistance(addon.createdAt, new Date(), { addSuffix: true })}</span>
                <span><img src="/icons/refresh.svg" alt="refresh" class="icon"> Updated {formatDistance(addon.updatedAt, new Date(), { addSuffix: true })}</span>

                <span style="white-space: nowrap;"><img src="/icons/downloads.svg" alt="downloads" class="icon"> <b>{addon.downloadCount}</b> downloads</span>
                <span><img src="/icons/meteor.svg" alt="meteor" class="icon"><b>Meteor:</b> {addon.meteorVersions.join(" ")}</span>
            </div>

            <hr class="md-hr">
            <p>{addon.description}</p>

            <div class="download">
                <a href={addon.download} class="button"><img src="/icons/download.svg" alt="download"> Download {addon.version}</a>
                
                <div class="links">
                    <a href={addon.website} target="_blank" class="button"><img src="/icons/website.svg" alt="website"></a>
                    <a href={addon.source} target="_blank" class="button"><img src="/icons/source.svg" alt="source"></a>
                </div>
            </div>
        </div>

        <div class="card">
            {@html markdown}
        </div>
    </div>
</div>

<Footer />

<!-- svelte-ignore css-unused-selector -->
<style>
    @import "markdown.css";

    .container > div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        
        width: 100%;
    }

    .card {
        background-color: rgb(240, 240, 240);
        border-radius: 0.375rem;
        box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.2);

        padding: 1rem;
    }

    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
    
    h1 {
        color: black;
        text-align: center;
    }

    .logo {
        width: 8rem;
    }

    .developers {
        display: flex;
        justify-content: center;
        gap: 0.5rem;

        margin-top: -1rem;
        margin-bottom: 1rem;
    }

    .stats {
        display: flex;
        justify-content: space-evenly;

        margin-bottom: 1rem;
    }

    span {
        display: flex;
        align-items: center;
        gap: 0.2rem;

        color: rgb(75, 75, 75);
        font-size: 0.8rem;
    }

    .icon {
        width: 1rem;
        height: 1rem;
    }

    .download {
        display: flex;
        justify-content: center;
        gap: 1rem;
        
        margin-top: 1rem;
    }
    
    .links {
        display: flex;
        gap: 0.5rem;
    }

    .download img {
        width: 1.5rem;
        height: 1.5rem;
    }

    .button {
        flex: 1;
    }

    @media screen and (max-width: 1100px) {
        .header {
            flex-direction: column;
            gap: 0rem;
        }

        h1 {
            font-size: 3rem;
            margin-top: -1rem;
        }

        .developers {
            margin-top: 0;
        }

        .stats {
            display: grid;
            grid-template-columns: auto auto;
        }

        .download {
            flex-direction: column;
        }

        :global(img) {
            max-width: 100%;
        }
    }
</style>