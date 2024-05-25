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

    $: if (browser && $token) goto("/account");
</script>

<Centered>
    <Form submit={submit} style="padding-right: calc(var(--container-padding) - var(--icon-size) - var(--button-padding));">
        <div style="display: inline-grid; align-items: center; row-gap: 10px; grid-template-columns: 1fr auto;">
            <h1>Login</h1>

            <!-- svelte-ignore a11y-autofocus -->
            <input name="name" type="text" bind:value={name} placeholder="Username or Email" style="grid-column: 1;" required autofocus/>

            <input name="password" type="password" bind:value={password} placeholder="Password" style="grid-column: 1;" required />

            <Link location="/forgotPassword" style="margin-inline: calc(var(--button-padding) / 2); grid-column: 2; width: fit-content;"><Icon src="help-circle" /></Link>

            <button type="submit" style="grid-column: 1;">Login</button>

            <p bind:this={error} class="error" style="display: none; grid-column: 1;"/>

            <p style="grid-column: 1;">Don't have an account? <a href="/register">Sign Up</a></p>
        </div>
    </Form>
</Centered>
