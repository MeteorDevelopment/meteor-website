<script lang="ts">
    import { browser } from "$app/environment"
    import { goto } from "$app/navigation"
    import { refreshUser, token } from "$lib/user"
    import Navbar from "$lib/components/navbar.svelte"
    // noinspection ES6UnusedImports
    import { PinInput, REGEXP_ONLY_DIGITS } from "bits-ui"
    import { api } from "$lib/api"

    $effect(() => {
        if (browser && !$token) goto("/login")
    })

    let value = $state<string>("")
    let errorMessage = $state<string>("")

    function onComplete() {
        errorMessage = ""

        api("account/mcAccount?code=" + value, true, "POST")
            .then(() => {
                refreshUser()
                goto("/account")
            })
            .catch((error) => {
                value = ""
                errorMessage = error
            })
    }
</script>

<Navbar/>

<div class="container">
    <div>
        <h1>Add MC account</h1>

        <ol>
            <li>Launch your Minecraft client and join our server with the IP <span
                class="ip">mcauth.meteorclient.com</span></li>
            <li>You will be immediately kicked with a one-time 6-digit code</li>
            <li>Write the code into the input box below</li>
        </ol>

        <PinInput.Root bind:value maxlength={6} {onComplete} pattern={REGEXP_ONLY_DIGITS} class="otp-root">
            {#snippet children({ cells })}
                {#each cells as cell, i (i)}
                    <PinInput.Cell {cell} class="otp-input">
                        {#if cell.char !== null}
                            <span>{cell.char}</span>
                        {/if}
                        {#if cell.hasFakeCaret}
                            <span class="caret"></span>
                        {/if}
                    </PinInput.Cell>
                {/each}
            {/snippet}
        </PinInput.Root>

        {#if errorMessage}
            <span class="error">{errorMessage}</span>
        {/if}
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
    }

    :global(.otp-input) {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2.8rem;
        font-size: 2rem;
        color: black;
        border: 1px solid rgb(80, 80, 80);
        border-radius: 0.325rem;

        &[data-active] {
            border: 2px solid black;
        }
    }

    :global(.caret) {
        position: absolute;
        width: 2px;
        height: 1.5rem;
        background-color: black;
        animation: blink 1s step-end infinite;
    }

    @keyframes blink {
        0%, 70%, 100% {
            opacity: 1;
        }
        20%, 50% {
            opacity: 0;
        }
    }

    .error {
        color: red;
    }
</style>
