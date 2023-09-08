import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import WebView from '../views/WebView.vue'
import BlogView from '../views/BlogView.vue'
import PostView from '../views/PostView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about-us',
    name: 'about',
    component: AboutView
  },
  {
    path: '/web',
    name: 'web',
    component: WebView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    // parametros dinamicos
    path: '/blog/:postid',
    name: 'post',
    component: PostView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
