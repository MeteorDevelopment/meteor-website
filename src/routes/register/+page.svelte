<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte"
    import { api } from "$lib/api"
    import { browser } from "$app/environment"
    import { token } from "$lib/user"
    import { goto } from "$app/navigation"
    import { Turnstile } from "svelte-turnstile"

    let username = $state<string>("")
    let email = $state<string>("")
    let password = $state<string>("")
    let cfToken = $state<string>("")
    let errorMessage = $state<string>("")

    let sent = $state<boolean>(false)

    function onTurnstileError() {
        errorMessage = "Captcha failed, please try again."
    }

    function onTurnstileSuccess(event: CustomEvent) {
        cfToken = event.detail.token
    }

    function handleSubmit(event: SubmitEvent) {
        event.preventDefault()
        errorMessage = ""

        const formData = new FormData()
        formData.append("username", username)
        formData.append("email", email)
        formData.append("password", password)
        formData.append("cf-token", cfToken)

        api("account/register", true, "POST", formData)
            .then(() => (sent = true))
            .catch(reason => (errorMessage = reason))
    }

    $effect(() => {
        if (browser && $token) goto("/account")
    })
</script>

<Navbar hideProfile/>

{#if sent}
    <div class="container">
        <div>
            <p>We have sent you a confirmation email.</p>
        </div>
    </div>
{:else}
    <form onsubmit={handleSubmit}>
        <h1>Register</h1>

        <label for="username" class="form-label"><b>Username</b></label>
        <!-- svelte-ignore a11y_autofocus -->
        <input
            bind:value={username}
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            required
            autofocus
        />

        <label for="email" class="form-label"><b>Email</b></label>
        <input bind:value={email} type="email" placeholder="Email" id="email" name="email" required/>

        <label for="password" class="form-label"><b>Password</b></label>
        <input bind:value={password} type="password" placeholder="Password" id="password" name="password" required/>

        <p class="form-label"><b>Captcha</b></p>
        <Turnstile
            widgetId="captcha"
            siteKey="0x4AAAAAAAH2MXj1b8rpN6cf"
            theme="light"
            on:turnstile-callback={onTurnstileSuccess}
            on:turnstile-error={onTurnstileError}
            on:turnstile-expired={onTurnstileError}
            on:turnstile-timeout={onTurnstileError}
        />

        {#if errorMessage}
            <span class="error">{errorMessage}</span>
        {/if}

        <button type="submit" class="form-button">Register</button>

        <div class="footer">
            <p><i class="hide">Have an account? </i><a href="/login">Login</a></p>
            <p><i class="hide">Forgot your password? </i><a href="/forgotPassword">Reset Password</a></p>
        </div>
    </form>
{/if}

<style>
    @import "form.css";
</style>
