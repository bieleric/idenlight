import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useFocusStore } from '../stores/focusStore'

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
      component: () => import('../views/DemoView.vue'),
      beforeEnter: () => {
        const focusStore = useFocusStore()
        focusStore.toggleUserActive(true)
      }
    },
    {
      path: '/demoDeveloper',
      name: 'demo developer',
      component: () => import('../views/DemoView.vue'),
      beforeEnter: () => {
        const focusStore = useFocusStore()
        focusStore.toggleUserActive(false)
      }
    }
  ]
})

export default router
