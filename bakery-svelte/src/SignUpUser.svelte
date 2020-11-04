<script>
    import {firebaseAuth} from './firebase';

    var email, password;

    function logOn () {

        if (email.length < 4) {
                alert('El email no es valido');
            }
            if (password.length < 6 == 'auth/weak-password') {
                alert('La contraseña debe tener al menos 6 caracteres');

            } else {
                alert(errorMessage);
            }
            console.log(error);

        firebaseAuth.createUserWithEmailAndPassword(email, password).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        });
        sendEmailVerification()
    }

    function sendEmailVerification() {
      firebaseAuth.currentUser.sendEmailVerification().then(function() {
            alert('Revisa tu email!');
      }).catch(function(error) {
            console.log(error)
        });
    }
</script>

<div class="signup-content">
    <input type="text" placeholder="Email" bind:value={email}>
    <input type="password" placeholder="Contraseña" bind:value={password}>
    <button on:click={logOn}>Crear</button>
</div>

<style>
.signup-content {
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;
    flex-direction: column;
}
</style>