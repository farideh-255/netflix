//import firebase from "firebase"
//import firebase from 'firebase/app';
import firebase from 'firebase/compat/app'
import 'firebase/storage';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBXkAcphzCU1QoB3_vnTpRPTJdhL_08TOQ",
    authDomain: "ckeditor-1.firebaseapp.com",
    projectId: "ckeditor-1",
    storageBucket: "ckeditor-1.appspot.com",
    messagingSenderId: "582600023884",
    appId: "1:582600023884:web:7ab0b7b5a3e76ec12379e9",
    measurementId: "G-L0XGTMC98C"
  };

  firebase.initializeApp(firebaseConfig);
  const storage=firebase.storage();

  export default storage;

  /*** netflix2
   * 
   * // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXkAcphzCU1QoB3_vnTpRPTJdhL_08TOQ",
  authDomain: "ckeditor-1.firebaseapp.com",
  projectId: "ckeditor-1",
  storageBucket: "ckeditor-1.appspot.com",
  messagingSenderId: "582600023884",
  appId: "1:582600023884:web:3e8ca64c9e339afc2379e9",
  measurementId: "G-Z07KGXJ8PH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
   */