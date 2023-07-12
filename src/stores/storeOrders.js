import { ref, onMounted, onUnmounted } from 'vue'
import { defineStore } from 'pinia'
import { deleteDoc, doc, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore'
import { dbOrdersRef } from '../firebase'


export const useStoreOrders = defineStore('storeOrders', () => {

  const allOrders = ref([])
  const message = ref('')

  // Stop listening to orders when out of the admin view using onUnmounted hook
  const unsubscribeFromOrders = ref()


/*
  Fetch Orders
*/
  async function getOrders() {

    try {
      const queryData = query(dbOrdersRef, orderBy("createdAt"))
      message.value = "";

      const unsubscribe = onSnapshot(queryData, (docs) => {
        allOrders.value = []
        docs.forEach((doc) => {
          const order = {
            id: doc.id,
            ...doc.data(),
          };
          allOrders.value.push(order);
        });
      })
      unsubscribeFromOrders.value = unsubscribe
    } 
    catch (error) {
      message.value =
        "There was an error fetching orders, please reload the page";
    }
  }

  onMounted(getOrders)
  onUnmounted(() => {
    unsubscribeFromOrders.value()
  })
/*
  Delete Order
*/
  async function deleteOrder(id) {
    try {
      message.value = "";
      const order = doc(dbOrdersRef, id);
      await deleteDoc(order);
    } catch (error) {
      message.value = "There was an error deleting the order, please try again";
    }
  }
  return { 
    allOrders, 
    deleteOrder,
    message
   }
})
