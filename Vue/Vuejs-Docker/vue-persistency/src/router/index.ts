import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LocalView from '@/views/LocalView.vue'
import WatchView from '@/views/WatchView.vue'
import WatchEffectView from '@/views/WatchEffectView.vue'
import WatchcoView from '@/views/WatchcoView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/local',
    name: 'local',
    component: LocalView
  },
  {
    path: '/watch',
    name: 'watch',
    component: WatchView
  },
  {
    path: '/watchcomposition',
    name: 'watchcomposition',
    component: WatchcoView
  },
  {
    path: '/watcheffect',
    name: 'watcheffect',
    component: WatchEffectView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
