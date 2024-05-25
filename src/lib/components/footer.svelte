<script lang="ts">
    import Link from "$lib/components/link.svelte";
</script>

<footer>
    <p>Copyright © 2024 <Link location="https://github.com/MeteorDevelopment" newTab noDecoration>Meteor Development</Link></p>
    <a href="/privacy">Privacy Policy</a>
</footer>

<style lang="scss">
    footer {
        display: grid;
        place-items: center;

        gap: 5px;
        width: 100%;
        padding-block: 20px;

        a {
            color: var(--text-highlight);
        }
    }
</style>
