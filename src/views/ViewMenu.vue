<script setup>
import { useStoreBasket } from '@/stores/storeBasket'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue';


const storeBasket = useStoreBasket()
const { basket, total, basketText }  = storeToRefs(storeBasket)
const { addToBasket, increaseQuantity, decreaseQuantity, addNewOrder } = storeBasket

import usePizzas from "@/composables/usePizzas";
const { allPizzas } = usePizzas();

// import { useStorePizzas } from '@/stores/storePizzas'
// const storePizzas = useStorePizzas()
// const { allPizzas }  = storeToRefs(storePizzas)



</script>

<template>
  <div class="menu_wrapper">
    <div class="menu">
      <h3>~ Authentic Handmade Pizza ~</h3>
      <table>
        <tbody
          v-for="pizza in allPizzas"
          :key="pizza.id"
        >
          <tr>
            <td>
              <strong>~ {{ pizza.name }} ~</strong>
            </td>
          </tr>
          <tr>
            <td>
              <small>
                {{ pizza.description }}
              </small>
            </td>
          </tr>
          <tr
            v-for="option in pizza.options"
            :key="pizza.id + option.size"
          >
            <td>{{ option.size }}"</td>
            <td>${{ option.price }}</td>
            <td>
              <button
                @click="addToBasket(pizza, option)"
                type="button"
              >
              &#43;
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 
      Basket 
    -->
    <div class="basket">
      <h3>~ Basket ~</h3>
      <div v-if="basket.length > 0">
        <table>
          <tbody
            v-for="(item, index) in basket"
            :key="index"
          >
            <tr>
            <td>
              <button
                @click="decreaseQuantity(item)"
                class="quantity_btn"
                type="button"
              >&#8722;</button>
              <span>{{ item.quantity }}</span>
              <button
                @click="increaseQuantity(item)"
                class="quantity_btn"
                type="button"
              >&#43;</button>
            </td>
            <td>{{ item.name }} {{ item.size }}"</td>
            <td> ${{ (item.price * item.quantity).toFixed(2) }}</td>
          </tr>
          </tbody>
        </table>
        <p>Order total: {{ `$${total.toFixed(2)}` }}</p>
        <button
          @click="addNewOrder"          
        >
          Place order
        </button>
      </div>
      <div v-else>
        <p>{{ basketText }}</p>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
h3 {
  text-align: center;
}

/*
  Mobile layout
*/
  .menu_wrapper {
    display: flex;
    flex-direction: column;
    color: rgb(80, 96, 112);
  }

  .menu, .basket {
    background-color: #faf1e2;
    border-radius: 3px;
    height: 100vh;
    padding: 1rem;
  }

  .quantity_btn {
    border: none;
    padding: 0.4rem;
  }

/*
  Desktop layout
*/
  @media(min-width: 900px) {
    .menu_wrapper {
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
    }

    .menu {
      flex: 2;
      border-right: 1px solid rgb(202, 202, 202);
    }

    .basket {
      flex: 1;
    }

  }
</style>