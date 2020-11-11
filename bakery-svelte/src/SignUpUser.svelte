<script>
    import {firebaseAuth} from './firebase';
    import {user} from './store.js'

    var email, password;
    var uid ;

    function logOn () {

        if (email.length < 4) {
                alert('El email no es valido');
            }
        if (password.length < 6 == 'auth/weak-password') {
            alert('La contraseña debe tener al menos 6 caracteres');

        } 

        firebaseAuth.createUserWithEmailAndPassword(email, password).catch(function(error){
            console.error(error)
        }).then (
            alert('Usuario creado')
        )
        //sendEmailVerification();
        saveUser();
    }

    function sendEmailVerification() {
      firebaseAuth.currentUser.sendEmailVerification().then(function() {
            alert('Revisa tu email!');
      }).catch(function(error) {
            console.log(error)
        });
    }

    function saveUser() {
    var doc = {
            id: uid,
            /*name: '',*/
            email: email,
            password: password
		}
        firebaseAuth.collection('users').add(doc);
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