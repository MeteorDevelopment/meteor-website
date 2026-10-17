<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte"
    import type { PageData } from "./$types"

    let { data } = $props<{ data: PageData }>()
</script>

<Navbar />

<div class="container">
    <div>
        <h2>Version Archive</h2>

        <hr />
        <p class="warning">
            These versions are archived and NOT supported, you will NOT receive any help when using these versions!
        </p>
        <p class="warning-small">See the <a href="/faq/old-versions">FAQ</a> for more details.</p>
        <hr />

        <div class="columns">
            <div class="groups">
                <h3 class="title">Meteor Client</h3>
                <hr />

                {#each Object.keys(data.builds) as group (group)}
                    <h3>{group}</h3>
                    <ul>
                        {#each data.builds[group] as build (build.version)}
                            <li>
                                <a href={`https://meteorclient.com/api/download?version=${build.version}`}>{build.version} - {build.number}</a>
                            </li>
                        {/each}
                    </ul>
                    <hr />
                {/each}
            </div>

            {#if data.baritone.length}
                <div class="groups">
                    <h3 class="title">Baritone</h3>
                    <hr />

                    <ul>
                        {#each data.baritone as version (version)}
                            <li>
                                <a href={`https://meteorclient.com/api/downloadBaritone?version=${version}`}>{version}</a>
                            </li>
                        {/each}
                    </ul>
                </div>
            {/if}
        </div>
    </div>
</div>

<style>
    hr {
        margin: 1rem -1rem;
        border: 0;
        background-color: black;
        height: 1px;
    }

    .warning {
        font-size: 2.25rem;
        color: red;
    }

    .warning-small {
        font-size: 1.75rem;
        color: red;
    }

    .warning-small a {
        color: darkred;
    }

    .columns {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 6rem;
    }

    @media screen and (max-width: 700px) {
        .columns {
            flex-direction: column;
            align-items: center;
            gap: 2rem;
        }
    }

    .groups {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: fit-content;
    }

    .groups hr:last-child {
        display: none;
    }

    h3 {
        font-size: 2rem;
    }

    .title {
        font-size: 2.5rem;
        text-align: center;
    }

    ul {
        margin-left: 2rem;
    }

    li {
        width: fit-content;
        font-size: 1.33rem;
        margin: 0.5rem 0;
    }
</style>
