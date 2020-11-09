<script>
    import {user} from './store.js'

</script>

{#if ($user && $user.photoURL)}
      <img class="user-img" src={$user.photoURL} alt="user-picture">
{:else if $user}
        <img class="user-img" src="https://avatars.dicebear.com/api/jdenticon/{$user.email}.svg">
{/if}

{#if ($user && $user.displayName)}
      <h1 class="user-name">HOLA! {$user.displayName}</h1>
      {:else}
        <h1 class="user-email">HOLA! {$user.email}</h1>
{/if}

<style>
      .user-img {
            width: 100px;
            display: flex;
            justify-content: center;
      }

      .user-name {
            font-size: 20px;
            color: #f5f5f5;
      }

      .user-email {
            font-size: 20px;
            color: #f5f5f5;
      }
</style>
