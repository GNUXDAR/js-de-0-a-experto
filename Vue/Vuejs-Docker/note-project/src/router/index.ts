import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import NoteCreateView from '@/views/NoteCreateView.vue'
import NoteListView from '@/views/NoteListView.vue'
import RegisterView from '@/views/RegisterView.vue'

// store
import useAuth from '@/store/auth'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'noteList',
    component: NoteListView,
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      requiredAuth: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      requiredAuth: false
    }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: {
      requiredAuth: false
    }
  },
  {
    path: '/create',
    name: 'create',
    component: NoteCreateView,
    meta: {
      requiredAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const auth = useAuth()
  const isAuth = auth.token

  if((to.meta.requiredAuth) && (isAuth == null)) {
    next('login')
  } else  {
    next()
  }
  // const auth = false
  // const needAuth = to.meta.requiredAuth

  // if(needAuth && !auth) {
  //   next('login')
  // } else {
  //   next()
  // }
})

export default router
