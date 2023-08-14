import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import router from '@/router'
import { dollarFilter, percentFilter } from '@/filters'
import Chart from 'chart.js'  //necesaria para el loader de vue-spiner
import Chartick from 'vue-chartkick'
import { VueSpinners} from '@saeris/vue-spinners'

//para poder utilizar componente de terceros Vue.use
Vue.use(VueSpinners)
Vue.use(Chartick.use(Chart))

//para poder utilizar Vue.filter
Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
