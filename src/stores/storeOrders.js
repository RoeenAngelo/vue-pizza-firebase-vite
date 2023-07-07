import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'
import { deleteDoc, doc, getDocs, orderBy, query } from 'firebase/firestore'
import { dbOrdersRef } from '../firebase'


export const useStoreOrders = defineStore('storeOrders', () => {

  const allOrders = ref([])
  const message = ref('')

/*
  Fetch Orders
*/
  async function getOrders() {
    const queryData = query(dbOrdersRef, orderBy('createdAt'))

    try {
      message.value = "";
      allOrders.value = []
      const docs = await getDocs(queryData);
      docs.forEach((doc) => {
        const order = {
          id: doc.id,
          ...doc.data(),
        };
        allOrders.value.push(order);
      });

    } 
    
    catch (error) {
      message.value =
        "There was an error fetching orders, please reload the page";
    }
  }

  onMounted(getOrders)

/*
  Delete Order
*/
  async function deleteOrder(id) {
    try {
      message.value = "";
      const order = doc(dbOrdersRef, id);
      await deleteDoc(order);
      getOrders();
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
