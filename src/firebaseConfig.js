// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDY9L1RKLvtYck5OuatewggGf1B0lSvwo4",
  authDomain: "e-commerce-deimos--react-js.firebaseapp.com",
  projectId: "e-commerce-deimos--react-js",
  storageBucket: "e-commerce-deimos--react-js.appspot.com",
  messagingSenderId: "522288730748",
  appId: "1:522288730748:web:39bcefb06e8bf4bbc8aff9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)