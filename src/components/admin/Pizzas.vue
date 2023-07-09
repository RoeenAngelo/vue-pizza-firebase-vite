<script setup>

import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useStorePizzas } from '../../stores/storePizzas';

const storePizzas = useStorePizzas()
const { allPizzas, message } = storeToRefs(storePizzas)
const { deletePizza } = storePizzas

const showMenu = ref(false)

</script>

<template>
  <section class="admin_section">
    <header class="admin_section_header">
      <h3>Menu</h3>
      <small
        @click="showMenu = !showMenu"
        action=""
        class="showOrHide"
      >
        {{ showMenu ? '&#x25B2;' : '&#x25BC' }}
      </small> 
    </header>
    <p
      v-if="message"
      class="error"
    >
      {{ message }}
    </p>
    <table
      v-show="showMenu"      
    >
      <thead>
        <tr>
          <th>Pizza</th>
          <th>Remove from menu</th>
        </tr>
      </thead>
      <tbody
        v-for="pizza in allPizzas"
        :key="pizza.id"
      >
        <td>{{ pizza.name }}</td>
        <td>
          <button
            @click="deletePizza(pizza.id)"
            class="btn_remove"
            type="button"
          >
            &times;
          </button>
        </td>        
      </tbody>
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