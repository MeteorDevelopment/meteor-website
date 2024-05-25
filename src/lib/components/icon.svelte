<script lang="ts">
    export let src: string;
    export let size: number = -1;
</script>

<img src="/icons/{src}.svg" alt="{src} icon" style="width: {size === -1 ? 'var(--icon-size)' : `${size}px`}"/>
