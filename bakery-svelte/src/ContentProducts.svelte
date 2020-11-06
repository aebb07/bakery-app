<script>

var products = [
	{id: 1, name:'Pan Francés'},
	{id: 2, name:'Canillas'},
	{id: 3, name:'Piñitas Saladas'},
	{id: 4, name:'Bombas Saladas'},
	{id: 5, name:'Golfeados'}
];


let count = 0;

function plusCount() {
    count += 1;
}

function minusCount() {
    count -= 1
    if (count === -1) {
        count = 0;
    }
}

</script>

{#each products as product (product.id)}
<div class="product-card">
	<div class="product">
		<div class="background-white">
			<div class="background-product">
				<h1 class="title-product">{product.name}</h1>
			</div>

			<div class="buttons">
					<span class="plus" on:click={plusCount}><i class="fas fa-plus-circle"></i></span>
					<span>{count}</span>
					<span class="minus" on:click={minusCount}><i class="fas fa-minus-circle"></i></span>
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

.buttons {
	display: flex;
	align-items: center;
	padding-top: 10px;
	justify-content: center;
	font-size: 20px;
}
</style>