// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFf7Ee7RdHuasbdyoxcG0vXY42wcRnexU",
  authDomain: "moviesprimegpt.firebaseapp.com",
  projectId: "moviesprimegpt",
  storageBucket: "moviesprimegpt.firebasestorage.app",
  messagingSenderId: "208778758723",
  appId: "1:208778758723:web:3279743b16adec6a5f22f6",
  measurementId: "G-VMXN6SL1Y6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();