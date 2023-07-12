// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVv3B9IHJkACNVEZdBTqBdkPX6ojZXxP0",
  authDomain: "pizza-planet-f2367.firebaseapp.com",
  projectId: "pizza-planet-f2367",
  storageBucket: "pizza-planet-f2367.appspot.com",
  messagingSenderId: "460912677039",
  appId: "1:460912677039:web:b50bfa118e2577ea25045a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const dbPizzasRef = collection(db, 'pizzas')
export const dbOrdersRef = collection(db, 'orders')
export const dbUsersRef = collection(db, 'users')