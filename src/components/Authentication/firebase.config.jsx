// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqdzH_Gi8Fws8r2I_3Qtt_Y1C5rb5DiDw",
  authDomain: "chatting-app-p-22aea.firebaseapp.com",
  projectId: "chatting-app-p-22aea",
  storageBucket: "chatting-app-p-22aea.firebasestorage.app",
  messagingSenderId: "634601675172",
  appId: "1:634601675172:web:281482845abe1774e70931",
  measurementId: "G-T85R8K9WRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig;