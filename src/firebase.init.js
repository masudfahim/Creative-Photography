// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHmZ4C4uocOPNbFlfGgpDQyqi6zrbchuU",
    authDomain: "photograpy-5b597.firebaseapp.com",
    projectId: "photograpy-5b597",
    storageBucket: "photograpy-5b597.appspot.com",
    messagingSenderId: "625727726195",
    appId: "1:625727726195:web:5a012126c15a1d03b7c006"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;