<script setup>


</script>

<style lang="scss" scoped>

</style>

<template>
  <div class="about">
    <section class="intro">
      <div class="info_text_wrapper">
        <h3>Quality Pizza Since 1930</h3>
        <p class="info_text">Nothing, but the best quality ingredients.</p>
      </div>
      <img
        class="info_img"
        alt="calzone image"
        src="@/assets/images/calzone.jpg"
      >
    </section>
    <section class="more_info_wrapper">
      <h3>Click on the links below for more info</h3>
      <nav>
        <ul>
          <RouterLink class="link" :to="{ name: 'history' }">Our History</RouterLink>
          <RouterLink class="link" :to="{ name: 'delivery' }">Delivery</RouterLink>
          <RouterLink class="link" :to="{ name: 'locations' }">Locations</RouterLink>
        </ul>
      </nav>
      <RouterView />
    </section>

  </div>
</template>

<style>

</style>
