// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUOygbltuCucJUhiROtKE-26e_PWHQMCM",
  authDomain: "notification-db100.firebaseapp.com",
  projectId: "notification-db100",
  storageBucket: "notification-db100.appspot.com",
  messagingSenderId: "567212481424",
  appId: "1:567212481424:web:8f2b44b49c6c799953b115",
  measurementId: "G-HPYXZW3WKM",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
