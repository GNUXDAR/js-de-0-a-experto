import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import { messages } from './lang/messages'

const i18n =  createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')
