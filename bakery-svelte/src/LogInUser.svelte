<script>
import {firebaseAuth} from './firebase';
import {componente} from './store.js';

export var email, password;


function logIn() {
    firebaseAuth.signInWithEmailAndPassword(email, password).catch(function(error) {
        console.log('Hubo un error al iniciar sesión')
            var errorCode = error.code;
            var errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Ups! contraseña erronea');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
                });
}


function sendPasswordReset() {
    firebaseAuth.sendPasswordResetEmail(email).then(function() {
        alert('Revisa tu email!');
      }).catch(function(error) {
        console.log('Error')
        var errorCode = error.code;
        var errorMessage = error.message;
            if (errorCode == 'auth/invalid-email') {
              alert(errorMessage);
            } else if (errorCode == 'auth/user-not-found') {
              alert(errorMessage);
            }
            console.log(error);
          });
    }

    function goBack() {
    $componente = "Login";
}

</script>



  <div class="nav-bar">
    <span class="back-button" on:click={goBack}><i class="fas fa-arrow-left"></i></span>
    <h1 class="signin">Inicia Sesión</h1>
  </div>


      <div class="login-content">
          <div class="email">
            <span class="icon-user"><i class="fas fa-envelope"></i></span>
            <input type="email" placeholder="Email" required bind:value={email}>
          </div> 

              <div class="password">
                <span class="icon-user"><i class="fas fa-lock"></i></span>
                <input type="password" placeholder="Contraseña" bind:value={password}>
              </div> 

                  <div id="btn1" on:click={sendPasswordReset}>
                    <span class="noselect1">¿Olvidaste tu contraseña?</span>
                    <div id="circle1">
                    </div>
                  </div>

                      <div id="btn" on:click={logIn}>
                        <span class="noselect">Entrar</span>
                        <div id="circle">
                        </div>
                      </div>
      </div>



<style>
/*main {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2d3436;
  background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);
}*/

.login-content {
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
}

.nav-bar {
  padding: 15px;
  display: flex;
  align-items: center;
}

.signin {
  padding-left: 40px;
  color: #f5f5f5;
}


input[type="email"], input[type="password"]{
    border: none;
    background: none;
    color: #ccc;
}

.icon-user {
  padding-right: 15px;
  font-size: 20px;
  color: #f5f5f5;
}

.back-button {
  font-size: 20px;
  padding: 10px;
  color: #f5f5f5;
}

.email, .password {
    display: flex;
    border-bottom: 1px solid #222;
    padding-top: 25px;
    width: 368px;
}


#btn {
    background: #222;
    height: 50px;
    min-width: 150px;
    border: none;
    color: #f5f5f5;
    font-size: 15px;
    font-family: 'Poppins';
    position: relative;
    transition: 1s;
    -webkit-tap-highlight-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 40px;
    width: 225px;
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
  width: 180px;
  left: 25px;
  border-radius: 0;
  border-bottom: 2px solid #f5f5f5;
}

#btn1 {
  padding-top: 25px;
  cursor: pointer;
}

.noselect1 {
  color: #f5f5f5;
  font-size: 15px;
}
</style>