<script lang="ts">
    import Button from "$lib/components/button.svelte";
    import Icon from "$lib/components/icon.svelte";
    import Link from "$lib/components/link.svelte";
</script>

<nav>
    <a id="title" href="/">Meteor</a>

    <div id="links">
        <Link location="/discord" newTab><Icon src="discord"/></Link>
        <Link location="/github" newTab><Icon src="github"/></Link>
        <Link location="/youtube" newTab><Icon src="youtube"/></Link>

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

        margin-top: var(--spacing);

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
