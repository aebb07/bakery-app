<script>
import Sidebar from './Sidebar.svelte';
import Ofertas from './Ofertas.svelte';
import ContentProducts from './ContentProducts.svelte';

//export var user;
export var componente;
let sidebar_show = false;

</script>
<div class="nav">
        <span class="hamburger" on:click={() => sidebar_show = !sidebar_show}><i class="fas fa-bars"></i></span>

<Sidebar bind:componente bind:show={sidebar_show} />
</div>

<Ofertas/>

<div class="buy">
    <p class="text-buy">¿Ya terminaste?</p>
    <button>COMPRAR</button>
</div>

<ContentProducts/>


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

    .buy {
        display: flex;
        align-items: center;
        background-color: #242424;
    }

    .text-buy {
        color: #f5f5f5;
        margin-right: 15px;
    }

</style>
