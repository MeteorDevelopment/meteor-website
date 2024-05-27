<script lang="ts">
    import Centered from "$lib/components/centered.svelte";
    import Form from "$lib/components/form.svelte";
    import Icon from "$lib/components/icon.svelte";
    import Link from "$lib/components/link.svelte";
    import {api} from "$lib/api";
    import {browser} from "$app/environment";
    import {token} from "$lib/user";
    import {goto} from "$app/navigation";

    let name: string;
    let password: string;
    let passwordVisible: boolean;
    let passwordInput: HTMLInputElement;
    let error: HTMLSpanElement;

    function submit() {
        error.textContent = "";

        api("account/login?name=" + name + "&password=" + password)
            .then(res => token.set(res.token))
            .catch(reason => {
                error.attributeStyleMap.set("display", "block");
                error.textContent = reason;
            });
    }

    function togglePasswordVisibility() {
        passwordVisible = !passwordVisible;
        passwordInput.type = passwordVisible ? 'text' : 'password';
    }

    $: if (browser && $token) goto("/account");
</script>

<Centered>
    <Form submit={submit}>
        <div style="display: inline-grid; align-items: center; row-gap: 10px; grid-template-columns: 1fr auto;">
            <h1>Login</h1>

            <!-- svelte-ignore a11y-autofocus -->
            <input name="name" type="text" bind:value={name} placeholder="Username or Email" style="grid-column: 1;" required autofocus/>

            <div style="position: relative; grid-column: 1;">
                <input name="password" bind:this={passwordInput} type="password" bind:value={password}
                       placeholder="Password" required style="padding-right: 34px;"/>

                <button type="button" on:click={togglePasswordVisibility} id="password-toggle">
                    <Icon src={passwordVisible ? 'eye-off' : 'eye'}/>
                </button>
            </div>

            <Link location="/forgotPassword" style="grid-column: 1;">Password reset</Link>

            <button type="submit" style="grid-column: 1;">Login</button>

            <p bind:this={error} class="error" style="display: none; grid-column: 1;"/>

            <p style="grid-column: 1;">Don't have an account? <a href="/register">Sign Up</a></p>
        </div>
    </Form>
</Centered>

<style>
    #password-toggle {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        padding: 0;
        border: none !important;
        background: none !important;
        width: 24px;
        height: 24px;
    }
</style>
