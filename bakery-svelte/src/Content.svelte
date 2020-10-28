<script>
    import {firebaseAuth} from './firebase';
    export var user;

    var name, photoUrl;

</script>

{#if user}
<h1>HOLA!{user.displayName}</h1>
<img src={user.photoURL} alt="user-picture">
{/if}