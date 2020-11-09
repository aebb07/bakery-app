<script>
import Sidebar from './Sidebar.svelte';
import Offers from './Offers.svelte';
import ContentProducts from './ContentProducts.svelte';


let sidebar_show = false;
import { componente } from './store.js';

function goToSummary() {
	$componente = "SummaryPurchase";
}
</script>


<div class="nav">
        <span class="hamburger" on:click={() => sidebar_show = !sidebar_show}><i class="fas fa-bars"></i></span>

<Sidebar bind:show={sidebar_show} />
</div>

<Offers/>

<div class="buy">
    <p class="text-buy">¿Ya terminaste?</p>
    <button class="buy-button" on:click={goToSummary}>COMPRAR</button>
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
        color: #f5f5f5;
    }

    .buy {
        display: flex;
        align-items: center;
        background-color: #242424;
        justify-content: center;
    }

    .text-buy {
        color: #f5f5f5;
        margin-right: 15px;
    }

</style>
