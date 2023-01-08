<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";
    import { api } from "$lib/api";
    import { browser } from "$app/environment";
    import { token } from "$lib/user";
    import { goto } from "$app/navigation";

    let name: string;
    let password: string;
    let error: HTMLSpanElement;

    function submit() {
        error.textContent = "";

        api("account/login?name=" + name + "&password=" + password)
            .then(res => token.set(res.token))
            .catch(reason => error.textContent = reason);
    }

    $: if (browser && $token) goto("/account");
</script>

<Navbar hideProfile/>

<form on:submit|preventDefault={submit}>
    <h1>Login</h1>

    <label for="name" class="form-label"><b>Username or Email</b></label>
    <!-- svelte-ignore a11y-autofocus -->
    <input bind:value={name} type="text" placeholder="Username or Email" id="name" name="name" required autofocus>

    <label for="password" class="form-label"><b>Password</b></label>
    <input bind:value={password} type="password" placeholder="Password" id="password" name="password" required>

    <span bind:this={error} class="error"></span>

    <button type="submit" class="form-button">Login</button>

    <div class="footer">
        <p><i class="hide">Don't have an account? </i><a href="/register">Register</a></p>
        <p><i class="hide">Forgot your password? </i> <a href="/forgotPassword">Reset Password</a></p>
    </div>
</form>

<style>
    @import "form.css";
</style>
