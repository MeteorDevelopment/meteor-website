<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";
    import { browser } from "$app/env";
    import { token } from "$lib/user";
    import { goto } from "$app/navigation";
    import { api } from "$lib/api";

    let email: string;
    let error: HTMLSpanElement;
    let sent = false;
    
    function submit() {
        error.textContent = "";

        api("account/forgotPassword?email=" + email, false, "POST")
            .then(() => sent = true)
            .catch(reason => error.textContent = reason);
    }

    $: if (browser && $token) goto("/account");
</script>

<Navbar />

{#if sent}
    <div class="container">
        <div>
            <p>We have sent you a confirmation email.</p>
        </div>
    </div>
{:else}
    <form on:submit|preventDefault={submit}>
        <h1>Forgot Password</h1>

        <label for="email" class="form-label"><b>Email</b></label>
        <!-- svelte-ignore a11y-autofocus -->
        <input bind:value={email} type="email" placeholder="Email" id="email" name="email" required autofocus>

        <span bind:this={error} class="error"></span>

        <button type="submit" class="form-button">Send Email</button>
    </form>
{/if}

<!-- svelte-ignore css-unused-selector -->
<style>
    @import "form.css";
</style>