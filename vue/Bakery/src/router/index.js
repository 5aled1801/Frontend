import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import offer from '../views/offer.vue'
import gallery from '../views/gallery.vue'
import contact from '../views/contact.vue'
import blog from '../views/blog.vue'

import simple from'../views/simple.vue'
import qut from'../views/qut.vue'
import gallpost from'../views/gallpost.vue'
import basicpost from'../views/basic.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
       {
      path: '/offer',
      name: 'offerApp',
      component: offer
    },   {
      path: '/gallery',
      name: 'galleryApp',
      component: gallery
    },
      {
      path: '/simple',
      name: 'simpleApp',
      component: simple
    },
      {
      path: '/qut',
      name: 'qutApp',
      component: qut
    },
      {
      path: '/gallpost',
      name: 'gallpostApp',
      component: gallpost
    },
      
    {
       path:'/basicpost'
      ,
      name: 'basicApp',
    component:basicpost},
    {
      path: '/contact',
      name: 'contactApp',
      component: contact
    },   {
      path: '/blog',
      name: 'blogApp',
      component: blog
    },
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
