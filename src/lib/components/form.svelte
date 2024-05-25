<script lang="ts">
    import type {EventHandler} from "svelte/elements";

    export let style: string = "";
    export let submit: EventHandler<SubmitEvent, HTMLFormElement>;
</script>

<form on:submit|preventDefault={submit} style={style}>
    <slot/>
</form>

<style lang="scss">
    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 50px;
        min-width: 50%;

        background-color: var(--background-secondary);
        border: var(--button-hovered-outline) solid 3px;
        border-radius: 8px;

        :global(input), :global(button) {
            width: 100%;
            padding: 0.6rem;
            border-radius: 4px;
            border: var(--button-outline) solid 3px;
        }

        :global(input) {
            color: var(--background);
            background-color: var(--text-highlight);
        }

        :global(button) {
            color: var(--text);
            background-color: var(--button);

            &:hover {
                color: var(--text-highlight);
                background-color: var(--button-hovered);
                border: var(--button-hovered-outline) solid 3px;
                cursor: pointer;
            }
        }

        :global(p), :global(h1) {
            text-align: center;
            margin: 10px 0;
        }

        :global(.error) {
            color: var(--warning);
            font-size: 0.75rem;
        }
    }
</style>
