<script setup>
import SignIn from './admin/SignIn.vue';


</script>

<template>
  <header>
    <SignIn />
    <h1 class="site_title">
      <RouterLink :to="{ name: 'home' }" > ~ Pizza Planet ~</RouterLink>
    </h1>
    <nav>
      <RouterLink class="link" :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink class="link" :to="{ name: 'menu' }">Menu</RouterLink>
      <RouterLink class="link" :to="{ name: 'about' }">About</RouterLink>
      <RouterLink class="link" :to="{ name: 'admin' }">Admin</RouterLink>
    </nav>
    <h2>The #1 Pizza Destination</h2>
  </header>
</template>


<style lang="scss" scoped>
/*
  Mobile
*/
  .site_title {
      font-size: 3.6rem;
      color: aliceblue;
      transform: rotate(-8deg);
      margin-bottom: 2rem;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    background: url('@/assets/images/main-bg.jpg') no-repeat;
    height: 650px;
    background-size: cover;
    background-position: center;
    text-shadow: 1px 1px 3px rgb(20, 20, 20);
    color: aliceblue;
  }

  h2 {
    margin: 2rem 0;
    color: antiquewhite;
    font-size: 2rem;
  }

</style>