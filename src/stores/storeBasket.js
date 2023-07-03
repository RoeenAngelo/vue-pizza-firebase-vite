import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStoreBasket = defineStore('storeBasket', () => {

  const basket = ref([])


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

  // const total = computed(() => {
  //   let totalCost = 0
  //   basket.value.forEach(item => {
  //     totalCost += item.quantity * item.price
  //   })
  //   return totalCost
  // })

  const total = computed(() => {
    return basket.value.reduce((p,c) => p + (c.quantity * c.price), 0)
  })

  return { basket, addToBasket, increaseQuantity, decreaseQuantity, total }
})
