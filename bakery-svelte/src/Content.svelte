<script>
import {user} from './store.js'
import Offers from './Offers.svelte';
import ContentProducts from './ContentProducts.svelte';
import {firebaseAuth} from './firebase';
import { products } from './cart.js';

let itemsInCart = 0
$:{
    let count = 0
        for (let item of $products){
            count += item.quantity
        }
        itemsInCart = count
}

/*let sidebar_show = false;*/
import { componente } from './store.js';


async function logout () {
	firebaseAuth.signOut()
		.then(
			console.log('User leave.')
		)
		.catch(
			err=>console.error(err)
		);
}


function goToCart() {
	$componente = "Cart";
}
</script>

<!--####################-->
<div class="nav">
    {#if ($user && $user.displayName)}
            <h1 class="user-name">HOLA! {$user.displayName}</h1>
        {:else if ($user && $user.email)}
            <h1 class="user-email">HOLA! {$user.email}</h1>
        {:else}
            <p>Inicia sesión</p>
    {/if}

    {#if ($user && $user.photoURL)}
            <img class="user-img" src={$user.photoURL} alt="user-picture">
        {:else if $user}
            <img class="user-img" src="https://avatars.dicebear.com/api/jdenticon/{$user.email}.svg">
        {:else}
            <p>Inicia sesión</p>
    {/if}


    <span class="cart" on:click={goToCart}><i class="fas fa-shopping-cart"></i> {itemsInCart}</span>
    <button class="logOut" on:click={logout}>Salir</button>
        <!--span class="hamburger" on:click={() => sidebar_show = !sidebar_show}><i class="fas fa-bars"></i></span>

<Sidebar bind:show={sidebar_show} /-->

</div>

<Offers/>

<ContentProducts/>

<!--####################-->

<style>
   .user-img {
        width: 65px;
        border-radius: 50px;
        margin-left: -175px;
  }

  .user-name {
        font-size: 20px;
        color: #f5f5f5;
        font-weight: normal;
  }

  .user-email {
        font-size: 20px;
        color: #f5f5f5;
        font-weight: normal;
  }

    .nav {
        display: flex;
        background: #212121;
        align-items: center;
        justify-content: space-around;
        padding: 10px;
    }
    
    .cart {
        color: #f5f5f5;
        text-decoration: none;
    }

    .buy {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 15px;
    }

    .text-buy {
        color: #f5f5f5;
        margin-right: 15px;
    }


    .logOut {
        font-size: 20px;
        color: #818181;
        display: block;
        transition: 0.3s;
        padding: 8px 8px 8px 32px;
        background: none;
        border: none;
        font-weight: 700;
    }
    
    .logOut:hover {
        color: #f5f5f5;
    }
</style>
