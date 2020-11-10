<script>
import { componente } from './store.js'

function goBack() {
  $componente = "Content";
}
</script>

<div class="nav-bar">
    <span class="back-button" on:click={goBack}><i class="fas fa-arrow-left"></i></span>
    <h1 class="description-title">Pan Francés</h1>
</div>

<div class="description-content">
    <p>Ingredientes:</p>
    <p>Lorem ipsum dolor sit amet.
    <p>Consectetur adipiscing elit.</p> 
    <p>Sed porttitor venenatis diam.</p>  
    <p>At blandit quam facilisis ac.</p> 
    <p>Vestibulum ante ipsum primis in faucibus</p> 
    
    <p>Quisque ultrices mi a lorem lacinia, eu condimentum enim facilisis. Nulla faucibus, dui quis auctor blandit, mauris neque porta augue, a tincidunt enim odio at est. Nunc dictum est quis hendrerit gravida. Donec et dui commodo, gravida orci et, elementum eros. Maecenas erat quam, scelerisque a libero a, egestas varius orci. Praesent sed dui erat. Nam finibus pellentesque ex, vitae maximus mi congue ac. Mauris semper ipsum non ornare ullamcorper.</p> 

    <p>Medida Aprox</p>
    <p>--x--</p>
</div>

<style>
.back-button {
  font-size: 20px;
  padding: 10px;
}

.nav-bar {
  padding: 15px;
  background-color: coral;
  padding-bottom: 50px;
}

.description-title {
    padding-left: 45px;
    display: flex;
    justify-content: center;
}
</style>