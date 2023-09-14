# vue-auth
Autenticacion con un backend, con firebase, con social login

## Install firebase
```
npm install firebase  
```
main.ts ó main.js
```
...
import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCAYcnNeQ7VF2atqKDhTlXew1UcINyVgGA",
    authDomain: "vuejs-5b3a4.firebaseapp.com",
    projectId: "vuejs-5b3a4",
    storageBucket: "vuejs-5b3a4.appspot.com",
    messagingSenderId: "736114519531",
    appId: "1:736114519531:web:60f6129f4b0ac75b587dae",
    measurementId: "G-88QJQRMS2N"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
```
## Install Bootstrap
```
npm install --save bootstrap  
npm install --save @popperjs/core  
```

## import Bootstrap
./src/main.ts

```
import "bootstrap/dist/css/bootstrap.min.css"  
import "bootstrap"  
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
