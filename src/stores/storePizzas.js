import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'
import { deleteDoc, doc, getDocs } from 'firebase/firestore'
import { dbPizzasRef } from '../firebase'
import { async } from '@firebase/util'

export const useStorePizzas = defineStore('storePizzas', () => {

  const allPizzas = ref([]);
  const message = ref("");

  /*
    Fetch Pizzas
  */
    async function getPizzas() {
      try {
        message.value = "";
        allPizzas.value = []
        const docs = await getDocs(dbPizzasRef);
        docs.forEach((doc) => {
          const pizza = {
            id: doc.id,
            ...doc.data(),
          };
          allPizzas.value.push(pizza);
        });

      } catch (error) {
        message.value =
          "There was an error fetching pizzas, please reload the page";
      }
    }
    onMounted(getPizzas);
  /*
    Delete Pizza
  */
    async function deletePizza(id) {
      try {
        message.value = "";
        const pizza = doc(dbPizzasRef, id);
        await deleteDoc(pizza);
        getPizzas();
      } catch (error) {
        message.value = "There was an error deleting the pizza, please try again";
      }
    }

  return { 
    allPizzas, 
    deletePizza, 
    message }
})
