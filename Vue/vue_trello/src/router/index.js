import { createRouter, createWebHistory } from 'vue-router'
import LocalView from "../views/LocalView.vue";
import BoardView from "../views/BoardView.vue";

// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'local',
    component: LocalView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/board/:id',
    name: 'board',
    component: BoardView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
