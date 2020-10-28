<script>
import {firebaseAuth} from './firebase';
export var user;


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
{#if user}
<nav>
    <h1><i class="fas fa-bars"></i></h1>
    <div class="side-menu">
        <div id="user-panel">
            <img class="user-img" src={user.photoURL} alt="user-picture">
            <h1 class="user-name">HOLA! {user.displayName}</h1>
        </div>
                <p>Mi Perfil</p>
                <p>Mis Pedidos</p>
                <p>Métodos de Pago</p>
                <p>Preguntas</p>
                <p>Mi Perfil</p>
                <p on:click={logout}>Salir</p>
    </div>
</nav>
{/if}

<style>
    .side-menu {
        float: left;
    }

    p {
        padding: 3px;
    }

    p:hover {
        background-color: #ccc;
        padding: 3px;
    }

</style>
