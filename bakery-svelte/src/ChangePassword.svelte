<script>
    //import {user} from './store.js';
    import {componente} from './store.js';

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
  <h1 class="password">Cambiar contraseña</h1>
</div>

    <div class="password-container">
        <p class="current-password">Contraseña Actual</p>
          <input type="text" placeholder="Contraseña actual">

          <div class="newPassword-container">
              <p class="new-password">Nueva Contraseña</p>
                  <input type="text" placeholder="Nueva contraseña">
          </div>

              <div class="button-password">
                  <button class="change-pass-button">Hecho</button>
              </div>
    </div>

<style>

.back-button {
  font-size: 20px;
  padding: 10px;
}

.nav-bar {
  padding: 15px;
  display: flex;
  align-items: center;
  box-shadow: 0 3px 7px -3px gray;
}

.password {
  padding-left: 40px;
}

.password-container {
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
}

input[type="text"] {
  border: none;
  padding: 0px;
  border-bottom: 1px solid #2e2e2e;
}

.current-password, .new-password {
  margin-bottom: 15px;
}

.newPassword-container {
  padding-top: 20px;
}

.change-pass-button{
  display: flex;
}

.button-password {
  border-top: 1px solid #ccc;
  margin-top: 100px;
}

</style>