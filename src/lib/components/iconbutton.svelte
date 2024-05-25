<script lang="ts">
    export let location: string;
    export let newTab: boolean = false;

    export let icon: string;
    export let size: number = 24;
    export let style: string = '';
</script>

<a href={location} target={newTab ? "_blank" : "_self"} style={style}>
    <img src="/icons/{icon}.svg" alt="{icon} icon" style="height: {size}px"/>
</a>

<style lang="scss">
    a {
        display: grid;
        place-items: center;
    }
</style>

<!--TODO: Combine with button component-->
