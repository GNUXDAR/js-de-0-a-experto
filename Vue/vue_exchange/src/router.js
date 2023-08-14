import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import CoinDetail from '@/views/CoinDetail'
import Error from '@/views/Error'

Vue.use(Router) //instalacion de plugin

//configuracion de la spa con la ruta
export default new Router ({
    mode: 'history', //history mode de html
    routes : [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/coin/:id',
            name: 'coin-detail',
            component: CoinDetail
        },
        {
            path: '*',
            name: 'error',
            component: Error
        }
    ]
})