<script>
import Login from './Login.svelte';
import LogInUser from './LogInUser.svelte';
import SignUpUser from './SignUpUser.svelte';
import MyProfile from './MyProfile.svelte';
import Content from './Content.svelte';

//var user;

var componente = 'Login';


$: console.log(componente)

</script>


	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">

	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;800&display=swap" rel="stylesheet"> 
	
	{#if componente === 'Login'}
		<Login bind:componente/>
	{/if}

	{#if componente === 'SignUpUser'}
		<SignUpUser bind:componente/>
	{/if}

	{#if componente === 'LogInUser'}
		<LogInUser bind:componente/>
	{/if}

	{#if componente === 'MyProfile'}
		<MyProfile bind:componente/>
	{/if}
	
	{#if componente === 'Content'}
		<Content bind:componente/>
	{/if}

<style>

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>