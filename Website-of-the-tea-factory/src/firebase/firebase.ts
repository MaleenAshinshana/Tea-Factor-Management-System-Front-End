// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.FIREBASE_KEY,
    authDomain: "tea-factory-3eb6b.firebaseapp.com",
    projectId: "tea-factory-3eb6b",
    storageBucket: "tea-factory-3eb6b.appspot.com",
    messagingSenderId: "558326538044",
    appId: "1:558326538044:web:394b802e0e8b12f3690839"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);