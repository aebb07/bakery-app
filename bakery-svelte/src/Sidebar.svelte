<script>
var sideBar;

async function closeBtn(){
    sideBar = false;
}


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
<nav>
        <div id="mySidebar" class="sidebar">
            <span class="closebtn" onclick={closeBtn}>&times;</span>
            <p>Mi Perfil</p>
            <p>Mis Pedidos</p>
            <p>Métodos de Pago</p>
            <p>Preguntas</p>
            <p>Mi Perfil</p>
            <p on:click={logout}>Salir</p>
        </div>
          
        <!--div class="side-menu">
            <button class="close-btn" on:click={() => closeBtn()}>X</button>
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
        </div-->
    </nav>

<style>
.sidebar {
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


.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: #111;
  color: white;
  padding: 10px 15px;
  border: none;
}

.openbtn:hover {
  background-color: #444;
}

#first {
  transition: margin-left .5s;
  padding: 20px;
}

</style>