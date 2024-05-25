<script lang="ts">
    import Centered from "$lib/components/centered.svelte";
    import Form from "$lib/components/form.svelte";
    import { api } from "$lib/api";
    import { browser } from "$app/environment";
    import { token } from "$lib/user";
    import { goto } from "$app/navigation";
    import { Turnstile } from 'svelte-turnstile';

    let username: string;
    let email: string;
    let password: string;
    let cfToken: string;
    let error: HTMLSpanElement;

    let sent = false;

    function onTurnstileError() {
        error.textContent = "Captcha failed, please try again.";
    }

    function onTurnstileSuccess(event: CustomEvent) {
        cfToken = event.detail.token;
    }

    function submit() {
        error.textContent = "";

        const formData = new FormData()
        formData.append("username", username)
        formData.append("email", email)
        formData.append("password", password)
        formData.append("cf-token", cfToken)

        api("account/register", true, "POST", formData)
            .then(() => sent = true)
            .catch(reason => {
                error.attributeStyleMap.set("display", "block");
                error.textContent = reason;
            });
    }

    if (browser && $token) goto("/account");
</script>

<Centered>
    {#if sent}
        <h1>Done!</h1>
        <p>We have sent you a confirmation email.</p>
    {:else}
        <Form submit={submit}>
            <h1>Register</h1>

            <!-- svelte-ignore a11y-autofocus -->
            <input bind:value={username} type="text" placeholder="Username" id="username" name="username" required autofocus>

            <input bind:value={email} type="email" placeholder="Email" id="email" name="email" required>

            <input bind:value={password} type="password" placeholder="Password" id="password" name="password" required>

            <Turnstile
                    id="captcha"
                    siteKey="1x00000000000000000000AA"
                    theme="light"
                    on:turnstile-callback={onTurnstileSuccess}
                    on:turnstile-error={onTurnstileError}
                    on:turnstile-expired={onTurnstileError}
                    on:turnstile-timeout={onTurnstileError}
            />

            <button type="submit">Register</button>

            <p bind:this={error} class="error" style="display: none;" />

            <p>Have an account? <a href="/login">Login</a></p>
        </Form>
    {/if}
</Centered>
