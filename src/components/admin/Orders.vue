<script setup>
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useStoreOrders } from '../../stores/storeOrders';

const storeOrders = useStoreOrders()
const { allOrders, message } = storeToRefs(storeOrders)
const { deleteOrder } = storeOrders

const showOrders = ref(false)

</script>

<template>
  <section class="admin_section">
    <header class="admin_section_header">
      <h3>Current orders ({{ allOrders.length }})</h3>
      <small
        @click="showOrders = !showOrders"
        action=""
        class="showOrHide"
      >
        {{ showOrders ? '&#x25B2;' : '&#x25BC' }}
      </small> 
    </header>
    <p
      v-if="message"
      class="error"
    >
      {{ message }} error
    </p>
    <table
      v-show="showOrders"
    >
      <tr v-if="allOrders.length > 0">
        <th>Item</th>
        <th>Size</th>
        <th>Quantity</th>
        <th>Price (total)</th>
      </tr>

      <template
        v-for="order in allOrders"
        :key="order.id"
      >
        <tr>
          <td>
            <strong>Order Number: {{ order.id }}</strong>
            <button
              @click="deleteOrder(order.id)"
              class="btn_remove"
              type="button"
            >
              &times;
            </button>
          </td>
        </tr>
        <tr
          v-for="orderItem in order.pizzas"
          :key="orderItem.name + orderItem.size"
        >
          <td>{{ orderItem.name }}</td>
          <td>{{ `${orderItem.size}"` }}</td>
          <td>{{ orderItem.quantity }}</td>
          <td>{{ (orderItem.price * orderItem.quantity).toFixed(2)}}</td>
        </tr>
      </template>
    </table>
  </section>
</template>



<style lang="scss" scoped>
.error {
  color: rgb(180,67,67);
  border: 1px solid;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
}
</style>