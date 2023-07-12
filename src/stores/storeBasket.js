import { ref, computed, watch } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import { addDoc } from 'firebase/firestore'
import { dbOrdersRef } from '../firebase'
import { useStoreAuth } from './storeAuth'



export const useStoreBasket = defineStore('storeBasket', () => {
  const storeAuth = useStoreAuth()
  const { userData } = storeToRefs(storeAuth)
  
  // Resets the sign in message after the user has logged in
  watch(userData, () => {
    signInMessage.value = ''
  })

  const basket = ref([])
  const basketText = ref('Your basket is empty')
  const signInMessage = ref('')

/*
  Add to basket 
*/
  function addToBasket(item, option) {
    const pizzaExists = basket.value.find((pizza) => {
      return pizza.name === item.name && pizza.size === option.size
    })
    if (pizzaExists) {
      pizzaExists.quantity++;
      return;
    }

    basket.value.push({
      name: item.name,
      price: option.price,
      size: option.size,
      quantity: 1,
    });
  }

/*
  increase, decrease, and remove 
*/ 
  function increaseQuantity(item) {
    item.quantity++
  }

  function decreaseQuantity(item) {
    item.quantity--
    if (item.quantity === 0) {
      removeFromBasket(item)
    }
  }

  function removeFromBasket(item) {
    basket.value.splice(basket.value.indexOf(item), 1)
  }

/*
  Computer Total
*/
  const total = computed(() => {
    return basket.value.reduce((previous,current) => previous + (current.quantity * current.price), 0)
  })


/*
  Add New Order
*/
  async function addNewOrder() {
    try {
      if(userData.value) {
        const user = {
          id: userData.value.uid,
          email: userData.value.email
        }
        const order = {
          user,
          createdAt: new Date(),
          pizzas: { ...basket.value }
        }
        await addDoc(dbOrdersRef, order)
        basket.value = []
        basketText.value = 'Thank you, your order has been placed!'
      }
      else{
        signInMessage.value = 'Please sign in to place an order.'
      }

    } catch (error) {
      basketText.value = 'There was an error placing your order. Please try again.'
    }
  }

  return { 
    basket, 
    addToBasket, 
    increaseQuantity, 
    decreaseQuantity, 
    total, 
    addNewOrder, 
    basketText,
    signInMessage 
  }
})
