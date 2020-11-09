<script>
import { componente } from './store.js'

var products = [
	{id: 1, name:'Pan Francés', count: 0, precio: 1,componente: "PanFrances"},
	{id: 2, name:'Canillas', count: 0, precio: 1,componente: "Canillas"},
	{id: 3, name:'Piñitas Saladas', count: 0, precio: 1,componente: "Piñitas Saladas"},
	{id: 4, name:'Bombas Saladas', count: 0, precio: 1,componente: "Bombas Saladas"},
	{id: 5, name:'Golfeados', count: 0, precio: 1,componente: "Golfeados"}
];




function plusCount(product) {
    product.count += 1;
}

function minusCount(product) {
    product.count -= 1
    if (product.count < 0) {
        product.count = 0;
    }
}

function goToProduct(product) {
	$componente = product.componente;
}

</script>

{#each products as product (product.id)}
<div class="product-card">
	<div class="product">
		<div class="background-white">
			<div class="background-product" on:click={()=>{goToProduct(product)}}>
				<h1 class="title-product">{product.name}</h1>
			</div>
				<div class="card-bottom">
					<div class="buttons">
							<span class="plus" on:click={()=>{plusCount(product)}}><i class="fas fa-plus-circle"></i></span>
							<span>{product.count}</span>
							<span class="minus" on:click={minusCount(product)}><i class="fas fa-minus-circle"></i></span>
					</div>
							<p class="medidas"><strong>Precio:</strong> ${product.precio}</p>
				</div>
		</div>
	</div>
</div>
{/each}


<style>


.product-card {
	display: flex;
	justify-content: center;
	padding-top: 20px;
	background: #242424;
}

.product {
	width: 800px !important;
}

.background-product {
	background-color: coral;
	color: #f5f5f5;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	padding: 50px;
	text-align: center;
}

.background-white {
	background-color: #f5f5f5;
	border-radius: 20px;
	padding-bottom: 10px;
}

.title-product {
	font-weight: 800;
	text-transform: uppercase;
}

.card-bottom {
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding-top: 10px;
}

.buttons {
	font-size: 20px;
}

.medidas {
	font-size: 12px;
	padding-left: 30px;
}
</style>