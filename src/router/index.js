import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExperienciaPasseios from '@/views/ExperienciaPasseios.vue'
import ExperienciaTransfer from '@/views/ExperienciaTransfer.vue'
import ExperienciaAulas from '@/views/ExperienciaAulas.vue'
import ExperienciaHospedagem from '@/views/ExperienciaHospedagem.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/passeios',
    name: 'ExperienciaPasseios',
    component: ExperienciaPasseios
  },
  {
    path: '/transfer',
    name: 'ExperienciaTransfer',
    component: ExperienciaTransfer
  },
  {
    path: '/aulas',
    name: 'ExperienciaAulas',
    component: ExperienciaAulas
  },
  {
    path: '/hospedagem',
    name: 'ExperienciaHospedagem',
    component: ExperienciaHospedagem
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