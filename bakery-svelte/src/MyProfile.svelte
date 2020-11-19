<script>
 import { componente } from './store.js'
 import {user} from './store.js'

  
function goBack() {
  $componente = "Content";
}

function goChangePass() {
  $componente = "ChangePassword";
}

function goAddNumber() {
  $componente = "PhoneNumber";
}
</script>


<div class="nav-bar">
      <span class="back-button" on:click={goBack}><i class="fas fa-arrow-left"></i></span>
      <h1 class="profile">Mi Perfil</h1>
</div>
  <div class="user-container">
      {#if ($user && $user.displayName)}

        <div class="name">
          <span class="icon-user"><i class="fas fa-user"></i></span>
          <p class="user-name">{$user.displayName}</p>
        </div> 

          <div class="email">
            <span class="icon-user"><i class="fas fa-envelope"></i></span>
            <p class="user-email">{$user.email}</p>
          </div>

            <div class="change" on:click={goChangePass}>
              <span class="icon-user"><i class="fas fa-lock"></i></span>
              <p>Cambiar mi contraseña <span class="arrow"><i class="fas fa-chevron-right"></i></span></p>
            </div>

              <div class="number" on:click={goAddNumber}>
                <span class="icon-user"><i class="fas fa-mobile"></i></span>
                <p>Añadir número de teléfono<span class="arrow"><i class="fas fa-chevron-right"></i></span></p>
              </div>

      {:else if ($user && $user.email)}
              
              <div class="name">
                <span class="icon-user"><i class="fas fa-user"></i></span>
                <input type="text" placeholder="Nombre">
              </div>

                <div class="email">
                  <span class="icon-user"><i class="fas fa-envelope"></i></span>
                  <p class="user-email">{$user.email}</p>
                </div>

                  <div class="change" on:click={goChangePass}>
                    <span class="icon-user"><i class="fas fa-lock"></i></span>
                    <p>Cambiar mi contraseña <span><i class="fas fa-chevron-right"></i></span></p>
                  </div>

                    <div class="number" on:click={goAddNumber}>
                      <span class="icon-user"><i class="fas fa-mobile"></i></span>
                      <p>Añadir número de teléfono<span class="arrow"><i class="fas fa-chevron-right"></i></span></p>
                    </div>
      {:else}
        <p>Inicia sesión</p>
      {/if}
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

.profile {
  padding-left: 40px;
}

.user-container {
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
}

.name, .email, .change, .number {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-top: 10px;
  padding-bottom: 10px;
}

.icon-user {
  padding-right: 15px;
  font-size: 20px;
}

.arrow {
  font-size: 15px;
  color: gray;
  padding-left: 20px;
}

</style>