import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { addDoc } from 'firebase/firestore'
import { dbOrdersRef } from '../firebase'


export const useStoreBasket = defineStore('storeBasket', () => {

  const basket = ref([])
  const basketText = ref('Your basket is empty')

/*
  Add to basket 
*/
  function addToBasket(item, option) {
    const pizzaExists = basket.value.find((pizza) => {
      return pizza.name === item.name && pizza.size === option.size
    })
    if (!pizzaExists) {
        basket.value.push({
        name: item.name,
        price: option.price,
        size: option.size,
        quantity: 1
      })
    } else {
      pizzaExists.quantity++
    }
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
      const order = {
        createdAt: new Date(),
        pizzas: { ...basket.value }
      }
      await addDoc(dbOrdersRef, order)
      basket.value = []
      basketText.value = 'Thank you, your order has been placed!'
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
    basketText }
})
