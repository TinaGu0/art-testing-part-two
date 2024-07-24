import { createRouter, createWebHistory } from 'vue-router'
//@ts-ignore
import HomeView from '../views/HomeView.vue'

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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/ar',
      name: 'ar',
      component: () => import('../views/ArView.vue')
    },
  ]
})

export default router
