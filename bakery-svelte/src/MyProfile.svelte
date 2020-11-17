<script>
 import { componente } from './store.js'
 import {user} from './store.js'

  
function goBack() {
  $componente = "Content";
}

function goChangePass() {
  $componente = "ChangePassword";
}
</script>


<div class="nav-bar">
      <span class="back-button" on:click={goBack}><i class="fas fa-arrow-left"></i></span>
      <h1 class="profile">Mi Perfil</h1>
</div>
      {#if ($user && $user.displayName)}
          <p class="user-name">{$user.displayName}</p>
          <p class="user-email">{$user.email}</p>
          <p>Cambiar mi contraseña <span on:click={goChangePass}><i class="fas fa-chevron-right"></i></span></p>
      {:else if ($user && $user.email)}
          <input type="text" placeholder="Nombre">
          <p class="user-email">{$user.email}</p>
          <p>Cambiar mi contraseña <span on:click={goChangePass}><i class="fas fa-chevron-right"></i></span></p>
      {:else}
        <p>Inicia sesión</p>
      {/if}


<style>
.back-button {
  font-size: 20px;
  padding: 10px;
}

.nav-bar {
  padding: 15px;
  display: flex;
  align-items: center;
}

.profile {
  padding-left: 45px;
}
</style>