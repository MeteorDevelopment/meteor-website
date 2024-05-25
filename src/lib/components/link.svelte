<script lang="ts">
    export let location: string;
    export let newTab: boolean = false;
    export let color: string = "text-highlight";
    export let noDecoration: boolean;
</script>

<a href={location} style="color: var(--{color}); text-decoration: {noDecoration ? 'none' : color};" target={newTab ? "_blank" : "_self"}>
    <slot/>
</a>

<!--TODO: Sort this out-->
