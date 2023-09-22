import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/dashboard',
    name: 'dash',
    component: DashboardView,
    meta: {
      requireAuth: true,
      role: 'admin'
    }
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// verificar rutas (guard)
router.beforeEach((to, from, next) => {
  // con vuex o pinia
  // const auth = store.jwt != null

  // firebase
  // const auth = getAuth().currentUSer != null

  // con session
  // const auth = $session.get('jwt') != null

  // con cookies
  // const auth = $cookie.get('jwt') != null

  const auth = false
  const needAuth = to.meta.requireAuth

  if(needAuth && !auth) {
    next('login')
  } else {
    next()
  }

})

export default router
