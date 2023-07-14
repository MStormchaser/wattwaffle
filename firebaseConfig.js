// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxa4VIhSpDloohF0pX7K05JR-q4NA5kOU",
  authDomain: "wattwaffle-f2454.firebaseapp.com",
  projectId: "wattwaffle-f2454",
  storageBucket: "wattwaffle-f2454.appspot.com",
  messagingSenderId: "782776267973",
  appId: "1:782776267973:web:aad3dfac0719917bd8acac",
  measurementId: "G-6W2555DBW9",
};

// Initialize Firebase

let app;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // Use the first initialized app
}

const analytics = getAnalytics(app);
const auth = getAuth();

export { auth, app, analytics };
