<script lang="ts">
    import Button from "$lib/components/button.svelte";
    import IconButton from "$lib/components/iconbutton.svelte";
</script>

<nav>
    <a id="title" href="/">Meteor</a>

    <div id="links">
        <IconButton icon="discord" location="/discord" newTab/>
        <IconButton icon="github" location="/github" newTab/>
        <IconButton icon="youtube" location="/youtube" newTab/>

        <a href="/faq">FAQ</a>
        <a href="/donate">Donate</a>

        <Button location="/login">Login</Button>
    </div>
</nav>

<style lang="scss">
    nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;

        padding: 20px 0;

        :global(a) {
            text-decoration: none;
            font-family: var(--font-header), monospace;
        }
    }

    #title {
        font-size: var(--title-size);
    }

    #links {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-evenly;
        align-items: center;

        gap: 1vw;

        :global(a) {
            color: var(--text);
            font-size: var(--nav-link-size);

            &:hover {
                color: var(--text-highlight);
            }
        }
    }
</style>
