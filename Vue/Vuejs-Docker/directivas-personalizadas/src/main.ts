import { createApp } from 'vue'
import App from './App.vue'

// estructura de directiva personalizada
const app = createApp(App)

// directiva simple
app.directive(
    'font-size', // nombre de mi directiva personalizada
    {
        beforeMount: (el) => {
            el.style.fontSize = '2em'
            el.style.color = 'red'
            el.style.fontWeight = 'bold'
        }
    }
    )

// directiva simple con binding
app.directive(
    'custom-size', // nombre de mi directiva
    {
        beforeMount: (el, binding) => {
            el.style.fontSize = binding.value + 'px'
        }
    }
)

// directiva con argumentos
app.directive(
    'custom-size-other', // nombre de mi directiva
    {
        beforeMount: (el, binding) => {
            let size = 20  //default value
            switch(binding.arg){
                case 'sm':
                    size = 10
                    break
                case 'md':
                    size = 15
                    break
                case 'lg':
                    size = 25
                    break
                case 'xl':
                    size = 45
            }
            el.style.fontSize = size + 'px'
        }
    }
)

// con modificadores
app.directive(
    'custom-mod', // nombre de mi directiva
    {
        beforeMount: (el, binding) => {
            let size = 18

            if(binding.modifiers.sm){
                size = 10
            }else if (binding.modifiers.md) {
                size = 15
            }else if (binding.modifiers.lg) {
                size = 25
            }else if (binding.modifiers.xl) {
                size = 45
            }

            el.style.fontSize = size + 'px'

            if (binding.modifiers.red) {
                el.style.color = '#ff0000'
                
            }else if (binding.modifiers.green) {
                el.style.color = '#00ff00'
            }else if(binding.modifiers.blue){
                el.style.color = '#0000ff'
            }

        }
    }
)
app.mount('#app')

