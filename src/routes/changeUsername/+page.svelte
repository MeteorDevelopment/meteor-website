<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";
    import { browser } from "$app/environment";
    import { refreshUser, token } from "$lib/user";
    import { goto } from "$app/navigation";
    import { api } from "$lib/api";

    let newUsername = $state("");
    let error: HTMLSpanElement;

    function handleSubmit(event: SubmitEvent) {
        event.preventDefault();
        error.textContent = "";

        api("account/changeUsername?username=" + newUsername, true, "POST")
            .then(() => {
                refreshUser(); // Idk why it doesn't refresh the stores automatically
                goto("/account");
            })
            .catch(reason => error.textContent = reason);
    }

    $effect(() => {
        if (browser && !$token) goto("/login");
    });
</script>

<Navbar/>

<form onsubmit={handleSubmit}>
    <h1>Change Username</h1>

    <label for="newUsername" class="form-label"><b>New Username</b></label>
    <!-- svelte-ignore a11y_autofocus -->
    <input bind:value={newUsername} type="newUsername" placeholder="New Username" id="newUsername" name="newUsername" required autofocus>

    <span bind:this={error} class="error"></span>

    <button type="submit" class="form-button">Change</button>
</form>

<!-- svelte-ignore css_unused_selector -->
<style>
    @import "form.css";
</style>
