<script setup>
import NewPizza from '../components/admin/NewPizza.vue';
import Pizzas from '../components/admin/Pizzas.vue';
import Orders from '../components/admin/Orders.vue';
import { useStoreAuth } from '../stores/storeAuth';
import { storeToRefs } from 'pinia';

const storeAuth = useStoreAuth()
const { userData } = storeToRefs(storeAuth)

</script>

<template>
<div
  v-if="userData"
>
  <p class="user_email">Welcome {{ userData?.email }}</p>
  <h3>Admin</h3>
  <div class="row">
    <NewPizza />
    <Pizzas />
  </div>
  <Orders />
</div>
<p
  v-else
  class="warning_msg"
>
You must be an admin to view this section</p>
</template>



<style lang="scss" scoped>
.row {
  display: flex;
  flex-direction: column;
}

.user_email, .warning_msg, h3 {
  margin: 1rem;

}

@media(min-width: 900px) {
  .row {
    flex-direction: row;
  }
}
</style>