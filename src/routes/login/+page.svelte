<script lang="ts">
    import Navbar from '$lib/components/navbar.svelte';
    import { api } from '$lib/api';
    import { browser } from '$app/environment';
    import { token } from '$lib/user';
    import { goto } from '$app/navigation';

    let name = $state('');
    let password = $state('');
    let errorMessage = $state<string>('');

    function handleSubmit(event: SubmitEvent) {
        event.preventDefault();
        errorMessage = '';

        api('account/login?name=' + name + '&password=' + password)
            .then((res) => token.set(res.token))
            .catch((reason) => (errorMessage = reason));
    }

    $effect(() => {
        if (browser && $token) goto('/account');
    });
</script>

<Navbar hideProfile />

<form onsubmit={handleSubmit}>
    <h1>Login</h1>

    <label for="name" class="form-label"><b>Username or Email</b></label>
    <!-- svelte-ignore a11y_autofocus -->
    <input bind:value={name} type="text" placeholder="Username or Email" id="name" name="name" required autofocus />

    <label for="password" class="form-label"><b>Password</b></label>
    <input bind:value={password} type="password" placeholder="Password" id="password" name="password" required />

    {#if errorMessage}
        <span class="error">{errorMessage}</span>
    {/if}

    <button type="submit" class="form-button">Login</button>

    <div class="footer">
        <p><i class="hide">Don't have an account? </i><a href="/register">Register</a></p>
        <p>
            <i class="hide">Forgot your password? </i> <a href="/forgotPassword">Reset Password</a>
        </p>
    </div>
</form>

<style>
    @import 'form.css';
</style>
