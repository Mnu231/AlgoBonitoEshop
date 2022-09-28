// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFVl-Y18IlzG2rxP6kbBGJedKN3660vdU",
  authDomain: "algobonitoeshop.firebaseapp.com",
  projectId: "algobonitoeshop",
  storageBucket: "algobonitoeshop.appspot.com",
  messagingSenderId: "29721392836",
  appId: "1:29721392836:web:ca35e6ae4e2c32fa71bb91",
  measurementId: "G-24RWQ2RTM2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
