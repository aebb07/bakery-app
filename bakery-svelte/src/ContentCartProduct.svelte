<script>
    import { products } from './cart.js'
    export let product

function addOne() {
    product.quantity++
    $products = $products
}

function subtractOne() {
    product.quantity--
    if (product.quantity < 1) 
    removeProduct(); 
    $products = $products
}

function removeProduct() {
    $products = $products.filter(item => product.id != item.id)
    
}

</script>


<div class="product">
    Name: {product.name}
    Price: {product.price}
    Units: {product.quantity}
    <button on:click={addOne}>+</button>
    <button on:click={subtractOne}>-</button>
    <button on:click={removeProduct}>Remove</button>

</div>


<style>

</style>