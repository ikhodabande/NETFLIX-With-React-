// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
  appId: process.env.REACT_APP_APP_ID
};

// REACT_APP_FIREBASE_API_KEY=AIzaSyBqPJ25V6r0UDDu1lca5AwelE6MwlHemwQ
// REACT_APP_FIREBASE_AUTH_DOMAIN=netflix-react-kh.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=netflix-react-kh
// REACT_APP_FIREBASE_STORAGE_BUCKET=netflix-react-kh.appspot.com
// REACT_APP_FIREBASE_MESSAGING_SENDER=75741703364
// REACT_APP_APP_ID=1:75741703364:web:5496a12b882381a3536d91

// Initialize Firebase
const app = initializeApp(firebaseConfig);