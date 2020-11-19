<script>
    import {firebaseAuth, firestoreDb} from './firebase';
    import { user } from './store.js';
    import { componente } from './store.js';

    var email, password, name;
    

    function logOn () {

        if (email.length < 4) {
                alert('El email no es valido');
            }
        if (password.length < 6 == 'auth/weak-password') {
            alert('La contraseña debe tener al menos 6 caracteres');

        } 

        firebaseAuth.createUserWithEmailAndPassword(email, password).catch(function(error){
            console.error(error)
        }).then (
            userCredential => {
                alert('Usuario creado');
                userCredential.user.sendEmailVerification()
                    .then(
                        function() {
                            alert('Revisa tu email!');
                        }
                    )
                    .catch(
                        function(error) {
                            console.log(error)
                        }
                    );
                    var doc = {
                        name: name,
                        email: userCredential.user.email,
                        uid: userCredential.user.uid
                    };
                    firestoreDb.collection('users').add(doc);
        });
        backToLogin();
    }


// Volver al Login
   function backToLogin() {
	firebaseAuth.signOut()
		.then(
			console.log('User leave.')
		)
		.catch(
			err=>console.error(err)
        );
}

function goBack() {
    $componente = "LoginUser";
}

</script>

<main>
<div class="nav-bar">
    <span class="back-button" on:click={goBack}><i class="fas fa-arrow-left"></i></span>
    <h1 class="signup">Regístrate</h1>
</div>

        <div class="signup-content">
            <div class="name">
                <span class="icon-user"><i class="fas fa-user"></i></span>
                <input type="text" placeholder="Nombre" required bind:value={name}>
              </div> 

                <div class="email">
                    <span class="icon-user"><i class="fas fa-envelope"></i></span>
                    <input type="email" placeholder="Email" required bind:value={email}>
                </div> 

                    <div class="password">
                        <span class="icon-user"><i class="fas fa-lock"></i></span>
                        <input type="password" placeholder="Contraseña" bind:value={password}>
                    </div> 
            <div id="btn">
                <span class="noselect" on:click={logOn}>Crear</span>
                <div id="circle">

                </div>
            </div>
        </div>
</main>


<style>
main {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2d3436;
  background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);
}

.signup-content {
    /*align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;
    flex-direction: column;*/
    padding-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
}

.nav-bar {
  padding: 15px;
  display: flex;
  align-items: center;
  /*box-shadow: 0 3px 7px -3px gray;*/
}

.back-button {
  font-size: 20px;
  padding: 10px;
  color: #f5f5f5;
}

.signup {
  padding-left: 40px;
  color: #f5f5f5;
}

.name, .email, .password {
    display: flex;
    border-bottom: 1px solid #222;
    padding-top: 25px;
    width: 368px;
}

.icon-user {
  padding-right: 15px;
  font-size: 20px;
  color: #f5f5f5;
}

input[type="text"], input[type="email"], input[type="password"]{
    border: none;
    background: none;
    color: #ccc;
}


#btn {
    background: #222;
    height: 50px;
    min-width: 150px;
    border: none;
    color: #f5f5f5;
    font-size: 25px;
    font-family: 'Poppins';
    position: relative;
    transition: 1s;
    -webkit-tap-highlight-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 40px;
    width: 0;
}

#btn #circle {
    width: 5px;
    height: 5px;
    background: transparent;
    position: absolute;
   /* top: 0;*/
    left: 50%;
    overflow: hidden;
    transition: 500ms;
}

.noselect {
  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
}

#btn:hover {
  background: transparent;
}

#btn:hover #circle {
  height: 30px;
  width: 150px;
  left: 0;
  border-radius: 0;
  border-bottom: 2px solid #f5f5f5;
}

</style>