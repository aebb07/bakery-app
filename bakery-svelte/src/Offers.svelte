<script>
    import { Swipe, SwipeItem } from "svelte-swipe";
  
    const swipeConfig = {
      autoplay: false,
      delay: 1000,
      showIndicators: true,
      transitionDuration: 1000,
      defaultIndex: 0,
    };
</script>


<div class="swipe-holder">
    <Swipe {...swipeConfig}>
      <SwipeItem>
        <div class="offers-component">
            <p>OFFERS</p>
        </div>
      </SwipeItem>
  
      <SwipeItem>
        <div class="offers-component">
            <p>OFFERS</p>
        </div>
      </SwipeItem>
  
      <SwipeItem>
        <div class="offers-component">
            <p class="offer-title">OFFERS</p>
        </div>
      </SwipeItem>
  
      <SwipeItem>
        <div class="offers-component">
            <p class="offer-title">OFFERS</p>
        </div>
      </SwipeItem>
    </Swipe>
  </div>


<style>
.offers-component {
        background-color: #1f9f8d;
        padding: 4.7em;
		margin: 0 auto;
        font-family: 'Poppins';
        color: #f5f5f5;
        font-size: 20px;
        font-weight: 800;
        justify-content: center;
        display: flex;
    }

.swipe-holder{
      height: 28vh;
      width: 100%;
    }
 
</style>

