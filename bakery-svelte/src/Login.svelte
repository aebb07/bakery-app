<script>
import {firebaseAuth, googleAuthProvider} from './firebase';
import Content from './Content.svelte';



import {user} from './store.js';
import { componente } from './store.js';




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

}

/*
		firestoreDb.collection(user.uid).add();
	}
*/

function goSignUpUser() {
    $componente = "SignUpUser";
}

function goLogInUser() {
	$componente = "LogInUser";
}

</script>

<div>
	{#if $user }
		<Content/>
	{:else}
	<div class="img-logo">
		<img class="logo-el-padrino" src="/img/EL-PADRINO.png" alt="logo">
	</div>
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
	.img-logo {
		position: relative;
		bottom: -55px;
	}

	.logo-el-padrino {
		display: block;
		margin: auto;
		width: 450px;
	}

	.login-content, .login1 {
		align-items: center;
    	display: flex;
    	justify-content: center;
    	height: 100%;
    	flex-direction: column;
	}
</style>