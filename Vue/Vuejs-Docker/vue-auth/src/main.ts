import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap"

import { initializeApp } from "firebase/app";

import { VueCookies } from 'vue-cookies';

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

const app = createApp(App);

app.use(router).use(VueCookies, {expires: '1d'}).mount('#app');

// use(VueCookies, {
//     expires: '1d',
//     path: '/',
//     domain: '',
//     secure: '',
//     sameSite: ''
// })


// establecer una cookie
// $cookies.set('auth', 1000)

// recuperar una cookie
// $cookies.get('aut')

// eliminar una cookie
// $cookies.remove('auth')

// existe una cookie?
// $cookies.isKey('auth')

// cuales tengo guardadas?
// $cookies.keys()