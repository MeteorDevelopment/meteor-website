<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";
    import { browser } from "$app/environment";
    import { token } from "$lib/user";
    import { goto } from "$app/navigation";
    import { api } from "$lib/api";
    import type { PageData } from './$types';

    let { data } = $props<{data: PageData}>();

    let oldPassword = $state<string>("");
    let newPassword = $state<string>("");
    let error: HTMLSpanElement;

    function handleSubmit(event: SubmitEvent) {
        event.preventDefault();
        error.textContent = "";

        let url = "account/changePassword";
        if (data.qToken) url += "Token?token=" + data.qToken + "&new=" + newPassword;
        else url += "?old=" + oldPassword + "&new=" + newPassword;

        api(url, data.qToken == null, "POST")
            .then(() => goto("/account"))
            .catch(reason => error.textContent = reason);
    }

    $effect(() => {
        if (browser && !$token && !data.qToken) goto("/login");
    });
</script>

<Navbar/>

<form onsubmit={handleSubmit}>
    <h1>Change Password</h1>

    {#if !data.qToken}
        <label for="oldPassword" class="form-label"><b>Old Password</b></label>
        <!-- svelte-ignore a11y_autofocus -->
        <input bind:value={oldPassword} type="password" placeholder="Old Password" id="oldPassword" name="oldPassword" required autofocus={data.qToken == null}>
    {/if}

    <label for="newPassword" class="form-label"><b>New Password</b></label>
    <!-- svelte-ignore a11y_autofocus -->
    <input bind:value={newPassword} type="password" placeholder="New Password" id="newPassword" name="newPassword" required autofocus={data.qToken != null}>

    <span bind:this={error} class="error"></span>

    <button type="submit" class="form-button">Change</button>
</form>

<!-- svelte-ignore css_unused_selector -->
<style>
    @import "form.css";
</style>
