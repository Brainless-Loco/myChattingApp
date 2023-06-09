// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmOlteSCgNUdf9zxOPveAo_3PlvSdzp7I",
  authDomain: "mychatapp-184f2.firebaseapp.com",
  projectId: "mychatapp-184f2",
  storageBucket: "mychatapp-184f2.appspot.com",
  messagingSenderId: "50079907095",
  appId: "1:50079907095:web:944ee9fb54b1879d9f4b52"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();