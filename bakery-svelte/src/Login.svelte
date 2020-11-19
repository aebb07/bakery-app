<script>
import {firebaseAuth, googleAuthProvider, firestoreDb} from './firebase';
import Content from './Content.svelte';



import {user} from './store.js';
import { componente } from './store.js';




firebaseAuth.onAuthStateChanged(

function(usr) {
	if (usr) {
		$user = usr;
		/* firestoreDb.collection('users').where('uid', '==', uid).get().then(
			snapshot => {
				if (snapshot.empty) {
				//Crear doc
				return;
				}
			}
		)
		*/

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


function goSignUpUser() {
    $componente = "SignUpUser";
}

function goLogInUser() {
	$componente = "LogInUser";
}

</script>


<main>
<div>
	{#if $user }
		<Content/>
	{:else}
	<div class="img-logo">
		<img class="logo-el-padrino" src="/img/EL-PADRINO.png" alt="logo">
	</div>
        <div class="login-content">
			<div class="continue">
				<p>Continuar con</p>
					<div class='g-sign-in-button' on:click={loginWithRedirect}>
						<div class=content-wrapper>
							<div class='logo-wrapper'>
								<img src='https://developers.google.com/identity/images/g-logo.png'>
							</div>
							<span class='text-container'>
						<span>Sign in with Google</span>
						</span>
						</div>
					</div>
			</div>
            <div class="login1">
				<span id="register" on:click={goSignUpUser}>Regístrate</span>
					<div class="lOgin">
						<p>¿Ya tienes una cuenta?</p><span id="lOgin" on:click={goLogInUser}>Iniciar sesión</span>
					</div>
            </div>
		</div>
    {/if}
</div>
</main>

<style>
	main {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #2d3436;
		background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);
}

	.logo-el-padrino {
		display: block;
		margin: auto;
		width: 450px;
		margin-top: -30px;
	}

	.login-content, .login1, .continue {
		align-items: center;
    	display: flex;
    	justify-content: center;
    	height: 100%;
    	flex-direction: column;
	}

	p {
		color: #f5f5f5;
		font-size: 20px;
		margin: auto;
	}


	.login1 {
		padding-top: 100px;
	}

	#register, #lOgin {
		color: #ea911c;
		font-size: 20px;
		cursor: pointer;
	}

	#register:hover{
		color: #fcac43;
	}

	#lOgin:hover{
		color: #fcac43;
	}

	.lOgin {
		display: flex;
	}

	#lOgin {
		margin-left: 10px;
	}

/*Botón de Google*/

	*, *:before, *:after {
            box-sizing: border-box;
        }

        .g-sign-in-button {
            margin: 10px;
            display: inline-block;
            width: 240px;
            height: 50px;
            background-color: #4285f4;
            color: #f5f5f5;
            border-radius: 1px;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
            transition: background-color .218s, border-color .218s, box-shadow .218s;
        }

        .g-sign-in-button:hover {
            cursor: pointer;
            -webkit-box-shadow: 0 0 3px 3px rgba(66, 133, 244, 0.3);
            box-shadow: 0 0 3px 3px rgba(66, 133, 244, 0.3);
        }

        .g-sign-in-button:active {
            background-color: #3367D6;
            transition: background-color 0.2s;
        }

        .g-sign-in-button .content-wrapper {
            height: 100%;
            width: 100%;
            border: 1px solid transparent;
        }

        .g-sign-in-button img {
            width: 18px;
            height: 18px;
        }

        .g-sign-in-button .logo-wrapper {
            padding: 15px;
            background: #f5f5f5;
            width: 48px;
            height: 100%;
            border-radius: 1px;
            display: inline-block;
        }

        .g-sign-in-button .text-container {
            font-family: 'Poppins';
            font-weight: 500;
            letter-spacing: .21px;
            font-size: 16px;
            line-height: 48px;
            vertical-align: top;
            border: none;
            display: inline-block;
            text-align: center;
            width: 180px;
        }



</style>