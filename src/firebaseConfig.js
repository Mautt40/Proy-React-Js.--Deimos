// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain:process.env.REACT_APP_AUTHDOMAIN ,
  projectId:process.env.REACT_APP_PROJECTID ,
  storageBucket:process.env.REACT_APP_STORAGEBUCKET ,
  messagingSenderId:process.env.REACT_APP_MESSAGINGSENDERID ,
  appId:process.env.REACT_APP_APPID, 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)