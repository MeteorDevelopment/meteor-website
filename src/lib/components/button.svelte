<script lang="ts">
    export let location: string;
    export let style: string = '';
    export let newTab: boolean = false;
</script>

<a href={location} style={style} target={newTab ? "_blank" : "_self"}>
    <slot/>
</a>

<style lang="scss">
    a {
        display: grid;
        place-items: center;

        padding: var(--button-padding);

        color: var(--text);
        background-color: var(--button);
        border: var(--button-outline) solid 3px;

        border-radius: 8px;
        text-decoration: none;

        &:hover {
            color: var(--text-highlight);
            background-color: var(--button-hovered);
            border: var(--button-hovered-outline) solid 3px;
        }
    }
</style>
