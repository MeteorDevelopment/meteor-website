<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";
    import { api } from "$lib/api";
    import { browser } from "$app/environment";
    import { token } from "$lib/user";
    import { goto } from "$app/navigation";

    let username: string;
    let email: string;
    let password: string;
    let error: HTMLSpanElement;

    let sent = false;

    function submit() {
        error.textContent = "";

        api("account/register?username=" + username + "&email=" + email + "&password=" + password, true, "POST")
            .then(res => sent = true)
            .catch(reason => error.textContent = reason);
    }

    if (browser && $token) goto("/account");
</script>

<Navbar hideProfile/>

{#if sent}
    <div class="container">
        <div>
            <p>We have sent you a confirmation email.</p>
        </div>
    </div>
{:else}
    <form on:submit|preventDefault={submit}>
        <h1>Register</h1>

        <label for="username" class="form-label"><b>Username</b></label>
        <!-- svelte-ignore a11y-autofocus -->
        <input bind:value={username} type="text" placeholder="Username" id="username" name="username" required autofocus>

        <label for="email" class="form-label"><b>Email</b></label>
        <input bind:value={email} type="email" placeholder="Email" id="email" name="email" required>

        <label for="password" class="form-label"><b>Password</b></label>
        <input bind:value={password} type="password" placeholder="Password" id="password" name="password" required>

        <span bind:this={error} class="error"></span>

        <button type="submit" class="form-button">Register</button>

        <div class="footer">
            <p><i class="hide">Have an account? </i><a href="/login">Login</a></p>
            <p><i class="hide">Forgot your password? </i> <a href="/forgotPassword">Reset Password</a></p>
        </div>
    </form>
{/if}

<style>
    @import "form.css";
</style>
