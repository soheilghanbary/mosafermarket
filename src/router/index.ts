import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home.vue')
    },
    {
      path: '/agencies',
      name: 'agency',
      component: () => import('@/pages/agencies.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/pages/contact.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/pages/search.vue')
    },
  ]
})

export default router
