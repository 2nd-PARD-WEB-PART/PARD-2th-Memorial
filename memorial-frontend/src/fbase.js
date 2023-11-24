// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
from 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCCb-leDeMT0z0Nd8DjN6RoLOn8WPlCzA",
  authDomain: "short-c7ef5.firebaseapp.com",
  projectId: "short-c7ef5",
  storageBucket: "short-c7ef5.appspot.com",
  messagingSenderId: "315921897445",
  appId: "1:315921897445:web:b353240e8b04082228c10c",
  measurementId: "G-5VRMQBVGJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {app, auth};