<div id="markdown">
    <slot/>
</div>

<style lang="scss">
    #markdown :global(h1) {
        text-align: center;
    }

    #markdown :global(h2) {
        margin-top: var(--spacing);
        margin-bottom: var(--header-spacing);
    }
</style>
