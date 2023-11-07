import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShoppingCar from '../views/ShoppingCar.vue'
import FavPage from '../views/FavPage.vue'
import ContactUs from '../views/ContactUs.vue'
import registerApp from '../views/rigester.vue'
import AppLogin from '../views/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/car',
      name: 'ShoppingCar',
      component: ShoppingCar
    },
    {
      path: '/fav',
      name: 'FavPage',
      component: FavPage
    },
    {
      path: '/contact',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: "/singnup",
      name: "registerApp",
      component: registerApp

    },
    {
      path: "/login",
      name: 'AppLogin',
      component: AppLogin
    }
     ,
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
