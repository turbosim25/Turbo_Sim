// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD72zsSkhM9JgNt7DEkGdCnWMnuhxVNSVk",
  authDomain: "turbosim-1be94.firebaseapp.com",
  projectId: "turbosim-1be94",
  storageBucket: "turbosim-1be94.firebasestorage.app",
  messagingSenderId: "149500767816",
  appId: "1:149500767816:web:4b32167f1247556e16b27d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);