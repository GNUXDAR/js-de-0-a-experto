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

## Link config Login Social
[Google](https://console.firebase.google.com/)  
[Facebook](https://developers.facebook.com/)  
[Twitter](https://developer.twitter.com/)  
[Github](https://github.com/settings/developers)
[AWS](https://portal.aws.amazon.com/billing/signup)
[Amplify](https://docs.amplify.aws/start/getting-started/installation/q/integration/vue/#configure-the-amplify-cli)

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

## Install Amplify to login with AWS (Incomplete)
```
npm install -g @aws-amplify/cli

amplify configure
amplify init
amplify add auth
amplify push

npm install aws-amplify @aws-amplify/ui-vue
amplify console
```

## Work with cookies
```
npm install vue-cookies
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
