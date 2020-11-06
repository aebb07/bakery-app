<script>
  export var componente;
  var name= ''; 
  var email, photoUrl, emailVerified;

  
function goBack() {
  componente = "Content";
}
</script>


<div class="nav-bar">
      <span class="back-button" on:click={goBack}><i class="fas fa-arrow-left"></i></span>
</div>
    <div>


    </div>


<style>
.back-button {
  font-size: 20px;
  padding: 10px;
}

.nav-bar {
  padding: 15px;
}
</style>