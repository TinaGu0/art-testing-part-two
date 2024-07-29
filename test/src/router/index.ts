import { createRouter, createWebHistory } from 'vue-router'
//@ts-ignore
import HomeView from '../views/HomeView.vue'
//@ts-ignore
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //@ts-ignore
      component: AboutView
    },
    {
      path: '/ar',
      name: 'ar',
      //@ts-ignore
      component: () => import('../views/ArView.vue')
    },
    {
      path: '/what',
      name: 'what',
      component: () => import('../components/WhatThe.vue')
    },
    {
      path: '/what2',
      name: 'what2',
      //@ts-ignore
      component: () => import('../components/WhatThe2.vue')
    },
  ]
})

export default router
