// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOiN-0AGk0Z2ASHhFSOYapLRzrApaZ5RQ",
  authDomain: "ecommerce-reactjs-d4ae7.firebaseapp.com",
  projectId: "ecommerce-reactjs-d4ae7",
  storageBucket: "ecommerce-reactjs-d4ae7.appspot.com",
  messagingSenderId: "392897225751",
  appId: "1:392897225751:web:be9eaa4632b36d032f6852"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);