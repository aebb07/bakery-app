<script>
import Sidebar from './Sidebar.svelte';
import Ofertas from './Ofertas.svelte';

let sidebar_show = false;

</script>
<div class="nav">
        <span class="hamburger" on:click={() => sidebar_show = !sidebar_show}><i class="fas fa-bars"></i></span>

<Sidebar bind:show={sidebar_show} />
</div>

<Ofertas/>


<style>
    .nav {
        padding-bottom: 3rem;
        padding-left: 1rem;
        padding-right: 1rem;
        background-color: #242424;
	}

    .hamburger {
        float: left;
        font-size: 25px;
        padding-top: 0.5rem;
        color: #ccc;
    }



</style>
