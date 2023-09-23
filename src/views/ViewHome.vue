<script setup>

</script>

<template>
  <main class="hot">
    <div class="hot_text">
      <h3>Hot out of the oven!</h3>
      <p class="hot_pizza_name">Vegetarian Hot Pizza</p>
      <p class="hot_pizza_description">Our signature Vegetarian pizza, but with a kick!</p>
      <RouterLink :to="{ name: 'menu' }">Order Now!</RouterLink>
    </div>
    <img src="@/assets/images/fire.jpg" alt="pizza oven image" class="hot_img">
  </main>
</template>



<style lang="scss" scoped>
.hot {
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: #bb2118;
  }
}

.hot_pizza_name {
  font-size: 1.8rem;
}

.hot_pizza_description {
  font-style: italic;
  font-weight: 300;
}
.hot_text, .hot_img {
  flex: 1;
  padding: 2rem;
  text-align: center;
}

@media(min-width: 900px) {
  .hot{
    flex-direction: row;
    align-items: center;
  }
}
</style>