<script>
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


<div class="product-card">
	<div>
		<span class="title-product">BLABLA</span>
	</div>

	<div class="buttons">
		<dispatch_dev>
			<span class="plus" on:click={plusCount}><i class="fas fa-plus-circle"></i></span>
            <span>{count}</span>
			<span class="minus" on:click={minusCount}><i class="fas fa-minus-circle"></i></span>
		</div>
</div>

<style>

.product-card {
	display: flex;
justify-content: center;
}
</style>