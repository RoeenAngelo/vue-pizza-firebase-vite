<script setup>
import { ref } from 'vue';
import { addDoc } from 'firebase/firestore'
import { dbPizzasRef } from '@/firebase'

const message = ref('')

const newPizza = ref({
  name: 'Eg. Margherita',
  description: 'Eg. A delicious tomato based pizza topped with mozzarella',
  options: [
    {size: 9, price: 6.95},
    {size: 12, price: 9.95}
  ]
})

async function add() {
  try {
    await addDoc(dbPizzasRef, newPizza.value)
    message.value = `Pizza ${newPizza.value.name} has been added`
  } 
  catch (error) {
    message.value = "There was an error adding the pizza..."
  }

}

const showAddNewPizza = ref(false)
</script>

<template>
  <section class="admin_section">
    <header class="admin_section_header">
      <h3>Add new pizza</h3>
      <small
        @click="showAddNewPizza = !showAddNewPizza"
        action=""
        class="showOrHide"
      >
        {{ showAddNewPizza ? '&#x25B2;' : '&#x25BC' }}
      </small> 
    </header> 
      <form
      v-show="showAddNewPizza"
      >
        <div class="form_group">
          <label for="name">Name</label>
          <input
            v-model="newPizza.name"
            id="name"
            type="text"
          >
        </div>
        <div class="form_group">
          <label for="description">Description</label>
          <textarea
            v-model="newPizza.description"
            id="description"
            rows="5"
          >
          </textarea>
        </div>
        <p>
          <strong>Option 1:</strong>
        </p>
        <div class="form_group">
          <label for="size1">Size</label>
          <input
            v-model="newPizza.options[0].size"
            id="size1"
            type="text"
          >
        </div>
        <div class="form_group">
          <label for="price1">Price</label>
          <input
            v-model="newPizza.options[0].price"
            id="price1"
            type="text"
          >
        </div>
        <p>
          <strong>Option 2:</strong>
        </p>
        <div class="form_group">
          <label for="size2">Size</label>
          <input
            v-model="newPizza.options[1].size"
            id="size2"
            type="text"
          >
        </div>
        <div class="form_group">
          <label for="price2">Price</label>
          <input
            v-model="newPizza.options[1].price"
            id="price2"
            type="text"
          >
        </div>
        <div class="form_group">
          <button
            @click.prevent="add"
          >
            Add
          </button>
          <span>{{ message }}</span>
        </div>
      </form>
  </section>
</template>



<style lang="scss" scoped>
span {
  margin-left: 1rem;
}

</style>