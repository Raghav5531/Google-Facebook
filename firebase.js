// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoaarYV5VRZYUA4dumX-EdgCc4cmjqrf0",
  authDomain: "ai-interviewer-d2da2.firebaseapp.com",
  projectId: "ai-interviewer-d2da2",
  storageBucket: "ai-interviewer-d2da2.appspot.com",
  messagingSenderId: "152152734493",
  appId: "1:152152734493:web:3064d27f1077f35ba23ff4",
  measurementId: "G-WKE2KTZPEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)