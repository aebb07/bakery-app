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
          <span><i class="fas fa-user"></i></span>
          <p class="user-name">{$user.displayName}</p>
          <span><i class="fas fa-envelope"></i></span><p class="user-email">{$user.email}</p>
          <span><i class="fas fa-lock"></i></span><p>Cambiar mi contraseña <span on:click={goChangePass}><i class="fas fa-chevron-right"></i></span></p>
          <span><i class="fas fa-mobile-alt"></i></span><p>Añadir número de teléfono<span on:click={goAddNumber}><i class="fas fa-chevron-right"></i></span></p>
      {:else if ($user && $user.email)}
          <span><i class="fas fa-user"></i></span><input type="text" placeholder="Nombre">
          <span><i class="fas fa-envelope"></i></span><p class="user-email">{$user.email}</p>
          <span><i class="fas fa-lock"></i></span><p>Cambiar mi contraseña <span on:click={goChangePass}><i class="fas fa-chevron-right"></i></span></p>
          <span><i class="fas fa-mobile-alt"></i></span><p>Añadir número de teléfono<span on:click={goAddNumber}><i class="fas fa-chevron-right"></i></span></p>
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

.user-container {
  padding-top: 30px;
}

.profile {
  padding-left: 45px;
}
</style>