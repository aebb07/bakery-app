<script>
    let count = 0;

    function plusCount() {
		count += 1;
    }
    
    function minusCount() {
		count -= 1;
	}
</script>


<article class="contact-card">
	<h2>
		<slot>
			<span class="missing">BLABLA</span>
		</slot>
	</h2>

	<div class="address">
		<slot>
			<span class="plus" on:click={plusCount}><i class="fas fa-plus-circle"></i></span>
                <span>{count}</span>
			<span class="minus" on:click={minusCount}><i class="fas fa-minus-circle"></i></span>
		</slot>
	</div>
</article>


<style>

</style>