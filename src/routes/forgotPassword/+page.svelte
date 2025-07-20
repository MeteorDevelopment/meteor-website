<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte"
    import { browser } from "$app/environment"
    import { token } from "$lib/user"
    import { goto } from "$app/navigation"
    import { api } from "$lib/api"

    let email = $state<string>("")
    let errorMessage = $state<string>("")
    let sent = $state(false)

    function handleSubmit(event: SubmitEvent) {
        event.preventDefault()
        errorMessage = ""

        api("account/forgotPassword?email=" + email, false, "POST")
            .then(() => (sent = true))
            .catch(reason => (errorMessage = reason))
    }

    $effect(() => {
        if (browser && $token) goto("/account")
    })
</script>

<Navbar/>

{#if sent}
    <div class="container">
        <div>
            <p>We have sent you a confirmation email.</p>
        </div>
    </div>
{:else}
    <form onsubmit={handleSubmit}>
        <h1>Forgot Password</h1>

        <label for="email" class="form-label"><b>Email</b></label>
        <!-- svelte-ignore a11y_autofocus -->
        <input bind:value={email} type="email" placeholder="Email" id="email" name="email" required autofocus/>

        {#if errorMessage}
            <span class="error">{errorMessage}</span>
        {/if}

        <button type="submit" class="form-button">Send Email</button>
    </form>
{/if}

<!-- svelte-ignore css_unused_selector -->
<style>
    @import "form.css";
</style>
