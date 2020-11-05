<script>
import {firebaseAuth, googleAuthProvider} from './firebase';
import Content from './Content.svelte';

//export var user;

import {user} from './store.js';

export var componente;

$: console.log($user)



firebaseAuth.onAuthStateChanged(

function(usr) {
	if (usr) {
		$user = usr;
	} else {
		$user = null;
	}
});

function loginWithRedirect () {
	firebaseAuth.signInWithRedirect(googleAuthProvider).then(
			result=>{
				var token = result.credential.accessToken;
				$user = result.user;
				console.log('User arrives:', user)
			}
		)
		.catch(
			err=>console.error(err)
		);
	saveUser()
}

/*async function saveUser() {
		var doc = {
            email: email,
            password: password,
		}
		
		await firestoreDb.collection(user.uid).add(doc);
	}
*/

function goSignUpUser() {
    componente = "SignUpUser";
}

function goLogInUser() {
	componente = "LogInUser";
}

</script>

<div>
	{#if $user}
		<Content bind:componente/>
	{:else}
	<h1>Bakery</h1>
        <div class="login-content">
            <p>Continuar con</p>
            <button on:click={loginWithRedirect}><i class="fab fa-google"></i>oogle</button>
            <div class="login1">
                <button on:click={goSignUpUser}>Regístrate</button>
                <p>¿Ya tienes una cuenta?</p>
                <button on:click={goLogInUser}>Iniciar sesión</button>
            </div>
        </div>
    {/if}
</div>

<style>
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		text-align: center;
	}

	.login-content, .login1 {
		align-items: center;
    	display: flex;
    	justify-content: center;
    	height: 100%;
    	flex-direction: column;
	}
</style>