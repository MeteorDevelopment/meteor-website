<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";
    import { browser } from "$app/environment";
    import { token } from "$lib/user";
    import { goto } from "$app/navigation";
    import { api } from "$lib/api";

    let newEmail: string;
    let error: HTMLSpanElement;
    let sent = false;

    function submit() {
        error.textContent = "";

        api("account/changeEmail?email=" + newEmail, true, "POST")
            .then(() => sent = true)
            .catch(reason => error.textContent = reason);
    }

    $: if (browser && !$token) goto("/login");
</script>

<Navbar/>

{#if sent}
    <div class="container">
        <div>
            <p>We have sent you a confirmation email.</p>
        </div>
    </div>
{:else}
    <form on:submit|preventDefault={submit}>
        <h1>Change Email</h1>

        <label for="newEmail" class="form-label"><b>New Email</b></label>
        <!-- svelte-ignore a11y-autofocus -->
        <input bind:value={newEmail} type="email" placeholder="New Email" id="newEmail" name="newEmail" required autofocus>

        <span bind:this={error} class="error"></span>

        <button type="submit" class="form-button">Change</button>
    </form>
{/if}

<!-- svelte-ignore css-unused-selector -->
<style>
    @import "form.css";
</style>
