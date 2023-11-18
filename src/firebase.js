// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPi5DAFZO-YX6EsmeeS9JGuW3cYG8E77o",
  authDomain: "seedsowmatic.firebaseapp.com",
  projectId: "seedsowmatic",
  storageBucket: "seedsowmatic.appspot.com",
  messagingSenderId: "1053929503955",
  appId: "1:1053929503955:web:8437b2dc80a76e53eca826",
  measurementId: "G-XJHJ0LJ6YG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, db, auth };
