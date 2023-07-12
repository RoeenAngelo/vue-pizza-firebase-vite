import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)


app.use(createPinia())
app.use(router)

app.mount('#app')


/*
  Intl API formatting
*/
  app.config.globalProperties.filters = {
    formatMoney(value) {
      return new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'USD'
      }).format(value)
    }
  }