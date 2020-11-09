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
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor venenatis diam, at blandit quam facilisis ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ante purus, placerat sed laoreet vel, posuere sed mauris. Quisque ultrices mi a lorem lacinia, eu condimentum enim facilisis. Nulla faucibus, dui quis auctor blandit, mauris neque porta augue, a tincidunt enim odio at est. Nunc dictum est quis hendrerit gravida. Donec et dui commodo, gravida orci et, elementum eros. Maecenas erat quam, scelerisque a libero a, egestas varius orci. Praesent sed dui erat. Nam finibus pellentesque ex, vitae maximus mi congue ac. Mauris semper ipsum non ornare ullamcorper.</p>

    <p>Medida Aprox</p>
    <p>-----</p>
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