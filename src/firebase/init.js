// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore" ;

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAy_KmG9rDTCFHUNAsShpwp1VaggmDK2W4",
    authDomain: "int305fb035-c82bc.firebaseapp.com",
    projectId: "int305fb035-c82bc",
    storageBucket: "int305fb035-c82bc.appspot.com",
    messagingSenderId: "840022871202",
    appId: "1:840022871202:web:ba7c0868e99ca3057f9bfb",
    measurementId: "G-XGTR0PPWH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init firestore service
const db = getFirestore()

export default db 

