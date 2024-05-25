<script lang="ts">
    import Centered from "$lib/components/centered.svelte";
    import Form from "$lib/components/form.svelte";
    import IconButton from "$lib/components/iconbutton.svelte";
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
            .catch(reason => {
                error.attributeStyleMap.set("display", "block");
                error.textContent = reason;
            });
    }

    $: if (browser && $token) goto("/account");
</script>

<Centered>
    <Form submit={submit}>
        <h1>Login</h1>

        <!-- svelte-ignore a11y-autofocus -->
        <input bind:value={name} type="text" placeholder="Username or Email" id="name" name="name" required autofocus />

        <div style="display: flex; flex-direction: row; gap: 10px;">
            <input bind:value={password} type="password" placeholder="Password" id="password" name="password" required />
            <IconButton location="/forgotPassword" icon="help-circle" style="background-color: var(--button); border-radius: 4px; padding: 3px; border: var(--button-outline) solid 3px;" />
        </div>

        <button type="submit">Login</button>

        <p bind:this={error} class="error" style="display: none;" />

        <p>Don't have an account? <a href="/register">Sign Up</a></p>
    </Form>
</Centered>
