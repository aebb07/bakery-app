<script>
import Login from './Login.svelte';
import LogInUser from './LogInUser.svelte';
import SignUpUser from './SignUpUser.svelte';

var user;
var componente = 'Login';

$: console.log(componente)

</script>

<main>
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
	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>