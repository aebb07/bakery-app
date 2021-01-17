<script>
import Login from './Login.svelte';
import Content from './Content.svelte';
import Cart from './Cart.svelte';

import { componente } from './store.js';


$: console.log($componente)

</script>

<!--####################-->

<svelte:head>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">

	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;800&display=swap" rel="stylesheet"> 
</svelte:head>


	
	{#if $componente === 'Login'}
		<Login/>
	{/if}

	<!--{#if $componente === 'SignUpUser'}
		<SignUpUser/>
	{/if}-->

	<!--{#if $componente === 'LogInUser'}
		<LogInUser/>
	{/if}-->

	<!--{#if $componente === 'MyProfile'}
		<MyProfile/>
	{/if}-->
	
	{#if $componente === 'Content'}
		<Content/>
	{/if}

	<!--{#if $componente === 'PanFrances'}
		<PanFrances/>
	{/if}-->

	{#if $componente === 'Cart'}
		<Cart/>
	{/if}>

	<!--{#if $componente === 'ChangePassword'}
		<ChangePassword/>
	{/if}-->

<!--####################-->

<style>

	@media (min-width: 640px) {
		/*main {
			max-width: none;
		}*/
	}
</style>