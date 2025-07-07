<script lang="ts">
    import {browser} from "$app/environment";
    import {goto} from "$app/navigation";
    import {refreshUser, token} from "$lib/user";
    import Navbar from "$lib/components/navbar.svelte";
    import {OtpInput} from "@codersandip/svelte-otp";
    import {api} from "$lib/api";

    $effect(() => {
        if (browser && !$token) goto("/login");
    });

    let errorEl: HTMLSpanElement;
    let value = $state<string>("");

    function onChange(otpValue: string) {
        value = otpValue;

        if (otpValue.length === 6) {
            onComplete(otpValue);
        }
    }

    function onComplete(code: string) {
        errorEl.textContent = "";

        api("account/mcAccount?code=" + code, true, "POST")
            .then(() => {
                refreshUser();
                goto("/account");
            })
            .catch(error => {
                value = "";
                errorEl.textContent = error;
            });
    }
</script>

<Navbar/>

<div class="container">
    <div>
        <h1>Add MC account</h1>

        <ol>
            <li>Launch your Minecraft client and join our server with the IP <span
                class="ip">mcauth.meteorclient.com</span></li>
            <li>You will be immediatelly kicked with a one-time 6-digit code</li>
            <li>Write the code into the input box below</li>
        </ol>

        <OtpInput
            length={6}
            inputType="number"
            bind:value={value}
            onChange={onChange}
            containerClass="otp-root"
            inputWrapClass="otp-input-wrap"
            inputClass="otp-input"
        />

        <span class="error" bind:this={errorEl}></span>
    </div>
</div>

<style>
    .container > div {
        display: flex;
        flex-direction: column;
    }

    h1 {
        color: black;
    }

    ol {
        margin: 2rem 0;
    }

    li {
        text-align: left;
    }

    li::marker {
        font-weight: bold;
    }

    .ip {
        background-color: rgb(190, 190, 190);
        padding: 0.2rem 0.4rem;
        border-radius: 0.375rem;
        box-shadow: inset 0 -3px 0 rgb(99 110 123 / 40%);
    }

    :global(.otp-root) {
        display: flex;
        justify-content: center;
        gap: 0.25rem;

        color: black;
        font-size: 2rem;
    }

    :global(.otp-input) {
        width: 1em;
        height: 1.4em;

        border: 1px rgb(80, 80, 80) solid;
        border-radius: 0.325rem;
    }

    :global(.otp-input:focus) {
        border-width: 2px;
        border-color: black;
    }

    .error {
        color: red;
    }
</style>
