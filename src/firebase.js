// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJqXPGwCGtgi249bvn_xVG3MHAm8DLh1U",
  authDomain: "maina-fire.firebaseapp.com",
  projectId: "maina-fire",
  storageBucket: "maina-fire.appspot.com",
  messagingSenderId: "500200116301",
  appId: "1:500200116301:web:24446f0a68274eefb34c04",
  databaseURL:"https://maina-fire-default-rtdb.firebaseio.com" 
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);