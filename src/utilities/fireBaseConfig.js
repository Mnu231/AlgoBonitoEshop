// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection , addDoc , getFirestore, getDoc, doc, getDocs  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiqKpEEOb3ZYhMEvJUhQXnFAl3jtRM1Nk",
  authDomain: "algobonitoe2.firebaseapp.com",
  projectId: "algobonitoe2",
  storageBucket: "algobonitoe2.appspot.com",
  messagingSenderId: "308074328240",
  appId: "1:308074328240:web:f4447d858eeb6fc4fe4b75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);

async function cargarBaseDeDatos (){
  const promise = await fetch('./json/productos.json')
  const productos = await promise.json()
  productos.forEach(async (producto) => {
    await addDoc(collection(db, "productos"),{
      tittle : producto.tittle,
      price : producto.price,
      pictureUrl : producto.pictureUrl,
      description : producto.description,
      categoryId : producto.categoryId,
      quantity : producto.quantity,
    })
  });
}



export {cargarBaseDeDatos,db, app};