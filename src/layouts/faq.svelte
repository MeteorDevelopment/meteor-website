<script>
    import Footer from "$lib/components/footer.svelte";
    import Navbar from "$lib/components/navbar.svelte";
</script>

<Navbar/>
<div class="container">
    <div>
        <slot/>
    </div>
    <ul>
        <li><a href="/faq">Home</a></li>
        <li><a href="/faq/installation">Installation</a></li>
        <li><a href="/faq/old-versions">Old versions</a></li>
        <li><a href="/faq/getting-log">Getting latest.log</a></li>
        <li><a href="/faq/addon-template">Addon template</a></li>
        <li><a href="/faq/starscript">Starscript</a></li>
        <li><a href="/faq/notebot">Notebot</a></li>
        <li><a href="/faq/swarm">Swarm</a></li>
    </ul>
</div>
<Footer/>

<style>
    @import "markdown.css";

    ul {
        align-self: flex-start;
        border: solid rgb(168, 168, 168) 1px;
        border-radius: 00.375rem;
        padding: 1rem 1rem 1rem 2rem;
        margin-top: 2rem;
    }

    @media screen and (max-width: 1100px) {
        .container {
            flex-direction: column-reverse;
            gap: 0;
        }

        ul {
            margin-top: 0;
        }
    }
</style>
