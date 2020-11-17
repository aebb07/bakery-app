<script>
    import {user} from './store.js'

var newPassword = getASecureRandomPassword();

$user.updatePassword(newPassword).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});

</script>

<p>Contraseña Actual</p>
<input type="text" placeholder="Contraseña actual">

<p>Nueva Contraseña</p>
<input type="text" placeholder="Nueva contraseña">


<button class="change-pass-button">Hecho</button>


<style>

</style>