<script>
import Login from './Login.svelte';
import LogInUser from './LogInUser.svelte';
import SignUpUser from './SignUpUser.svelte';
import Content from './Content.svelte';

var user;
var componente = 'Login';


$: console.log(componente)

</script>


	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">

	{#if componente === 'Login'}
		<Login bind:user bind:componente/>
	{/if}

	{#if componente === 'SignUpUser'}
		<SignUpUser bind:user bind:componente/>
	{/if}

	{#if componente === 'LogInUser'}
		<LogInUser bind:user bind:componente/>
	{/if}

	{#if componente === 'Content'}
		<Content bind:user bind:componente/>
	{/if}
	


<style>

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>