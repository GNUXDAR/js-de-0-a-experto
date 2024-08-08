// import settings from "./settings";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
// const app = initializeApp(settings);
// const db = getDatabase(app);
// const analytics = getAnalytics(app);

// export default app;
// export { db }; 


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAYcnNeQ7VF2atqKDhTlXew1UcINyVgGA",
  authDomain: "vuejs-5b3a4.firebaseapp.com",
  projectId: "vuejs-5b3a4",
  storageBucket: "vuejs-5b3a4.appspot.com",
  messagingSenderId: "736114519531",
  appId: "1:736114519531:web:a2a22fab77e759c5587dae",
  measurementId: "G-HZZZZ7KTD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app }
// const analytics = getAnalytics(app);