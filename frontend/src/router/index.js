import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      alias: '/iam',
      name: 'I am',
      component: () => import('../views/FocusView.vue')
    },
    {
      path: '/demoUser',
      name: 'demo user',
      component: () => import('../views/UserDemoView.vue')
    },
    {
      path: '/demoDeveloper',
      name: 'demo developer',
      component: () => import('../views/UserDemoView.vue')
    }
  ]
})

export default router
