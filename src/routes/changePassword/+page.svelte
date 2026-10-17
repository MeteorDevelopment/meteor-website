<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte"
    import { browser } from "$app/environment"
    import { token } from "$lib/user"
    import { goto } from "$app/navigation"
    import { api } from "$lib/api"
    import type { PageData } from "./$types"

    let { data } = $props<{ data: PageData }>()

    let oldPassword = $state<string>("")
    let newPassword = $state<string>("")
    let errorMessage = $state<string>("")

    function handleSubmit(event: SubmitEvent) {
        event.preventDefault()
        errorMessage = ""

        const formData = new FormData()
        formData.append("new", newPassword)

        let url = "account/changePassword"
        if (data.qToken) {
            url += "Token"
            formData.append("token", data.qToken)
        } else formData.append("old", oldPassword)

        api(url, data.qToken == null, "POST", formData)
            .then(() => goto("/account"))
            .catch(reason => (errorMessage = reason))
    }

    $effect(() => {
        if (browser && !$token && !data.qToken) goto("/login")
    })
</script>

<Navbar/>

<form onsubmit={handleSubmit}>
    <h1>Change Password</h1>

    {#if !data.qToken}
        <label for="oldPassword" class="form-label"><b>Old Password</b></label>
        <!-- svelte-ignore a11y_autofocus -->
        <input
            bind:value={oldPassword}
            type="password"
            placeholder="Old Password"
            id="oldPassword"
            name="oldPassword"
            required
            autofocus={data.qToken == null}
        />
    {/if}

    <label for="newPassword" class="form-label"><b>New Password</b> <i>(8 to 72 characters)</i></label>
    <!-- svelte-ignore a11y_autofocus -->
    <input
        bind:value={newPassword}
        type="password"
        placeholder="New Password"
        id="newPassword"
        name="newPassword"
        minlength="8"
        maxlength="72"
        required
        autofocus={data.qToken != null}
    />

    {#if errorMessage}
        <span class="error">{errorMessage}</span>
    {/if}

    <button type="submit" class="form-button">Change</button>
</form>

<style>
    @import "form.css";
</style>
