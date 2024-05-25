<script lang="ts">
    import { page } from '$app/stores';
    import Centered from '$lib/components/centered.svelte';
</script>

<Centered>
    <h1>{$page.status}</h1>
    <p>{$page.error?.message}</p>
</Centered>
