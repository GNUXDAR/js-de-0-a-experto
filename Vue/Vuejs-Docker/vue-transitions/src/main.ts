import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiFileCode, PiPichuShiny, PiPikachu } from "oh-vue-icons/icons";  //paquete de icons, podemos importar todos los que necesitemos

addIcons(BiFileCode, PiPichuShiny, PiPikachu);

const app = createApp(App)
app.component("v-icon", OhVueIcon);
app.use(router).mount('#app')
