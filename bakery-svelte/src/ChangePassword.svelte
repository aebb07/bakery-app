<script>
    //import {user} from './store.js';
    import {componente} from '.store.js';

//var newPassword = getASecureRandomPassword();

/*$user.updatePassword(newPassword).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});*/


function goProfile() {
  $componente = "MyProfile";
}

</script>


<div class="nav-bar">
  <span class="back-button" on:click={goProfile}><i class="fas fa-arrow-left"></i></span>
  <h1 class="profile">Cambiar contraseña</h1>
</div>

<p>Contraseña Actual</p>
<input type="text" placeholder="Contraseña actual">

<p>Nueva Contraseña</p>
<input type="text" placeholder="Nueva contraseña">


<button class="change-pass-button">Hecho</button>


<style>
.nav-bar {
  padding: 15px;
  display: flex;
  align-items: center;
  box-shadow: 0 3px 7px -3px gray;
}
</style>