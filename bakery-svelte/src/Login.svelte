<script>
import {firebaseAuth, googleAuthProvider} from './firebase';
import Content from './Content.svelte';

export var user;
export var componente;
export var sideBar;


firebaseAuth.onAuthStateChanged(

function(usr) {
	if (usr) {
		user = usr;
	} else {
		user = null;
	}
});

function loginWithRedirect () {
	firebaseAuth.signInWithRedirect(googleAuthProvider).then(
			result=>{
				var token = result.credential.accessToken;
				user = result.user;
				console.log('User arrives:', user)
			}
		)
		.catch(
			err=>console.error(err)
		);
}

function goSignUpUser() {
    componente = "SignUpUser";
}

function goLogInUser() {
	componente = "LogInUser";
}

</script>

<div>
    {#if user}
		<Content bind:user bind:sideBar/>
	{:else}
	<h1>Bakery</h1>
        <div class="login-Content">
            <p>Continuar con</p>
            <button on:click={loginWithRedirect}><i class="fab fa-google"></i>oogle</button>
            <div>
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
	}
</style>