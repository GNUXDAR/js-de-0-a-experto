import { createApp } from 'vue'
import App from './App.vue'

// estructura de directiva personalizada
const app = createApp(App)

app.directive(
    'font-size', // nombre de mi directiva
    {
        beforeMount: (el) => {
            el.style.fontSize = '2em'
            el.style.color = 'red'
            el.style.fontWeight = 'bold'
        }
    }
    )


app.mount('#app')

