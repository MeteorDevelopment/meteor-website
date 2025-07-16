<script lang="ts">
    import { dev } from "$app/environment"
    import { onMount } from "svelte"

    onMount(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const w: any = window;
        (w.adsbygoogle = w.adsbygoogle || []).push({})
    })
</script>

<ins
    class="adsbygoogle"
    style="display:block"
    data-ad-client="ca-pub-8546584413187411"
    data-ad-slot="5754111941"
    data-ad-format="auto"
    data-full-width-responsive="true"
/>

{#if dev}
    <style>
        ins {
            border: 1px solid red;
        }
    </style>
{/if}
