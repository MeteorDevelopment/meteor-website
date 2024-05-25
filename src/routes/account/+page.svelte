<script lang="ts">
    import Centered from "$lib/components/centered.svelte"
    import { browser } from "$app/environment";
    import { goto } from "$app/navigation";
    import { token, user } from "$lib/user";

    $: if (browser && !$token) goto("/login");
</script>

<Centered>
    {#if $user}
        <h2>Account</h2>
        <p>ID: <span class="highlight">{$user.id}</span></p>
        <p>Username: <span class="highlight">{$user.username}</span></p>
        <p>Admin: <span class="highlight">{$user.admin}</span></p>
        <p>Donator: <span class="highlight">{$user.donator}</span></p>
        <p>Discord: <img src={$user.discordAvatar} alt="discord-profile" style="width: 24px; border-radius: 50%">{$user.discordName}</p>
        <p>Can Have Cape: <span class="highlight">{$user.canHaveCustomCape}</span></p>
        <p>Cape: <span class="highlight">{$user.cape}</span></p>
        <p>Cape: <span class="highlight">{$user.cape}</span></p>
        <p>Max Mc Accounts: <span class="highlight">{$user.maxMcAccounts}</span></p>
        <p>Mc Accounts: <span class="highlight">
        {#each $user.mcAccounts as account}
            {account + " "}
        {/each}
    </span></p>
        <p>Capes: <span class="highlight">
        {#each $user.capes as cape}
            {cape.title + " "}
        {/each}
    </span></p>
    {/if}
</Centered>
