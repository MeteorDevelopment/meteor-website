<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";
    import { browser } from "$app/environment";
    import { token } from "$lib/user";
    import { goto } from "$app/navigation";
    import { api } from "$lib/api";

    let password: string;
    let error: HTMLSpanElement;

    function submit() {
        error.textContent = "";

        api("account/deleteAccount?password=" + password, true, "POST")
            .then(() => goto("/login"))
            .catch(reason => error.textContent = reason);
    }

    $: if (browser && !$token) goto("/login");
</script>

<Navbar/>

<form on:submit|preventDefault={submit}>
    <h1>Delete Account</h1>
    <p>By deleting your account, all associated data will be permanently erased,
        your chat permissions in our Discord server will be revoked,
        and you will be logged out and redirected to the login page.<br>
        This action is irreversible. Please enter your password to confirm.</p>

    <label for="password" class="form-label"><b>Password</b></label>
    <!-- svelte-ignore a11y-autofocus -->
    <input bind:value={password} type="password" placeholder="Password" id="password" name="password" required autofocus>

    <span bind:this={error} class="error"></span>

    <button type="submit" class="form-button">Confirm</button>
</form>

<!-- svelte-ignore css-unused-selector -->
<style>
    @import "form.css";
</style>
