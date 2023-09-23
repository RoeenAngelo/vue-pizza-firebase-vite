import { createRouter, createWebHistory } from 'vue-router'
import ViewHome from '../views/ViewHome.vue'
import ViewAbout from '../views/ViewAbout.vue'
import ViewMenu from '../views/ViewMenu.vue'
import ViewAdmin from '../views/ViewAdmin.vue'
import Delivery from '../components/Delivery.vue';
import History from '../components/History.vue';
import Locations from '../components/Locations.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: ViewHome,
        delivery: Delivery,
        history: History,
      }
    },
    {
      path: '/about',
      name: 'about',   
      component: ViewAbout,
      children: [
        { path: 'history', name: 'history', component: History },
        { path: 'delivery', name: 'delivery', component: Delivery },
        { path: 'locations', name: 'locations', component: Locations },
      ]
    },
    {
      path: '/admin',
      name: 'admin',   
      component: ViewAdmin
    },
    {
      path: '/menu',
      name: 'menu',   
      component: ViewMenu
    },
  ]
})


export default router
