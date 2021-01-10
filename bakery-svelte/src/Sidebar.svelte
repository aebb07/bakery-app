<script>
  import {firebaseAuth} from './firebase';
  import { fly } from 'svelte/transition';
  import UserInformation from './UserInformation.svelte';

  import { componente } from './store.js';
  export let show = false;


async function logout () {
	firebaseAuth.signOut()
		.then(
			console.log('User leave.')
		)
		.catch(
			err=>console.error(err)
		);
}

/*function goMiPerfil() {
	$componente = "MyProfile";
}*/

</script>

  {#if show}
  <nav transition:fly={{x: 250, opacity: 1}}>
    
    <div id="user-panel">
      <UserInformation/>
    </div>
 
      <p>Items en el carrito</p>
      <button class="logOut" on:click={logout}>Salir</button>
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
  z-index: 3;
}

#user-panel {
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
}

p {
  padding: 8px 8px 8px 32px;
  font-size: 20px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

p:hover {
  color: #f5f5f5;
}

.logOut {
  font-size: 20px;
  color: #818181;
  display: block;
  transition: 0.3s;
  padding: 8px 8px 8px 32px;
  background: none;
  border: none;
  font-weight: 700;
}

.logOut:hover {
  color: #f5f5f5;
}

</style>