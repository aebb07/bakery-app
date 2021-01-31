<script>
    import { products } from './cart.js'
    export let product = {}

    function buyProduct () {
        for (let item of $products){
            if(item.id == product.id){
                item.quantity++
                $products = $products
                return
            }
        }
        product.quantity = 1
        console.log(product.quantity)
        $products = [...$products, product]
    }
</script>


<div class="product">
    id: {product.id} 
    name: {product.name} 
    price: {product.price} 
    <button on:click={buyProduct}>Buy</button>
</div>


<style>

</style>