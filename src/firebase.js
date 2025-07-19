// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiDVpxd6IV_oSrO-WMTVJ5W--viH3oxVo",
  authDomain: "at-parkkin.firebaseapp.com",
  projectId: "at-parkkin",
  storageBucket: "at-parkkin.firebasestorage.app",
  messagingSenderId: "260451703202",
  appId: "1:260451703202:web:6e605efc3665287d9f3afb",
  measurementId: "G-CJC0TD495Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
