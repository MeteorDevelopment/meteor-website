<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";
    import { browser } from "$app/env";
    import { token } from "$lib/user";
    import { goto } from "$app/navigation";
    import { api } from "$lib/api";

    export let qToken: string | null = null;

    let oldPassword: string;
    let newPassword: string;
    let error: HTMLSpanElement;

    function submit() {
        error.textContent = "";

        let url = "account/changePassword";
        if (qToken) url += "Token?token=" + qToken + "&new=" + newPassword;
        else url += "?old=" + oldPassword + "&new=" + newPassword;

        api(url, qToken == null, "POST")
            .then(() => goto("/account"))
            .catch(reason => error.textContent = reason);
    }

    $: if (browser && !$token && !qToken) goto("/login");
</script>

<script lang="ts" context="module">
    import type { Load } from "@sveltejs/kit";

    export const load: Load = async ({ url }) => {
        return {
            props: {
                qToken: url.searchParams.get("token")
            }
        };
    };
</script>

<Navbar />

<form on:submit|preventDefault={submit}>
    <h1>Change Password</h1>

    {#if !qToken}
        <label for="oldPassword" class="form-label"><b>Old Password</b></label>
        <!-- svelte-ignore a11y-autofocus -->
        <input bind:value={oldPassword} type="password" placeholder="Old Password" id="oldPassword" name="oldPassword" required autofocus={qToken == null}>
    {/if}
    
    <label for="newPassword" class="form-label"><b>New Password</b></label>
    <!-- svelte-ignore a11y-autofocus -->
    <input bind:value={newPassword} type="password" placeholder="New Password" id="newPassword" name="newPassword" required autofocus={qToken != null}>

    <span bind:this={error} class="error"></span>

    <button type="submit" class="form-button">Change</button>
</form>

<!-- svelte-ignore css-unused-selector -->
<style>
    @import "form.css";
</style>