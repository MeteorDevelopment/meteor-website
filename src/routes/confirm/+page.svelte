<script lang="ts">
    import Navbar from '$lib/components/navbar.svelte';
    import { browser } from '$app/environment';
    import { api } from '$lib/api';
    import { goto } from '$app/navigation';
    import type { PageData } from './$types';

    let { data } = $props<{ data: PageData }>();
    let error = $state<string | null>(null);

    if (browser) {
        if (!data.qToken) error = 'Invalid token.';
        else {
            api('account/confirm?token=' + data.qToken, false, 'POST')
                .then(() => {
                    setTimeout(() => goto('/login'), 2500);
                })
                .catch((reason) => (error = reason));
        }
    }
</script>

<Navbar />

<div class="container">
    <div>
        <p>{error ? error : 'Email confirmed, redirecting to login.'}</p>
    </div>
</div>
