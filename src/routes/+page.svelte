<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";
    import Main from "$lib/components/main.svelte";
    import Info from "$lib/components/info.svelte";
    import Team from "$lib/components/team.svelte";
    import Footer from "$lib/components/footer.svelte";
</script>

<Navbar/>
<Main/>
<Info stats={$$props.data.stats}/>
<Team/>
<Footer/>
