import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExperienciaPasseio from '@/views/ExperienciaPasseio.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/passeios',
    name: 'ExperienciaPasseio',
    component: ExperienciaPasseio
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router