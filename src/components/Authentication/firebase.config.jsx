// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCniGhcnOHcQ3dL-Dm-90akH2_vk5OxYrs",
  authDomain: "chatt-app-3-ecfc8.firebaseapp.com",
  databaseURL: "https://chatt-app-3-ecfc8-default-rtdb.firebaseio.com",
  projectId: "chatt-app-3-ecfc8",
  storageBucket: "chatt-app-3-ecfc8.firebasestorage.app",
  messagingSenderId: "745324882079",
  appId: "1:745324882079:web:b5b2e6e89e9f49790c5aaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig