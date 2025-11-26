import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MyHome',
      component: () => import('@/pages/MyHome.vue')
    }
  ],
})

export default router
