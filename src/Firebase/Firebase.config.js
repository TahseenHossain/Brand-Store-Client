// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdcqlJBe6poL0mUdoWscTlqx3zoqRPc6E",
  authDomain: "brand-store-f6c94.firebaseapp.com",
  projectId: "brand-store-f6c94",
  storageBucket: "brand-store-f6c94.appspot.com",
  messagingSenderId: "695965015208",
  appId: "1:695965015208:web:5cfd48d25055d17623b69d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};