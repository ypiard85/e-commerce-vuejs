import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../views/Accueil'
import Pannier from '../views/Pannier'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/pannier',
    name: 'pannier',
    component: Pannier
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
