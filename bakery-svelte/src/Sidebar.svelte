<script>
  import {firebaseAuth} from './firebase';
  import { fly } from 'svelte/transition';


  export let show = false;
  //export var user;
  import {user} from './store.js'
  var localUser;
	const unsubscribe = user.subscribe(value => {
		localUser = value;
	});

  export var componente;

async function logout () {
	firebaseAuth.signOut()
		.then(
			console.log('User leave.')
		)
		.catch(
			err=>console.error(err)
		);
}

function goMiPerfil() {
	componente = "MiPerfil";
}
</script>

  {#if show}
  <nav transition:fly={{x: 250, opacity: 1}}>

    
    <div id="user-panel">
      <img class="user-img" src={localUser.photoURL} alt="user-picture">
      <h1 class="user-name">HOLA! {localUser.displayName}</h1>
    </div>
 
      <p on:click={goMiPerfil}>Mi Perfil</p>
      <p>Mis Pedidos</p>
      <p>Métodos de Pago</p>
      <p>Preguntas</p>
      <button on:click={logout}>Salir</button>
    </nav>
{/if}

         
        
<style>

nav {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  padding: 2rem 1rem 0.6rem;
  background: #242424;
  overflow-x: auto;
	width: 20rem;
  z-index: 1;
}

p {
  padding: 8px 8px 8px 32px;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

p:hover {
  color: #f1f1f1;
}

</style>