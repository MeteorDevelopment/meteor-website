<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";
    import { browser } from "$app/environment";
    import { token } from "$lib/user";
    import { goto } from "$app/navigation";
    import { api } from "$lib/api";

    let newEmail = $state<string>("");
    let errorMessage = $state<string>("");
    let sent = $state(false);

    function handleSubmit(event: SubmitEvent) {
        event.preventDefault();
        errorMessage = "";

        api("account/changeEmail?email=" + newEmail, true, "POST")
            .then(() => (sent = true))
            .catch((reason) => (errorMessage = reason));
    }

    $effect(() => {
        if (browser && !$token) goto("/login");
    });
</script>

<Navbar />

{#if sent}
    <div class="container">
        <div>
            <p>We have sent you a confirmation email.</p>
        </div>
    </div>
{:else}
    <form onsubmit={handleSubmit}>
        <h1>Change Email</h1>

        <label for="newEmail" class="form-label"><b>New Email</b></label>
        <!-- svelte-ignore a11y_autofocus -->
        <input
            bind:value={newEmail}
            type="email"
            placeholder="New Email"
            id="newEmail"
            name="newEmail"
            required
            autofocus
        />

        {#if errorMessage}
            <span class="error">{errorMessage}</span>
        {/if}

        <button type="submit" class="form-button">Change</button>
    </form>
{/if}

<!-- svelte-ignore css_unused_selector -->
<style>
    @import 'form.css';
</style>
