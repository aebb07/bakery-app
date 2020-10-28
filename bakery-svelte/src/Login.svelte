<script>
import {firebaseAuth, googleAuthProvider} from './firebase';
import Content from './Content.svelte';

export var user;
export var componente;


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

function logout () {
	firebaseAuth.signOut()
		.then(
			console.log('User leave.')
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
		<span id="out" on:click={logout}><i class="fas fa-sign-out-alt"></i></span>
		<Content bind:user/>
    {:else}
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