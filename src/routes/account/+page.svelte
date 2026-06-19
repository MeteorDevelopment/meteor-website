<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte"
    import { refreshUser, token, user } from "$lib/user"
    import { goto } from "$app/navigation"
    import { browser } from "$app/environment"
    import { api, fetchJson } from "$lib/api"

    $effect(() => {
        if (browser && !$token) goto("/login")
    })

    let linkToken = $state<string | null>(null)

    function unlinkDiscord() {
        api("account/unlinkDiscord", true, "POST").then(() => refreshUser())
    }

    function linkDiscord() {
        api("account/generateDiscordLinkToken", true).then(res => (linkToken = res.token))
    }

    function removeMcAccount(uuid: string) {
        api("account/mcAccount?uuid=" + uuid, true, "DELETE").then(() => refreshUser())
    }

    function selectCape(id: string) {
        api("account/selectCape?cape=" + id, true, "POST").then(() => refreshUser())
    }

    function logout() {
        token.set(null)
    }

    let customCape = $state<HTMLInputElement | null>(null)
    let customCapeError = $state<string>("")

    function submit() {
        if (!customCape || !customCape.files || !customCape.files.length) return

        let form = new FormData()
        form.append("file", customCape.files[0])

        customCapeError = ""

        api("account/uploadCape", true, "POST", form)
            .then(() => refreshUser())
            .catch(reason => (customCapeError = reason))
    }
</script>

<Navbar />

{#if $user}
    <div class="container">
        <div>
            <h1>Manage Account</h1>

            <!-- Discord -->
            <div class="section">
                <h2>Discord</h2>
                {#if $user.discordId}
                    <div class="profile">
                        <img src={$user.discordAvatar} alt="profile" />
                        <b>{$user.discordName}</b>
                    </div>
                    <div class="buttons">
                        <button onclick={unlinkDiscord}>Unlink Discord</button>
                    </div>
                {:else if linkToken}
                    <p>To link your Discord, dm Meteor Bot:</p>
                    <p><b>/link token:{linkToken}</b></p>
                    <p>The command will only be valid for next 5 minutes.</p>
                {:else}
                    <div class="buttons">
                        <button onclick={linkDiscord}>Link Discord</button>
                    </div>
                {/if}
            </div>

            <!-- Minecraft -->
            <div class="section">
                <h2>Minecraft</h2>
                <ul>
                    {#each $user.mcAccounts as uuid (uuid)}
                        {#await fetchJson("https://corsjangsessionserver.b-cdn.net/session/minecraft/profile/" + uuid)}
                            <li>
                                <img src="https://mc-heads.net/head/MHF_Steve/32" alt="head" />Steve
                                <button>Remove</button>
                            </li>
                        {:then res}
                            <li>
                                <img src={"https://mc-heads.net/head/" + uuid + "/32"} alt="head" />{res.name}
                                <button onclick={() => removeMcAccount(uuid)}>Remove</button>
                            </li>
                        {:catch _err}
                            <li>Failed to load account</li>
                        {/await}
                    {/each}
                </ul>
                <div class="buttons">
                    <a class="button" href="/addMcAccount">Add Account</a>
                </div>
            </div>

            <!-- Cape -->
            <div class="section">
                <h2>Cape</h2>
                <ul>
                    {#each $user.capes as cape (cape.id)}
                        <li>
                            {#if cape.url !== ""}
                                <!-- Quick hack to disable browser cache -->
                                <img
                                    src={cape.url + "?_rand=" + new Date().getTime()}
                                    alt="cape"
                                    style="width: 10rem;"
                                />
                            {/if}

                            {#if cape.current}
                                <b>{cape.title}</b>
                            {:else}
                                {cape.title}
                                <button onclick={() => selectCape(cape.id)} style="background-color: gray;"
                                    >Select
                                </button>
                            {/if}
                        </li>
                    {/each}
                </ul>
                {#if $user.canHavaCustomcape}
                    <form
                        onsubmit={(event) => {
                            event.preventDefault()
                            submit()
                        }}
                    >
                        <label for="upload-cape" class="form-label"><b>Upload custom cape</b></label>
                        <input
                            bind:this={customCape}
                            type="file"
                            accept=".png"
                            id="upload-cape"
                            name="upload-cape"
                            required
                        />

                        {#if customCapeError}
                            <span class="error">{customCapeError}</span>
                        {/if}

                        <button type="submit" class="form-button" style="width: 100%;">Upload </button>
                    </form>
                {/if}
            </div>

            <!-- Controls -->
            <div class="section">
                <h2>Controls</h2>
                <div class="buttons">
                    <button onclick={logout}>Logout</button>
                    <a class="button" href="/changeUsername">Change Username</a>
                    <a class="button" href="/changeEmail">Change Email</a>
                    <a class="button" href="/changePassword">Change Password</a>
                    <a class="button" href="/deleteAccount">Delete Account</a>
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    h1 {
        color: black;
    }

    .section {
        box-shadow: 0 0 50px 1px rgb(0 0 0 / 25%);
        border-radius: 0.375rem;
        border: 1px solid #00000000;
        padding: 2rem;
        margin: 3rem 0;
    }

    .section:hover {
        border: 1px solid var(--accent);
    }

    .profile {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }

    .profile img {
        width: 2rem;
    }

    .buttons {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 1rem;
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    li {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }

    li button {
        background-color: rgb(206, 0, 0);
        background-image: none;
        padding: 0.5rem;
        font-size: 1rem;
    }

    .error {
        color: red;
        margin-bottom: 1rem;
    }
</style>
