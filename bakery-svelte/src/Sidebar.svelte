<script>
  import {firebaseAuth} from './firebase';
  import { fly } from 'svelte/transition';
  import MiPerfil from './MiPerfil.svelte';

  export let show = false;
  let miPerfil_show = false;

async function logout () {
	firebaseAuth.signOut()
		.then(
			console.log('User leave.')
		)
		.catch(
			err=>console.error(err)
		);
}
</script>

  {#if show}
  <nav transition:fly={{x: 250, opacity: 1}}>

    <!--div id="user-panel">
      <img class="user-img" src={user.photoURL} alt="user-picture">
      <h1 class="user-name">HOLA! {user.displayName}</h1>
    </div-->
      <p on:click={() => {miPerfil_show = true; show = false;}}>Mi Perfil</p>
      <p on:click={() => {miPerfil_show = true; show = false;}}>Mis Pedidos</p>
      <p on:click={() => {miPerfil_show = true; show = false;}}>Métodos de Pago</p>
      <p on:click={() => {miPerfil_show = true; show = false;}}>Preguntas</p>
      <button on:click={() => {logout}}>Salir</button>
    </nav>
{/if}

<MiPerfil bind:show={miPerfil_show}/>
          
        
<style>

nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  padding: 2rem 1rem 0.6rem;
  background: #242424;
  overflow-x: auto;
	width: 20rem;
}
/*.sidebar {
  height: 100%; 
  width: 0; 
  position: fixed; 
  z-index: 1; 
  top: 0;
  left: 0;
  background-color: #111; 
  overflow-x: hidden; 
  padding-top: 60px; 
  transition: 0.5s; 
}

.sidebar p {
  padding: 8px 8px 8px 32px;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidebar p:hover {
  color: #f1f1f1;
}

.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
*/
</style>