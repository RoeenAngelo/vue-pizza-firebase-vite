<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <RouterView />
  <div class="info_block_wrapper">
    <RouterView name="delivery" />
    <RouterView name="history" />
  </div>
</template>

<style scoped>
.info_block_wrapper {
  display: flex;
  flex-direction: column;
}

@media(min-width: 900px) {
  .info_block_wrapper{
    flex-direction: row;
  }
}


</style>
