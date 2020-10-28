<script>
import {firebaseAuth} from './firebase';
export var email, password;

function logIn() {
    firebaseAuth.signInWithEmailAndPassword(email, password).catch(function(error) {
            console.log('Hubo un error al iniciar sesión')
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Ups! contraseña erronea');
            } else {
                alert(errorMessage);
            }
            console.log(error);
            });
}


function sendPasswordReset() {
    firebaseAuth.sendPasswordResetEmail(email).then(function() {
        alert('Revisa tu email!');
      }).catch(function(error) {
        console.log('Error')
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/invalid-email') {
          alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
          alert(errorMessage);
        }
        console.log(error);
      });
    }

</script>

<input type="text" placeholder="Email" bind:value={email}>
<input type="password" placeholder="Contraseña" bind:value={password}>
<button on:click={sendPasswordReset}>¿Olvidaste tu contraseña?</button>
<button on:click={logIn}>Entrar</button>