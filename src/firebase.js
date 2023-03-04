// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeNKPmShzBF7mjhkvl2ellhB-kCi-XkEI",
  authDomain: "naval-app-c93a5.firebaseapp.com",
  projectId: "naval-app-c93a5",
  storageBucket: "naval-app-c93a5.appspot.com",
  messagingSenderId: "912291796449",
  appId: "1:912291796449:web:5ebd299ac2b2465fa36ea0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
